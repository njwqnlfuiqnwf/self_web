# 博客更新指南

本指南将帮助你学习如何维护和更新个人博客网站。

## 📝 更新内容分类

### 1. 添加新文章
### 2. 修改现有文章
### 3. 更新样式和设计
### 4. 添加新功能
### 5. 部署更新

---

## 🚀 快速更新流程

```
本地修改 → 提交到 Git → 推送到 GitHub → 自动部署 → 在线生效
```

---

## 1️⃣ 添加新文章

### 方法 A：编辑 `js/data.js` 文件（推荐）

#### 步骤 1：打开文件
打开 `js/data.js` 文件

#### 步骤 2：添加新文章对象

在 `posts` 数组中添加新的文章对象：

```javascript
const posts = [
    // ... 已有文章 ...

    {
        id: 7,  // 唯一 ID（必须是数字，不能重复）
        title: "你的新文章标题",
        excerpt: "文章摘要，显示在文章列表中",
        date: "2026-03-25",  // 格式：YYYY-MM-DD
        tags: ["标签1", "标签2", "标签3"],  // 最多 3-5 个标签
        content: `# 文章标题

这里是文章的正文内容。

## 二级标题

### 三级标题

段落内容...

#### 代码示例

\`\`\`javascript
function hello() {
    console.log("Hello World!");
}
\`\`\`

#### 列表

- 列表项 1
- 列表项 2
- 列表项 3

#### 链接

[链接文字](https://example.com)

#### 引用

> 这是一个引用块

#### 表格

| 列 1 | 列 2 | 列 3 |
|-------|-------|-------|
| 数据 1 | 数据 2 | 数据 3 |

---
更多 Markdown 语法...
`
    },

    // ... 更多文章 ...
];
```

#### 步骤 3：ID 规则
- ID 必须是唯一的数字
- 建议从 1 开始递增（1, 2, 3...）
- 如果已经有 6 篇文章，新文章的 ID 应该是 7

#### 步骤 4：日期格式
- 使用 `YYYY-MM-DD` 格式
- 例如：`2026-03-25`、`2026-12-31`

#### 步骤 5：标签建议
- 选择相关的标签
- 标签会自动按出现频率排序
- 每个标签会显示文章数量

### Markdown 内容编写技巧

#### 支持的 Markdown 语法

```markdown
# 一级标题
## 二级标题
### 三级标题

**粗体文字**
*斜体文字*
~~删除线~~

[链接文字](URL)

![图片描述](图片URL)

- 无序列表
  - 子列表

1. 有序列表
2. 第二项

> 引用块

\`\`\`javascript
// 代码块
代码内容
\`\`\`

| 表头 1 | 表头 2 |
|--------|--------|
| 单元格 1 | 单元格 2 |

---

分隔线
```

#### 文章内容建议

1. **标题结构**
   ```markdown
   # 主标题（文章标题）
   ## 简介
   正文内容...

   ## 主要内容
   ### 子话题 1
   内容...

   ### 子话题 2
   内容...

   ## 总结
   总结内容...
   ```

2. **代码示例**
   ```markdown
   ## 代码示例

   这是一段 JavaScript 代码：

   \`\`\`javascript
   function add(a, b) {
       return a + b;
   }
   \`\`\`
   ```

3. **图片插入**
   ```markdown
   ## 项目截图

   ![项目界面](images/screenshot.png)
   ```

4. **步骤说明**
   ```markdown
   ## 安装步骤

   1. 下载安装包
   2. 运行安装程序
   3. 完成安装
   ```

---

## 2️⃣ 修改现有文章

### 修改文章内容

