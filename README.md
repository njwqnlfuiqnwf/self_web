# AI 学习笔记博客

一个简约现代的个人博客网站，专注于分享 AI 学习过程中的知识积累与问题解决方法。

## 功能特点

- 📝 **文章列表**：展示所有文章，支持按标签筛选
- 📄 **文章详情**：支持 Markdown 渲染
- 🏷️ **标签分类**：按标签浏览文章
- 👤 **关于页面**：介绍博客和作者
- 📱 **响应式设计**：完美适配移动端和桌面端
- 🎨 **简约现代**：高级不刺眼的视觉风格

## 快速开始

### 1. 直接使用

直接在浏览器中打开 `index.html` 即可查看博客：

```bash
# 使用本地服务器（推荐）
python -m http.server 8000

# 或使用 Node.js
npx http-server

# 然后访问
http://localhost:8000
```

### 2. 部署到 GitHub Pages

1. 将整个目录上传到 GitHub 仓库
2. 在仓库设置中启用 GitHub Pages
3. 选择 `main` 分支作为源

## 文件结构

```
.
├── index.html          # 首页
├── post.html           # 文章详情页
├── about.html          # 关于页面
├── css/
│   └── style.css       # 全局样式
├── js/
│   ├── data.js         # 文章数据
│   ├── main.js         # 首页逻辑
│   └── post.js         # 文章页逻辑
└── README.md           # 说明文档
```

## 添加文章

在 `js/data.js` 中添加新文章：

```javascript
{
    id: 7,  // 唯一 ID
    title: "文章标题",
    excerpt: "文章摘要",
    date: "2026-03-25",
    tags: ["标签1", "标签2"],
    content: `# Markdown 内容

这里是文章的具体内容，支持完整的 Markdown 语法。

## 二级标题

- 列表项 1
- 列表项 2

\`\`\`javascript
// 代码块
console.log('Hello World');
\`\`\`
`
}
```

## 自定义样式

在 `css/style.css` 中可以自定义颜色和样式：

```css
:root {
    --primary-color: #2563eb;  /* 主色调 */
    --text-primary: #1f2937;   /* 主文字颜色 */
    --bg-secondary: #f9fafb;  /* 背景颜色 */
    /* 更多样式变量... */
}
```

## 技术栈

- **HTML5**：语义化标签
- **CSS3**：现代 CSS 特性（Flexbox、Grid、CSS 变量）
- **JavaScript (ES6+)**：原生 JavaScript
- **Markdown**：使用 marked.js 渲染 Markdown

## 浏览器支持

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 许可证

MIT License

## 作者

AI 学习笔记

## 贡献

欢迎提交 Issue 和 Pull Request！
