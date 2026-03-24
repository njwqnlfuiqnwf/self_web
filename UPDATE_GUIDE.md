# 博客更新指南

本文档详细说明如何更新和维护你的个人博客网站。

## 📋 目录

- [添加新文章](#1-添加新文章)
- [修改现有文章](#2-修改现有文章)
- [更新样式和设计](#3-更新样式和设计)
- [更新博客信息](#4-更新博客信息)
- [部署更新](#5-部署更新)
- [常见问题](#6-常见问题)

---

## 1. 添加新文章

### 步骤 1：打开数据文件

打开 `js/data.js` 文件，找到 `posts` 数组。

### 步骤 2：添加新文章对象

在 `posts` 数组中添加新的文章对象：

```javascript
{
    id: 7,  // 必须是唯一的数字，不能重复
    title: "你的新文章标题",
    excerpt: "文章摘要，显示在文章列表中",
    date: "2026-03-25",  // 格式：YYYY-MM-DD
    tags: ["标签1", "标签2"],  // 建议每个文章 3-5 个标签
    content: `# 文章标题

这里是文章的正文内容，支持完整的 Markdown 语法。

## 二级标题

### 三级标题

段落内容...

#### 代码示例

\`\`\`javascript
function hello() {
    console.log("Hello, World!");
}
\`\`\`

#### 列表

- 无序列表项 1
- 无序列表项 2
  - 嵌套列表项

#### 引用

> 这是一个引用块

#### 表格

| 列1 | 列2 | 列3 |
|-----|-----|-----|
| 数据1 | 数据2 | 数据3 |

---

文章总结和要点...

更多内容...
`
}
```

### 步骤 3：ID 规则

- ID 必须是唯一的数字
- 建议从 1 开始递增（1, 2, 3, 4, 5, 6, 7...）
- 如果已经有 6 篇文章，新文章的 ID 应该是 7
- ID 不能重复，否则会导致文章显示错误

### 步骤 4：日期格式

- 使用 `YYYY-MM-DD` 格式
- 例如：`2026-03-25`、`2026-12-31`

### 步骤 5：标签建议

- 选择相关的标签
- 标签会自动按出现频率排序
- 每个标签会显示对应的文章数量
- 建议使用 3-5 个标签

---

## 2. 修改现有文章

### 步骤 1：打开数据文件

打开 `js/data.js` 文件。

### 步骤 2：找到要修改的文章

通过 ID 或标题找到要修改的文章。

### 步骤 3：修改相应字段

```javascript
{
    id: 1,  // ID 保持不变
    title: "修改后的标题",
    excerpt: "修改后的摘要，显示在文章列表中",
    date: "2026-03-25",  // 可以更新日期
    tags: ["新标签1", "新标签2"],  // 可以修改标签
    content: `# 修改后的内容...

这里可以修改文章的完整内容...

支持所有 Markdown 语法...

\`\`\`javascript
// 示例代码...
\`\`\`

## 总结

修改后的总结和要点...
`
}
```

### 步骤 4：保存文件

保存 `js/data.js` 文件。

### 步骤 5：测试

在浏览器中打开博客，测试修改是否生效。

---

## 3. 更新样式和设计

### 修改主色调

打开 `css/style.css`，修改 CSS 变量：

```css
:root {
    /* 主色调 - 简约现代、高级不刺眼 */
    --primary-color: #2563eb;
    --primary-hover: #1d4ed8;
    
    /* 文字颜色 */
    --text-primary: #1f2937;
    --text-secondary: #4b5563;
    --text-muted: #9ca3af;
    
    /* 背景颜色 */
    --bg-primary: #ffffff;
    --bg-secondary: #f9fafb;
    --bg-tertiary: #f3f4f6;
    
    /* 边框颜色 */
    --border-color: #e5e7eb;
}
```

### 修改字体大小

```css
:root {
    /* 字体大小 */
    --text-xs: 0.75rem;
    --text-sm: 0.875rem;
    --text-base: 1rem;
    --text-lg: 1.125rem;
    --text-xl: 1.25rem;
    --text-2xl: 1.5rem;
    --text-3xl: 1.875rem;
    --text-4xl: 2.25rem;
}
```

### 修改圆角

```css
:root {
    /* 圆角 */
    --radius-sm: 0.25rem;
    --radius-md: 0.5rem;
    --radius-lg: 0.75rem;
    --radius-xl: 1rem;
}
```

---

## 4. 更新博客信息

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

---

## 5. 部署更新

### 更新到 GitHub Pages（自动部署）

#### 方法 A：使用 GitHub 网页界面

1. 进入你的 GitHub 仓库
2. 找到需要修改的文件（如 `js/data.js`）
3. 点击文件进入编辑页面
4. 点击右上角的铅笔图标 ✏️
5. 修改内容
6. 在底部填写提交信息：
   - "Update message: 添加新文章"
7. 点击 "Commit changes"
8. 等待 1-2 分钟，GitHub Pages 会自动重新部署

#### 方法 B：使用 Git 命令行

```bash
# 1. 查看当前状态
git status

# 2. 添加所有修改的文件
git add .

# 或者只添加特定文件
git add js/data.js

# 3. 提交修改
git commit -m "添加新文章"

# 4. 推送到 GitHub
git push

# 5. 等待 1-2 分钟，GitHub Pages 会自动重新部署
```

### 更新到 Netlify（自动部署）

1. **如果是从 GitHub 导入的：**
   - Git 推送到 GitHub 后，Netlify 会自动重新部署
   - 等待 1-2 分钟即可

2. **如果是拖拽部署的：**
   - 重新打包所有文件为 ZIP
   - 再次拖拽到 Netlify（会自动覆盖之前的版本）

### 更新到 Vercel（自动部署）

1. **如果是从 GitHub 导入的：**
   - Git 推送到 GitHub 后，Vercel 会自动重新部署
   - 等待 1-2 分钟即可

2. **手动触发部署：**
   - 登录 Vercel 控制台
   - 进入项目页面
   - 点击 "Redeploy"

---

## 6. 常见问题

### Q: 更新后网页没有变化？

**A: 可能的原因和解决方法：**

1. **浏览器缓存**：
   - 强制刷新页面（Ctrl+F5 或 Cmd+Shift+R）
   - 或清除浏览器缓存

2. **部署未完成**：
   - 等待 2-3 分钟后再检查
   - 查看部署平台的构建状态

3. **文件未上传**：
   - 确认 `git push` 是否成功
   - 检查 GitHub 仓库是否有更新

4. **文件路径错误**：
   - 检查文件路径是否正确
   - 例如：`href="css/style.css"`

5. **GitHub Pages 设置错误**：
   - 确认 GitHub Pages 设置正确（Settings → Pages）

### Q: 文章显示格式错误？

**A: 检查以下内容：**

1. **Markdown 格式**：
   - 确认代码块使用正确的反引号（```）
   - 检查列表格式是否正确
   - 确保标题等级正确

2. **特殊字符**：
   - Markdown 中的特殊字符需要转义
   - 例如：`\*` 而不是 `*`

3. **代码块格式**：
   ```javascript
   // 正确的代码块
   function hello() {
       console.log("Hello, World!");
   }
   ```

4. **使用在线 Markdown 验证工具**：
   - 访问 https://markdown-it.github.io/
   - 测试你的 Markdown 内容

### Q: 如何批量更新文章？

**A: 使用脚本辅助：**

```javascript
// 示例：批量更新日期、标签等
posts.forEach(post => {
    // 批量更新
    if (post.id === 1) {
        post.title = "新标题";
        post.tags = ["新标签", "更新"];
    }
});
```

### Q: 如何回退到之前的版本？

**A: 使用 Git 回退：**

```bash
# 查看提交历史
git log --oneline

# 回退到指定版本
git reset --hard <commit-hash>

# 强制推送（谨慎使用！）
git push --force

# 或者更安全的方法：创建新分支
git checkout -b fix-mistake <commit-hash>
git push -u origin fix-mistake
```

---

## 📝 最佳实践

### 1. 定期备份

```bash
# 定期提交代码
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
git checkout -b feature/new-article

# 在新分支上工作
git add js/data.js
git commit -m "添加新文章"

# 合并到主分支
git checkout main
git merge feature/new-article

# 推送到远程
git push origin main
```

### 4. 本地测试

```bash
# 启动本地服务器测试
python -m http.server 8000

# 或使用 Node.js
npx http-server

# 浏览器访问
# http://localhost:8000

# 确认无误后再提交
```

### 5. 使用 Gitignore

在项目根目录创建 `.gitignore` 文件：

```
# 依赖
node_modules/

# 日志
*.log

# IDE
.vscode/
.idea/

# 操作系统
.DS_Store
Thumbs.db

# 临时文件
*.tmp
*.bak
```

---

## 🚀 快速更新检查清单

更新文章时：
- [ ] 打开 `js/data.js`
- [ ] 添加/修改文章对象
- [ ] 检查 ID 是否唯一
- [ ] 检查日期格式（YYYY-MM-DD）
- [ ] 检查标签是否合理
- [ ] 测试本地预览
- [ ] 提交到 Git
- [ ] 推送到 GitHub
- [ ] 等待自动部署
- [ ] 测试在线版本

更新样式时：
- [ ] 打开 `css/style.css`
- [ ] 修改 CSS 变量
- [ ] 测试本地预览
- [ ] 检查不同页面效果
- [ ] 提交到 Git
- [ ] 推送到 GitHub
- [ ] 等待自动部署
- [ ] 测试在线版本

---

## 📚 学习资源

- [Markdown 语法指南](https://www.markdownguide.org/)
- [CSS 变量文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)
- [Git 官方文档](https://git-scm.com/doc)
- [GitHub Pages 文档](https://docs.github.com/en/pages)

---

## 📞 获取帮助

如果遇到问题：

1. **查看文档**：阅读 `README.md` 和 `DEPLOYMENT.md`
2. **检查错误**：使用浏览器控制台（F12）查看错误信息
3. **搜索帮助**：在 Google 或 Stack Overflow 搜索相关问题
4. **社区支持**：在 GitHub 提交 Issue

---

## 📊 版本历史

- **v1.0.0** (2026-03-24)：初始版本发布
  - 创建基础博客框架
  - 添加 6 篇示例文章
  - 实现标签筛选功能
  - 添加部署配置

---

## ✅ 总结

更新博客网站的关键步骤：

1. **添加文章**：编辑 `js/data.js` → 添加新文章对象 → 测试 → 提交
2. **修改文章**：编辑 `js/data.js` → 修改内容 → 测试 → 提交
3. **更新样式**：编辑 `css/style.css` → 修改 CSS 变量 → 测试 → 提交
4. **部署更新**：提交到 GitHub → 等待自动部署 → 测试在线版本

记住：**本地测试 → 提交代码 → 自动部署 → 在线验证**

祝你更新顺利！🎉
