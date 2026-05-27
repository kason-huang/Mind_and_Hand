# Zotero Query Skill

> 标准化 Zotero 数据库查询与论文提取操作

## 安装

```bash
cd C:/Users/Administrator/Zotero
npm install sql.js
```

## 使用方式

### 列出所有文库

```bash
node .claude/skills/zotero-query.js collections
```

输出示例：
```
📁 aa具身 (0篇论文, 14个子文库)
  └─ BFM (1篇)
  └─ Genesis系列 (2篇)
  └─ ego (9篇)
  └─ pi系列 (11篇)
  └─ ...
📁 多模态 (5篇论文, 0个子文库)
```

### 查某个文库中的论文

```bash
node .claude/skills/zotero-query.js collection ego
```

输出包括每篇论文的标题、Zotero key、以及 PDF 的完整路径。

### 按关键词搜索

```bash
node .claude/skills/zotero-query.js search EgoScale
node .claude/skills/zotero-query.js search VLA
```

### 提取论文到 vault

配合查找结果，用以下命令将 PDF 拷贝到 `raw/papers/`：

```bash
cp "<Zotero存储路径>/<文件名>.pdf" "raw/papers/"
```

---

## 数据库结构说明

| 表 | 用途 |
|----|------|
| `collections` | 文库目录（含父子关系） |
| `collectionItems` | 文库-论文 映射 |
| `items` | 论文条目元数据 |
| `itemData` / `itemDataValues` | 论文标题、摘要等字段（fieldID=1 为标题） |
| `itemAttachments` | 附件（PDF/HTML 等），`parentItemID` 指向论文条目 |
| `itemAnnotations` | 论文中的高亮/批注 |

## 关键查询 SQL

```sql
-- 查找子文库
SELECT * FROM collections WHERE parentCollectionID = <父ID>;

-- 查找文库中的论文
SELECT i.itemID, i.key FROM collectionItems ci JOIN items i ON ci.itemID = i.itemID WHERE ci.collectionID = <文库ID>;

-- 查找论文标题
SELECT idv.value FROM itemData id JOIN itemDataValues idv ON id.valueID = idv.valueID WHERE id.itemID = <itemID> AND id.fieldID = 1;

-- 查找论文的 PDF 附件
SELECT i.key, ia.contentType FROM itemAttachments ia JOIN items i ON ia.itemID = i.itemID WHERE ia.parentItemID = <itemID>;
```
