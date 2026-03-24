# 博客文件清单

## 需要上传的文件列表

部署到 GitHub Pages、Netlify 或 Vercel 时，需要上传以下**所有文件和文件夹**：

### 📁 根目录文件

```
✓ index.html          # 首页
✓ post.html           # 文章详情页
✓ about.html          # 关于页面
✓ README.md           # 项目说明文档
✓ DEPLOYMENT.md       # 部署指南文档
✓ netlify.toml        # Netlify 配置文件
✓ vercel.json         # Vercel 配置文件
✓ deploy.bat          # Windows 部署脚本（可选）
✓ deploy.sh           # Linux/Mac 部署脚本（可选）
```

### 📁 css/ 文件夹

```
✓ css/
  └── style.css       # 全局样式文件
```

### 📁 js/ 文件夹

```
✓ js/
  ├── data.js         # 文章数据（包含所有示例文章）
  ├── main.js         # 首页逻辑
  └── post.js         # 文章详情页逻辑
```

### 📁 .github/ 文件夹（GitHub Pages 需要）

```
✓ .github/
  └── workflows/
      └── deploy.yml # GitHub Pages 自动部署配置
```

---

## 详细说明

### 必须上传的文件（共 12 个）

| 文件 | 说明 | 大小 |
|------|------|------|
| `index.html` | 首页文件 | ~4KB |
| `post.html` | 文章详情页 | ~2KB |
| `about.html` | 关于页面 | ~2KB |
| `css/style.css` | 样式文件 | ~15KB |
| `js/data.js` | 文章数据 | ~40KB |
| `js/main.js` | 首页脚本 | ~1KB |
| `js/post.js` | 文章页脚本 | ~1KB |

### 可选上传的文件

| 文件 | 说明 | 是否必需 |
|------|------|---------|
| `README.md` | 项目说明 | 建议上传 |
| `DEPLOYMENT.md` | 部署指南 | 建议上传 |
| `netlify.toml` | Netlify 配置 | 仅 Netlify 需要 |
| `vercel.json` | Vercel 配置 | 仅 Vercel 需要 |
| `.github/workflows/deploy.yml` | GitHub Actions 配置 | 仅 GitHub Pages 需要 |
| `deploy.bat` / `deploy.sh` | 部署脚本 | 可选 |

---

## 上传步骤详解

### 方法 1：GitHub 网页界面上传（最简单）

1. **创建 GitHub 仓库**
   - 访问 https://github.com/new
   - 仓库名：`your-blog-name`
   - 设置为 Public（公开）
   - 点击 "Create repository"

2. **上传文件**
   - 在仓库页面点击 "uploading an existing file"
   - **选中所有文件和文件夹**：
     ```
     ✓ index.html
     ✓ post.html
     ✓ about.html
     ✓ css/ (整个文件夹)
     ✓ js/ (整个文件夹)
     ✓ .github/ (整个文件夹)
     ✓ README.md
     ✓ DEPLOYMENT.md
     ✓ netlify.toml
     ✓ vercel.json
     ```
   - 点击 "Commit changes"

3. **启用 GitHub Pages**
   - 进入 Settings → Pages
   - Source 选择 "Deploy from a branch"
   - Branch 选择 `main`，文件夹选择 `/ (root)`
   - 点击 "Save"

4. **等待部署完成**
   - 等待 1-2 分钟
   - 刷新页面，看到访问链接

---

### 方法 2：使用 Git 命令行上传

```bash
# 1. 初始化 Git 仓库
git init

# 2. 添加所有文件
git add .

# 3. 查看添加的文件（确认是否正确）
git status

# 应该看到以下文件：
# css/style.css
# js/data.js
# js/main.js
# js/post.js
# index.html
# post.html
# about.html
# README.md
# DEPLOYMENT.md
# netlify.toml
# vercel.json
# .github/workflows/deploy.yml

# 4. 提交更改
git commit -m "Initial commit"

# 5. 连接到 GitHub 仓库
git remote add origin https://github.com/yourusername/your-blog-name.git

# 6. 推送到 GitHub
git branch -M main
git push -u origin main
```