1. 打开 `js/data.js`
2. 找到要修改的文章（通过 ID 或标题）
3. 修改相应的字段：
   ```javascript
   {
       id: 1,
       title: "修改后的标题",
       excerpt: "修改后的摘要",
       date: "2026-03-25",  // 可以更新日期
       tags: ["新标签1", "新标签2"],  // 可以修改标签
       content: `# 修改后的内容...`
   }
   ```
4. 保存文件

### 修改文章格式

如果你想改进文章的格式：
1. 查看现有文章的 Markdown 内容
2. 学习使用的格式和结构
3. 保持风格一致性
4. 应用到新文章中

---

## 3️⃣ 更新样式和设计

### 修改颜色主题

打开 `css/style.css`，修改 CSS 变量：

```css
:root {
    /* 主色调 */
    --primary-color: #2563eb;        /* 主蓝色 */
    --primary-hover: #1d4ed8;        /* 悬停时的蓝色 */

    /* 文字颜色 */
    --text-primary: #1f2937;        /* 主文字（深灰） */
    --text-secondary: #4b5563;       /* 次要文字（中灰） */
    --text-muted: #9ca3af;          /* 弱化文字（浅灰） */

    /* 背景颜色 */
    --bg-primary: #ffffff;           /* 主背景（白色） */
    --bg-secondary: #f9fafb;        /* 次要背景（浅灰） */
    --bg-tertiary: #f3f4f6;        /* 第三级背景（更浅灰） */

    /* 边框颜色 */
    --border-color: #e5e7eb;        /* 边框颜色 */
}
```

### 修改字体大小

```css
:root {
    /* 字体大小 */
    --text-xs: 0.75rem;     /* 极小文字 */
    --text-sm: 0.875rem;    /* 小文字 */
    --text-base: 1rem;      /* 基础文字 */
    --text-lg: 1.125rem;    /* 大文字 */
    --text-xl: 1.25rem;     /* 超大文字 */
    --text-2xl: 1.5rem;    /* 特大文字 */
    --text-3xl: 1.875rem;   /* 巨大文字 */
    --text-4xl: 2.25rem;    /* 标题文字 */
}
```

### 修改间距

```css
:root {
    /* 间距 */
    --spacing-xs: 0.5rem;    /* 极小间距 */
    --spacing-sm: 0.75rem;   /* 小间距 */
    --spacing-md: 1rem;      /* 中等间距 */
    --spacing-lg: 1.5rem;    /* 大间距 */
    --spacing-xl: 2rem;      /* 超大间距 */
    --spacing-2xl: 3rem;    /* 特大间距 */
}
```

### 修改博客名称

修改 `index.html` 和 `about.html` 中的博客名称：

```html
<h1 class="logo">
    <a href="index.html">你的博客名称</a>
</h1>
```

### 修改 Hero 区域

修改 `index.html` 的 Hero 部分：

```html
<section class="hero">
    <div class="container">
        <h2 class="hero-title">探索 AI 的无限可能</h2>
        <p class="hero-subtitle">你的副标题或简介</p>
    </div>
</section>
```

---

## 4️⃣ 添加新功能

### 添加社交媒体链接

在 `about.html` 中添加：

```html
<h3>联系我</h3>
<div class="social-links">
    <a href="https://github.com/yourusername" target="_blank">GitHub</a>
    <a href="https://twitter.com/yourusername" target="_blank">Twitter</a>
    <a href="https://linkedin.com/in/yourusername" target="_blank">LinkedIn</a>
</div>
```

### 添加统计功能

使用简单的访问计数器：

```html
<!-- 在每个页面添加 -->
<script>
    // 简单的页面访问统计
    if (localStorage.getItem('pageViews')) {
        localStorage.setItem('pageViews', parseInt(localStorage.getItem('pageViews')) + 1);
    } else {
        localStorage.setItem('pageViews', 1);
    }
    console.log('页面访问次数:', localStorage.getItem('pageViews'));
</script>
```

### 添加搜索功能

在 `js/main.js` 中添加：

```javascript
// 添加搜索框 HTML
const searchHTML = `
    <div class="search-box">
        <input type="text" id="search-input" placeholder="搜索文章...">
        <button onclick="searchPosts()">搜索</button>
    </div>
`;

document.querySelector('.hero .container').insertAdjacentHTML('beforeend', searchHTML);

// 搜索功能
function searchPosts() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const filtered = posts.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
    );
    renderPosts(filtered);
}
```

---

## 5️⃣ 部署更新

### 更新到 GitHub Pages（自动部署）

**方法 A：使用 GitHub 网页界面**

1. 进入你的 GitHub 仓库
2. 点击需要修改的文件（如 `js/data.js`）
3. 点击右上角的铅笔图标 ✏️
4. 修改内容
5. 在底部填写提交信息：
   - "Update message: 添加新文章"
6. 点击 "Commit changes"

**方法 B：使用 Git 命令行**

```bash
# 1. 查看修改的文件
git status

# 2. 添加所有修改的文件
git add .

# 3. 或者只添加特定文件
git add js/data.js

# 4. 提交修改
git commit -m "添加新文章：XXX"

# 5. 推送到 GitHub
git push

