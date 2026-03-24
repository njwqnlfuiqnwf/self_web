# 博客部署指南

本指南将帮助你将个人博客部署到免费或低成本的托管平台，以便分享给他人访问。

## 🌟 推荐的部署平台

### 1. GitHub Pages（推荐，完全免费）

**优点：**
- 完全免费
- 自动部署
- 自定义域名支持
- 无流量限制

**步骤：**

1. **创建 GitHub 仓库**
   - 登录 https://github.com
   - 点击右上角 "+" → "New repository"
   - 仓库名建议：`your-blog-name`
   - 设置为 Public（公开）
   - 创建仓库

2. **上传文件到 GitHub**
   
   **方法 A：使用 GitHub 网页界面（最简单）**
   - 在新创建的仓库页面，点击 "uploading an existing file"
   - 将博客的所有文件拖拽到上传区域
   - 点击 "Commit changes"

   **方法 B：使用 Git 命令行**
   ```bash
   # 初始化 Git 仓库
   git init
   
   # 添加所有文件
   git add .
   
   # 提交更改
   git commit -m "Initial commit"
   
   # 连接到 GitHub 仓库
   git remote add origin https://github.com/yourusername/your-blog-name.git
   
   # 推送到 GitHub
   git branch -M main
   git push -u origin main
   ```

3. **启用 GitHub Pages**
   - 进入仓库的 "Settings" 标签页
   - 在左侧菜单找到 "Pages"
   - 在 "Build and deployment" 下，Source 选择 "Deploy from a branch"
   - Branch 选择 `main`，文件夹选择 `/ (root)`
   - 点击 "Save"

4. **获取访问链接**
   - 等待 1-2 分钟后，刷新 Pages 页面
   - 你会看到访问链接，例如：`https://yourusername.github.io/your-blog-name/`

5. **（可选）自定义域名**
   - 在 Pages 设置中，点击 "Custom domain"
   - 输入你的域名，如 `blog.yourname.com`
   - 按照提示配置 DNS

---

### 2. Netlify（推荐，完全免费）

**优点：**
- 完全免费
- 部署速度极快
- 支持 HTTPS
- 全球 CDN 加速

**步骤：**

1. **创建 Netlify 账号**
   - 访问 https://www.netlify.com
   - 使用 GitHub 账号登录（推荐）

2. **部署博客**
   
   **方法 A：拖拽部署（最简单）**
   - 将博客的所有文件打包成 ZIP
   - 登录 Netlify 后，进入 "Sites" 页面
   - 将 ZIP 文件直接拖拽到页面上
   - 等待部署完成，会得到一个随机链接
   
   **方法 B：从 GitHub 导入**
   - 在 Netlify 点击 "Add new site" → "Import an existing project"
   - 选择你的 GitHub 仓库
   - 构建设置保持默认
   - 点击 "Deploy site"

3. **更新网站名称**
   - 在 Site settings → Change site name
   - 输入你想要的名称，如 `ai-learning-notes`
   - 最终链接：`https://ai-learning-notes.netlify.app`

4. **（可选）绑定自定义域名**
   - 在 Domain settings → Add custom domain
   - 输入你的域名并按照提示配置 DNS

---

### 3. Vercel（推荐，完全免费）

**优点：**
- 完全免费
- 部署速度快
- 优秀的开发者体验
- 自动 HTTPS

**步骤：**

1. **创建 Vercel 账号**
   - 访问 https://vercel.com
   - 使用 GitHub 账号登录

2. **导入项目**
   - 点击 "Add New" → "Project"
   - 选择你的 GitHub 仓库
   - Project Name 输入你想要的名称
   - 点击 "Deploy"

3. **获取访问链接**
   - 部署完成后，会得到一个链接，如：`https://your-project-name.vercel.app`

4. **（可选）更新域名**
   - 在项目设置中添加自定义域名

---

### 4. Cloudflare Pages（免费）

**优点：**
- 完全免费
- 全球 CDN
- 无限带宽
- 自动 HTTPS

