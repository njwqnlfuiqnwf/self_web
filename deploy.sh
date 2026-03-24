#!/bin/bash

echo "========================================"
echo "  AI 学习笔记博客 - 快速部署工具"
echo "========================================"
echo ""

PS3='请选择部署方式: '
options=("GitHub Pages（推荐）" "Netlify（推荐）" "Vercel（推荐）" "查看详细部署指南" "仅启动本地服务器预览" "退出")
select opt in "${options[@]}"
do
    case $opt in
        "GitHub Pages（推荐）")
            echo ""
            echo "========================================"
            echo "  GitHub Pages 部署指南"
            echo "========================================"
            echo ""
            echo "步骤 1: 创建 GitHub 仓库"
            echo "  1. 访问 https://github.com/new"
            echo "  2. 创建一个公开仓库"
            echo "  3. 仓库名：your-blog-name"
            echo ""
            echo "步骤 2: 上传文件"
            echo "  方法 A（推荐）："
            echo "  - 在 GitHub 网页界面点击 'uploading an existing file'"
            echo "  - 将本目录所有文件拖拽上传"
            echo ""
            echo "  方法 B（使用 Git）："
            echo "  git init"
            echo "  git add ."
            echo "  git commit -m 'Initial commit'"
            echo "  git remote add origin https://github.com/yourusername/your-repo.git"
            echo "  git branch -M main"
            echo "  git push -u origin main"
            echo ""
            echo "步骤 3: 启用 GitHub Pages"
            echo "  - 进入仓库 Settings → Pages"
            echo "  - Source 选择 'Deploy from a branch'"
            echo "  - Branch 选择 main"
            echo "  - 点击 Save"
            echo ""
            echo "步骤 4: 访问你的博客"
            echo "  - 等待 1-2 分钟"
            echo "  - 访问：https://yourusername.github.io/your-repo/"
            echo ""
            break
            ;;
        "Netlify（推荐）")
            echo ""
            echo "========================================"
            echo "  Netlify 部署指南"
            echo "========================================"
            echo ""
            echo "步骤 1: 创建 Netlify 账号"
            echo "  - 访问 https://app.netlify.com"
            echo "  - 使用 GitHub 账号登录"
            echo ""
            echo "步骤 2: 部署博客"
            echo "  方法 A（最简单 - 拖拽部署）："
            echo "  - 将本目录所有文件打包成 ZIP"
            echo "  - 登录 Netlify 后，将 ZIP 拖拽到页面上"
            echo "  - 等待部署完成"
            echo ""
            echo "  方法 B（从 GitHub 导入）："
            echo "  - 点击 'Add new site' → 'Import an existing project'"
            echo "  - 选择你的 GitHub 仓库"
            echo "  - 点击 'Deploy site'"
            echo ""
            echo "步骤 3: 更改网站名称"
            echo "  - 在 Site settings → Change site name"
            echo "  - 输入你想要的名称"
            echo "  - 最终链接：https://your-site-name.netlify.app"
            echo ""
            break
            ;;
        "Vercel（推荐）")
            echo ""
            echo "========================================"
            echo "  Vercel 部署指南"
            echo "========================================"
            echo ""
            echo "步骤 1: 创建 Vercel 账号"
            echo "  - 访问 https://vercel.com/signup"
            echo "  - 使用 GitHub 账号登录"
            echo ""
            echo "步骤 2: 导入项目"
            echo "  - 点击 'Add New' → 'Project'"
            echo "  - 选择你的 GitHub 仓库"
            echo "  - Project Name 输入你想要的名称"
            echo "  - 点击 'Deploy'"
            echo ""
            echo "步骤 3: 访问你的博客"
            echo "  - 部署完成后，你会得到一个链接"
            echo "  - 例如：https://your-project-name.vercel.app"
            echo ""
            break
            ;;
        "查看详细部署指南")
            echo ""
            echo "正在打开详细部署指南..."
            if [[ "$OSTYPE" == "darwin"* ]]; then
                open DEPLOYMENT.md
            elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
                xdg-open DEPLOYMENT.md 2>/dev/null || sensible-browser DEPLOYMENT.md 2>/dev/null || cat DEPLOYMENT.md
            else
                cat DEPLOYMENT.md
            fi
            echo ""
            break
            ;;
        "仅启动本地服务器预览")
            echo ""
            echo "========================================"
            echo "  启动本地服务器"
            echo "========================================"
            echo ""
            echo "使用 Python 启动本地服务器："
            echo "  python -m http.server 8000"
            echo "  然后访问：http://localhost:8000"
            echo ""
            echo "或使用 Node.js："
            echo "  npx http-server"
            echo ""
            break
            ;;
        "退出")
            break
            ;;
        *) echo "无效选项 $REPLY";;
    esac
done

echo ""
echo "感谢使用！"
echo ""