# 6. 等待 1-2 分钟，GitHub Pages 会自动重新部署
```

### 更新到 Netlify（自动部署）

1. **如果是从 GitHub 导入的**：
   - Git 推送到 GitHub 后，Netlify 会自动重新部署
   - 等待 1-2 分钟即可

2. **如果是拖拽部署的**：
   - 重新打包所有文件为 ZIP
   - 再次拖拽到 Netlify（会自动覆盖之前的版本）

### 更新到 Vercel（自动部署）

1. **如果是从 GitHub 导入的**：
   - Git 推送到 GitHub 后，Vercel 会自动重新部署
   - 等待 1-2 分钟即可

2. **手动触发部署**：
   - 登录 Vercel 控制台
   - 进入项目页面
   - 点击 "Redeploy"

---

## 🔄 常用 Git 命令速查

```bash
# 查看当前状态
git status

# 查看修改的内容
git diff

# 添加文件到暂存区
git add .                    # 添加所有修改
git add filename             # 添加特定文件

# 提交修改
git commit -m "提交信息"

# 推送到远程仓库
git push

# 拉取最新代码
git pull

# 查看提交历史
git log --oneline

# 撤销本地修改（危险！）
git checkout -- filename

# 撤销暂存区的修改
git reset HEAD filename
```

---

## 📋 更新检查清单

### 添加新文章时：
- [ ] 打开 `js/data.js`
- [ ] 添加新文章对象
- [ ] 检查 ID 是否唯一
- [ ] 检查日期格式（YYYY-MM-DD）
- [ ] 检查标签是否合理
- [ ] 测试本地预览
- [ ] 提交到 Git
- [ ] 推送到 GitHub
- [ ] 等待自动部署
- [ ] 测试在线版本

### 修改样式时：
- [ ] 打开 `css/style.css`
- [ ] 修改对应的 CSS 变量或规则
- [ ] 测试本地预览
- [ ] 检查不同页面的效果
- [ ] 提交到 Git
- [ ] 推送到 GitHub
- [ ] 等待自动部署
- [ ] 测试在线版本

---

## 💡 最佳实践

### 1. 定期备份
```bash
# 定期提交代码，避免丢失
git add .
git commit -m "定期备份"
git push
```

### 2. 使用有意义的提交信息
```bash
# 好的提交信息
git commit -m "添加新文章：深入理解 Transformers 模型"
git commit -m "修复文章链接错误"
git commit -m "优化移动端显示效果"

# 不好的提交信息
git commit -m "update"
git commit -m "fix"
```

### 3. 分支管理（高级）
```bash
# 创建新分支
git checkout -b new-article

# 在新分支上工作
git add js/data.js
git commit -m "添加新文章"

# 合并到主分支
git checkout main
git merge new-article

# 推送到远程
git push origin main
```

### 4. 本地测试
```bash
# 启动本地服务器测试
python -m http.server 8000

# 浏览器访问
http://localhost:8000

# 确认无误后再提交
```

### 5. 文章管理建议
- 保持文章分类清晰
- 定期更新旧文章
- 删除不再相关的内容
- 保持标签系统简洁

---

## 🐛 常见问题

### Q: 更新后网页没有变化？

**A: 可能的原因和解决方法：**
1. **浏览器缓存**：强制刷新（Ctrl+F5 或 Cmd+Shift+R）
2. **部署未完成**：等待 2-3 分钟后再检查
3. **文件未上传**：确认 `git push` 成功
4. **路径错误**：检查文件路径是否正确

### Q: 文章显示格式错误？

**A: 检查 Markdown 语法：**
1. 确认代码块使用正确的反引号（\`\`\`）
2. 确认列表格式正确
3. 检查是否有未闭合的标记
4. 使用在线 Markdown 验证工具测试

### Q: 如何批量更新文章？

**A: 使用脚本辅助：**
```bash
# 创建脚本批量修改
# 批量更新日期、标签等
```

### Q: 如何回退到之前的版本？

**A: 使用 Git 回退：**
```bash
# 查看历史记录
git log --oneline

# 回退到指定版本
git reset --hard <commit-hash>

# 强制推送（谨慎使用！）
git push --force
```

---

## 📚 学习资源

- [Markdown 语法指南](https://www.markdownguide.org/)
- [Git 官方文档](https://git-scm.com/doc)
- [GitHub Pages 文档](https://docs.github.com/en/pages)

---

## 🎯 更新建议

### 每周更新
- 发布 1-2 篇新文章
- 修复发现的问题
- 优化用户体验

### 每月更新
- 审查和更新旧文章
- 添加新功能
- 收集用户反馈

### 季度回顾
- 分析访问数据
- 规划内容方向
- 优化网站性能

---

现在你已经掌握了博客更新的所有知识！开始创作和更新你的博客吧！🎉