**步骤：**

1. **创建 Cloudflare 账号**
   - 访问 https://dash.cloudflare.com/sign-up

2. **创建项目**
   - 登录后进入 "Workers & Pages"
   - 点击 "Create application" → "Pages" → "Connect to Git"

3. **选择仓库并部署**
   - 选择你的 GitHub 仓库
   - Build settings 使用默认设置
   - 点击 "Save and Deploy"

4. **获取访问链接**
   - 部署完成后，你会得到一个 `*.pages.dev` 的链接

---

## 📱 分享博客链接

### 更新 SEO 和社交媒体信息

在 `index.html` 中更新以下信息：

```html
<!-- 将这些 URL 替换为你的实际链接 -->
<meta property="og:url" content="https://your-blog-url.com/">
<meta property="twitter:url" content="https://your-blog-url.com/">
```

### 分享方式

1. **复制链接分享**
   - 在博客页面底部会显示当前链接
   - 点击"复制"按钮即可复制

2. **社交媒体分享**
   - 使用页面上的"分享到 Twitter"按钮
   - 或手动复制链接到任何社交平台

3. **创建个人品牌链接**
   - 使用 GitHub Pages 可以获得 `username.github.io` 链接
   - 或购买个人域名（如 `blog.yourname.com`）

---

## 🔧 自定义配置

### 添加自定义域名

**购买域名：**
- 阿里云：https://wanwang.aliyun.com
- 腾讯云：https://dnspod.cloud.tencent.com
- Namecheap：https://www.namecheap.com

**配置 DNS：**
1. 在域名提供商添加 CNAME 记录
2. 在托管平台配置自定义域名
3. 等待 DNS 生效（通常 10-60 分钟）

### 优化 SEO

1. **更新页面标题和描述**
   ```html
   <title>AI 学习笔记 - 你的名字</title>
   <meta name="description" content="你的博客描述">
   ```

2. **创建 sitemap.xml**
   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://yourblog.com/</loc>
       <lastmod>2026-03-24</lastmod>
     </url>
   </urlset>
   ```

3. **提交到搜索引擎**
   - Google Search Console
   - 百度站长平台
   - Bing Webmaster Tools

---

## 💰 成本对比

| 平台 | 免费额度 | 自定义域名 | 流量限制 | 推荐指数 |
|------|---------|-----------|---------|---------|
| GitHub Pages | 完全免费 | 支持 | 无限 | ⭐⭐⭐⭐⭐ |
| Netlify | 100GB/月 | 支持 | 无限 | ⭐⭐⭐⭐⭐ |
| Vercel | 100GB/月 | 支持 | 无限 | ⭐⭐⭐⭐⭐ |
| Cloudflare Pages | 完全免费 | 支持 | 无限 | ⭐⭐⭐⭐⭐ |

**结论：所有推荐平台都完全免费，适合个人博客使用！**

---

## 🚀 快速部署检查清单

- [ ] 创建托管平台账号
- [ ] 将博客文件上传到 GitHub
- [ ] 在托管平台连接 GitHub 仓库
- [ ] 等待部署完成
- [ ] 测试访问链接
- [ ] 更新 SEO 信息
- [ ] 测试分享功能
- [ ] （可选）配置自定义域名
- [ ] （可选）提交搜索引擎收录

---

## 📞 遇到问题？

### 常见问题

**Q: 部署后页面样式丢失？**
A: 检查 `css/style.css` 文件路径是否正确

**Q: 链接无法访问？**
A: 等待 2-3 分钟让 DNS 生效，或检查仓库是否为 Public

**Q: 如何更新博客？**
A: 修改文件后提交到 GitHub，会自动触发重新部署

**Q: 可以使用自己的域名吗？**
A: 可以！所有平台都支持自定义域名，参考上述配置步骤

---

## 🎉 完成！

你的博客现在已经可以分享给全世界访问了！

**下一步：**
1. 定期更新内容
2. 在社交媒体分享链接
3. 收集读者反馈
4. 持续优化用户体验