---

### 方法 3：使用 Netlify 拖拽部署

1. **打包文件**
   - 选中所有文件和文件夹：
     ```
     ✓ index.html
     ✓ post.html
     ✓ about.html
     ✓ css/
     ✓ js/
     ✓ .github/
     ✓ README.md
     ✓ DEPLOYMENT.md
     ✓ netlify.toml
     ✓ vercel.json
     ```
   - 右键 → 发送到压缩(zipped)文件夹（Windows）
   - 或右键 → 压缩（Mac）

2. **上传到 Netlify**
   - 访问 https://app.netlify.com
   - 登录 GitHub 账号
   - 将 ZIP 文件拖拽到页面上
   - 等待上传和部署完成

3. **更改网站名称（可选）**
   - 在 Site settings → Change site name
   - 输入你想要的名称

---

## 文件结构总览

完整的项目结构如下：

```
c:/Users/ASUS/WorkBuddy/20260324161859/
│
├── index.html              # 首页
├── post.html               # 文章详情页
├── about.html              # 关于页面
├── README.md              # 项目说明
├── DEPLOYMENT.md          # 部署指南
├── FILES.md               # 本文件（文件清单）
├── netlify.toml           # Netlify 配置
├── vercel.json            # Vercel 配置
├── deploy.bat             # Windows 部署脚本
├── deploy.sh              # Linux/Mac 部署脚本
│
├── css/                   # 样式文件夹
│   └── style.css         # 全局样式
│
├── js/                    # JavaScript 文件夹
│   ├── data.js           # 文章数据
│   ├── main.js           # 首页逻辑
│   └── post.js           # 文章页逻辑
│
└── .github/               # GitHub 配置
    └── workflows/
        └── deploy.yml     # 自动部署配置
```

---

## 常见问题

### Q: 必须上传所有文件吗？

**A: 核心文件必须上传：**
- `index.html`、`post.html`、`about.html`
- `css/style.css`
- `js/data.js`、`js/main.js`、`js/post.js`

**文档文件建议上传：**
- `README.md`（项目说明）
- `DEPLOYMENT.md`（部署指南）

**配置文件按需上传：**
- `netlify.toml`（仅在 Netlify 部署时需要）
- `vercel.json`（仅在 Vercel 部署时需要）
- `.github/workflows/deploy.yml`（仅在 GitHub Pages 部署时需要）

**部署脚本可选：**
- `deploy.bat` / `deploy.sh`（可在本地使用，不需要上传）

### Q: 文件顺序重要吗？

**A: 不重要。** Git 和托管平台会自动处理文件结构。只需确保所有文件都在正确的文件夹中即可。

### Q: 可以删除不需要的文件吗？

**A: 可以。** 如果只部署到 GitHub Pages，可以删除：
- `netlify.toml`
- `vercel.json`
- `deploy.bat` / `deploy.sh`

### Q: 上传后发现有问题怎么办？

**A: 检查以下内容：**
1. 确认 `css/style.css` 和 `js/` 文件夹都已上传
2. 确认文件路径正确（例如 `href="css/style.css"`）
3. 查看浏览器控制台是否有错误（F12）
4. 确认 GitHub Pages 设置正确（Settings → Pages）

---

## 快速检查清单

上传前请确认：

- [ ] 已选中所有 HTML 文件（`index.html`, `post.html`, `about.html`）
- [ ] 已选中 `css/` 文件夹（包含 `style.css`）
- [ ] 已选中 `js/` 文件夹（包含 `data.js`, `main.js`, `post.js`）
- [ ] 已选中 `.github/` 文件夹（如果使用 GitHub Pages）
- [ ] 已选中 `README.md` 和 `DEPLOYMENT.md`
- [ ] 已选中对应平台的配置文件（`netlify.toml` 或 `vercel.json`）

确认无误后，即可开始上传！
