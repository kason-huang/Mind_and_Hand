#!/usr/bin/env node
/**
 * Zotero Query Tool — 从 Zotero SQLite 数据库中查询文库/论文信息
 *
 * 用法:
 *   node .claude/skills/zotero-query.js collections              # 列出所有文库
 *   node .claude/skills/zotero-query.js collection <名称>        # 查某个文库及其子文库中的论文
 *   node .claude/skills/zotero-query.js search <关键词>          # 按关键词搜索论文
 *   node .claude/skills/zotero-query.js papers <collectionID>    # 列出指定文库中所有论文及附件路径
 *
 * 依赖: sql.js (自动安装到 Zotero 目录)
 */

const path = require('path');
const fs = require('fs');

const ZOTERO_DIR = 'C:/Users/Administrator/Zotero';
const DB_PATH = path.join(ZOTERO_DIR, 'zotero.sqlite');
const STORAGE_DIR = path.join(ZOTERO_DIR, 'storage');
const SQLJS_PATH = path.join(ZOTERO_DIR, 'node_modules', 'sql.js');

async function main() {
  const cmd = process.argv[2];
  const arg = process.argv.slice(3).join(' ');

  if (!cmd) {
    console.log('用法:');
    console.log('  node zotero-query.js collections                        列出所有文库');
    console.log('  node zotero-query.js collection <名称或关键词>          查某个文库中的论文');
    console.log('  node zotero-query.js search <关键词>                    按关键词搜索论文');
    console.log('  node zotero-query.js papers <collectionID>              列出指定文库中所有论文');
    process.exit(0);
  }

  // 确保 sql.js 已安装
  if (!fs.existsSync(SQLJS_PATH)) {
    console.log('首次使用，正在安装 sql.js...');
    require('child_process').execSync('npm install sql.js', {
      cwd: ZOTERO_DIR,
      stdio: 'inherit'
    });
  }

  const initSqlJs = require(SQLJS_PATH);
  const SQL = await initSqlJs();
  const buffer = fs.readFileSync(DB_PATH);
  const db = new SQL.Database(buffer);

  try {
    switch (cmd) {
      case 'collections':
        await listCollections(db);
        break;
      case 'collection':
        await queryCollection(db, arg);
        break;
      case 'search':
        await searchPapers(db, arg);
        break;
      case 'papers':
        await listPapers(db, parseInt(arg) || arg);
        break;
      default:
        console.log(`未知命令: ${cmd}`);
    }
  } finally {
    db.close();
  }
}

// ============== 工具函数 ==============

function getTitle(db, itemId) {
  const r = db.exec(
    `SELECT idv.value FROM itemData id JOIN itemDataValues idv ON id.valueID = idv.valueID WHERE id.itemID = ${itemId} AND id.fieldID = 1`
  );
  return r.length > 0 ? r[0].values[0][0] : '(no title)';
}

function getAttachments(db, itemId) {
  const r = db.exec(
    `SELECT i.key, ia.contentType FROM itemAttachments ia JOIN items i ON ia.itemID = i.itemID WHERE ia.parentItemID = ${itemId}`
  );
  if (r.length === 0) return [];
  return r[0].values.map(v => ({ key: v[0], type: v[1] }));
}

function findStoragePath(attachmentKey) {
  // Zotero 存储目录以 item key 命名
  const dir = path.join(STORAGE_DIR, attachmentKey);
  if (!fs.existsSync(dir)) return null;
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.pdf'));
  return files.length > 0 ? path.join(dir, files[0]) : null;
}

function printItems(db, items) {
  for (const row of items) {
    const itemId = row[0];
    const itemKey = row[1];
    const title = getTitle(db, itemId);
    const attachments = getAttachments(db, itemId);

    console.log(`\n  📄 ${title}`);
    console.log(`     key: ${itemKey}`);

    for (const att of attachments) {
      const pdfPath = findStoragePath(att.key);
      if (pdfPath) {
        console.log(`     📎 PDF: ${pdfPath}`);
      } else if (att.type === 'application/pdf') {
        console.log(`     📎 PDF key: ${att.key} (文件未找到)`);
      } else {
        console.log(`     🔗 ${att.type} key: ${att.key}`);
      }
    }
  }
}

// ============== 命令实现 ==============

async function listCollections(db) {
  // 获取所有顶层文库
  const topLevel = db.exec(
    'SELECT collectionID, collectionName, key FROM collections WHERE parentCollectionID IS NULL ORDER BY collectionName'
  );

  for (const row of topLevel[0].values) {
    const colId = row[0];
    const name = row[1];
    const key = row[2];

    // 统计子文库数
    const sub = db.exec(`SELECT COUNT(*) FROM collections WHERE parentCollectionID = ${colId}`);
    const subCount = sub.length > 0 ? sub[0].values[0][0] : 0;

    // 统计论文数
    const itemCount = db.exec(`SELECT COUNT(*) FROM collectionItems WHERE collectionID = ${colId}`);
    const numItems = itemCount.length > 0 ? itemCount[0].values[0][0] : 0;

    console.log(`📁 ${name} (${numItems}篇论文, ${subCount}个子文库)`);

    // 列出子文库
    if (subCount > 0) {
      const children = db.exec(`SELECT collectionName, key FROM collections WHERE parentCollectionID = ${colId} ORDER BY collectionName`);
      for (const child of children[0].values) {
        const cid = db.exec(`SELECT collectionID FROM collections WHERE key = '${child[1]}'`);
        const ci = cid.length > 0
          ? db.exec(`SELECT COUNT(*) FROM collectionItems WHERE collectionID = ${cid[0].values[0][0]}`)
          : null;
        const cnt = ci && ci.length > 0 ? ci[0].values[0][0] : 0;
        console.log(`  └─ ${child[0]} (${cnt}篇)`);
      }
    }
  }
}

async function queryCollection(db, name) {
  // 按名称模糊搜索文库
  const cols = db.exec(
    `SELECT collectionID, collectionName, key FROM collections WHERE collectionName LIKE '%${name}%' ORDER BY collectionName`
  );

  if (cols.length === 0 || cols[0].values.length === 0) {
    console.log(`未找到名称包含 "${name}" 的文库`);
    return;
  }

  for (const col of cols[0].values) {
    const colId = col[0];
    const colName = col[1];
    console.log(`\n========== ${colName} (ID: ${colId}) ==========`);

    const items = db.exec(
      `SELECT i.itemID, i.key FROM collectionItems ci JOIN items i ON ci.itemID = i.itemID WHERE ci.collectionID = ${colId} ORDER BY i.dateAdded`
    );

    if (items.length === 0 || items[0].values.length === 0) {
      console.log('  (空)');
      continue;
    }

    printItems(db, items[0].values);
  }
}

async function searchPapers(db, keyword) {
  console.log(`搜索关键词: "${keyword}"\n`);

  const results = db.exec(
    `SELECT DISTINCT i.itemID, i.key FROM itemData id
     JOIN itemDataValues idv ON id.valueID = idv.valueID
     JOIN items i ON id.itemID = i.itemID
     WHERE idv.value LIKE '%${keyword}%'
     ORDER BY i.dateAdded DESC
     LIMIT 30`
  );

  if (results.length === 0 || results[0].values.length === 0) {
    console.log('未找到匹配的论文');
    return;
  }

  printItems(db, results[0].values);
}

async function listPapers(db, collectionId) {
  const colInfo = db.exec(`SELECT collectionName FROM collections WHERE collectionID = ${collectionId}`);
  const colName = colInfo.length > 0 ? colInfo[0].values[0][0] : `ID: ${collectionId}`;
  console.log(`\n========== ${colName} ==========`);

  const items = db.exec(
    `SELECT i.itemID, i.key FROM collectionItems ci JOIN items i ON ci.itemID = i.itemID WHERE ci.collectionID = ${collectionId}`
  );

  if (items.length === 0 || items[0].values.length === 0) {
    console.log('  (空)');
    return;
  }

  printItems(db, items[0].values);
}

main().catch(e => {
  console.error('错误:', e.message);
  process.exit(1);
});
