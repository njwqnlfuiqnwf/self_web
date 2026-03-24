// 示例文章数据
const posts = [
    {
        id: 1,
        title: "深入理解 Transformer 模型",
        excerpt: "Transformer 是现代自然语言处理的核心架构，本文将深入解析其工作原理、自注意力机制以及在实际应用中的实践经验。",
        date: "2026-03-20",
        tags: ["深度学习", "NLP", "Transformer"],
        content: `# 深入理解 Transformer 模型

Transformer 是当前自然语言处理领域最重要的模型架构之一，由 Google 于 2017 年提出。

## 什么是 Transformer？

Transformer 是一种基于自注意力机制（Self-Attention）的深度学习模型，它完全摒弃了传统的循环神经网络（RNN）和卷积神经网络（CNN）结构。

## 核心组件

### 1. 自注意力机制

自注意力机制允许模型在处理每个词时，同时关注输入序列中的所有其他词：

\`\`\`python
# 简化的自注意力计算示例
def self_attention(query, key, value):
    scores = query @ key.T / sqrt(d_k)
    attention_weights = softmax(scores)
    return attention_weights @ value
\`\`\`

### 2. 多头注意力

多头注意力允许模型在不同的表示子空间中同时关注不同位置的信息：

- 每个头可以学习不同的注意力模式
- 提高了模型的表达能力
- 通过拼接多个头的输出得到最终表示

### 3. 位置编码

由于 Transformer 不使用 RNN 的顺序结构，需要显式注入位置信息：

\`\`\`
PE(pos, 2i) = sin(pos / 10000^(2i/d_model))
PE(pos, 2i+1) = cos(pos / 10000^(2i/d_model))
\`\`\`

## 实践应用

### 文本分类

使用 Transformer 进行文本分类的典型步骤：

1. **数据预处理**：分词、构建词汇表
2. **模型构建**：加载预训练的 Transformer
3. **微调**：在目标任务上训练
4. **评估**：测试模型性能

### 机器翻译

Transformer 在机器翻译任务中表现出色：

- 编码器处理源语言
- 解码器生成目标语言
- 注意力机制对齐源语言和目标语言

## 常见问题解决

### Q: 如何处理长文本？

**解决方案**：
1. 使用滑动窗口策略
2. 采用层次化 Transformer
3. 使用稀疏注意力机制

### Q: 模型过拟合怎么办？

**解决方案**：
1. 增加数据量
2. 使用正则化（Dropout、权重衰减）
3. 数据增强
4. 提前停止训练

### Q: 训练速度慢怎么优化？

**解决方案**：
1. 使用混合精度训练
2. 梯度累积
3. 模型并行
4. 使用预训练模型进行迁移学习

## 最佳实践

1. **从预训练模型开始**：使用 BERT、GPT 等预训练模型
2. **适当的数据增强**：提高模型泛化能力
3. **监控训练过程**：使用 TensorBoard 可视化
4. **超参数调优**：使用网格搜索或贝叶斯优化

## 总结

Transformer 架构彻底改变了 NLP 领域，其自注意力机制和并行计算优势使其成为当前最主流的模型架构。掌握 Transformer 的工作原理和应用技巧，对于 AI 学习者来说至关重要。

## 参考资源

- [Attention Is All You Need](https://arxiv.org/abs/1706.03762)
- [The Illustrated Transformer](https://jalammar.github.io/illustrated-transformer/)
- [Hugging Face Transformers](https://huggingface.co/docs/transformers/)`
    },
    {
        id: 2,
        title: "Python 数据分析实战指南",
        excerpt: "本文将带你从零开始学习 Python 数据分析，包括 Pandas、NumPy、Matplotlib 等核心库的使用方法和实战技巧。",
        date: "2026-03-18",
        tags: ["Python", "数据分析", "Pandas"],
        content: `# Python 数据分析实战指南

Python 已经成为数据分析领域最流行的编程语言之一。本文将介绍数据分析的核心库和实用技巧。

## 核心库介绍

### 1. NumPy - 数值计算基础

NumPy 是 Python 科学计算的基础库：

\`\`\`python
import numpy as np

# 创建数组
arr = np.array([1, 2, 3, 4, 5])

# 数组运算
result = arr * 2  # [2, 4, 6, 8, 10]

# 统计计算
mean = np.mean(arr)
std = np.std(arr)
\`\`\`

### 2. Pandas - 数据处理神器

Pandas 提供了强大的数据结构和数据分析工具：

\`\`\`python
import pandas as pd

# 读取数据
df = pd.read_csv('data.csv')

# 数据探索
df.head()  # 查看前几行
df.info()  # 数据概览
df.describe()  # 统计摘要

# 数据清洗
df.dropna()  # 删除缺失值
df.fillna(0)  # 填充缺失值
df.drop_duplicates()  # 删除重复值
\`\`\`

### 3. Matplotlib - 数据可视化

Matplotlib 是 Python 最基础的可视化库：

\`\`\`python
import matplotlib.pyplot as plt

# 绘制折线图
plt.figure(figsize=(10, 6))
plt.plot(x, y)
plt.title('数据趋势图')
plt.xlabel('X 轴')
plt.ylabel('Y 轴')
plt.show()
\`\`\`

## 实战案例

### 案例 1：销售数据分析

让我们通过一个实际案例来学习数据分析：

\`\`\`python
import pandas as pd
import matplotlib.pyplot as plt

# 读取销售数据
sales_df = pd.read_csv('sales_data.csv')

# 数据预处理
sales_df['date'] = pd.to_datetime(sales_df['date'])
sales_df['month'] = sales_df['date'].dt.month

# 月度销售趋势
monthly_sales = sales_df.groupby('month')['amount'].sum()

# 可视化
plt.figure(figsize=(12, 6))
monthly_sales.plot(kind='bar')
plt.title('月度销售趋势')
plt.xlabel('月份')
plt.ylabel('销售额')
plt.show()
\`\`\`

### 案例 2：用户行为分析

分析用户在网站上的行为模式：

\`\`\`python
# 用户活跃度分析
user_activity = df.groupby('user_id').agg({
    'page_views': 'sum',
    'time_spent': 'mean',
    'sessions': 'count'
}).rename(columns={
    'page_views': '总浏览量',
    'time_spent': '平均停留时间',
    'sessions': '访问次数'
})

# 用户分群
high_value_users = user_activity[user_activity['总浏览量'] > 100]
\`\`\`

## 常见问题解决

### Q: 如何处理大数据集？

**解决方案**：
1. 使用 \`\`chunksize\`\` 参数分块读取
2. 使用 Dask 进行并行计算
3. 选择合适的列，减少内存使用
4. 使用更高效的数据类型

### Q: 数据清洗太慢怎么办？

**优化技巧**：
1. 使用向量化操作替代循环
2. 利用 \`\`.apply()\`\` 的 \`\`axis\`\` 参数
3. 使用 \`\`.loc\`\` 和 \`\`.iloc\`\` 索引
4. 考虑使用 Categorical 类型

### Q: 可视化效果不理想？

**改进建议**：
1. 选择合适的图表类型
2. 调整颜色和样式
3. 添加适当的标注
4. 使用 Seaborn 库提升美观度

## 性能优化

### 1. 内存优化

\`\`\`python
# 使用更小的数据类型
df['column'] = df['column'].astype('float32')

# 使用分类类型
df['category_col'] = df['category_col'].astype('category')
\`\`\`

### 2. 计算优化

\`\`\`python
# 避免链式赋值
# 不好：df[df['A'] > 0]['B'] = 1
# 好：df.loc[df['A'] > 0, 'B'] = 1

# 使用向量化操作
df['new_col'] = df['col1'] + df['col2']
\`\`\`

## 最佳实践

1. **代码组织**：将数据分析过程模块化
2. **数据备份**：定期保存中间结果
3. **文档记录**：注释重要步骤和决策
4. **版本控制**：使用 Git 管理代码
5. **自动化**：编写脚本自动化重复任务

## 学习资源

- [Pandas 官方文档](https://pandas.pydata.org/docs/)
- [NumPy 快速入门](https://numpy.org/doc/stable/user/quickstart.html)
- [Matplotlib 教程](https://matplotlib.org/stable/tutorials/index.html)

## 总结

Python 数据分析生态系统非常丰富，掌握核心库的使用方法和最佳实践，能够大大提高工作效率。持续学习和实践是成为数据科学家的关键。`
    },
    {
        id: 3,
        title: "Web 开发中的常见安全问题",
        excerpt: "Web 安全是每个开发者都应该重视的话题。本文将介绍常见的 Web 安全漏洞及其防范措施，帮助你构建更安全的应用。",
        date: "2026-03-15",
        tags: ["Web 安全", "开发", "安全"],
        content: `# Web 开发中的常见安全问题

Web 安全是构建可靠应用的基础。了解常见的安全威胁和防范措施，对每个开发者都至关重要。

## OWASP Top 10

OWASP Top 10 列出了 Web 应用最常见的安全风险：

### 1. 注入漏洞

#### SQL 注入

攻击者通过恶意 SQL 语句操纵数据库：

\`\`\`php
// 危险的代码
$query = "SELECT * FROM users WHERE username = '" . $_GET['username'] . "'";
\`\`\`

**防范措施**：
1. 使用参数化查询
2. 使用 ORM（对象关系映射）
3. 输入验证和清理

\`\`\`php
// 安全的代码
$stmt = $pdo->prepare("SELECT * FROM users WHERE username = ?");
$stmt->execute([$_GET['username']]);
\`\`\`

### 2. 跨站脚本攻击（XSS）

攻击者在网页中注入恶意脚本：

\`\`\`html
<!-- 危险的代码 -->
<div>欢迎, <?php echo $_GET['name']; ?>!</div>
\`\`\`

**防范措施**：
1. 对所有用户输入进行 HTML 编码
2. 使用 Content Security Policy（CSP）
3. 设置 HttpOnly Cookie

\`\`\`php
// 安全的代码
<div>欢迎, <?php echo htmlspecialchars($_GET['name']); ?>!</div>
\`\`\`

### 3. 跨站请求伪造（CSRF）

攻击者诱导用户执行非预期的操作：

**防范措施**：
1. 使用 CSRF Token
2. 验证 Referer 头
3. 使用 SameSite Cookie 属性

\`\`\`javascript
// CSRF Token 示例
const csrfToken = document.querySelector('meta[name="csrf-token"]').content;
fetch('/api/data', {
    method: 'POST',
    headers: {
        'X-CSRF-Token': csrfToken
    }
});
\`\`\`

### 4. 不安全的直接对象引用

用户可以直接访问未授权的资源：

**防范措施**：
1. 实施访问控制检查
2. 使用间接引用映射
3. 不要暴露内部 ID

\`\`\`python
# 检查权限
@app.route('/account/<int:id>')
def view_account(id):
    if current_user.id != id and not current_user.is_admin:
        return 'Access Denied', 403
    return render_template('account.html', account=get_account(id))
\`\`\`

### 5. 安全配置错误

不当的配置导致安全漏洞：

**防范措施**：
1. 关闭调试模式（生产环境）
2. 更新依赖库到最新版本
3. 使用安全的默认配置
4. 定期进行安全审计

## 认证与授权

### 密码安全

\`\`\`python
# 使用 bcrypt 加密密码
import bcrypt

# 加密
hashed = bcrypt.hashpw(password.encode(), bcrypt.gensalt())

# 验证
if bcrypt.checkpw(input_password.encode(), hashed):
    # 密码正确
\`\`\`

### JWT 认证

\`\`\`javascript
// 生成 Token
const token = jwt.sign(
    { userId: user.id },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
);

// 验证 Token
const decoded = jwt.verify(token, process.env.JWT_SECRET);
\`\`\`

## 数据保护

### HTTPS

始终使用 HTTPS 加密数据传输：

\`\`\`nginx
server {
    listen 443 ssl;
    server_name example.com;
    
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;
    
    # 强制 HTTPS
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains";
}
\`\`\`

### 敏感数据加密

\`\`\`python
from cryptography.fernet import Fernet

# 加密
key = Fernet.generate_key()
cipher = Fernet(key)
encrypted = cipher.encrypt(sensitive_data.encode())

# 解密
decrypted = cipher.decrypt(encrypted).decode()
\`\`\`

## 日志与监控

### 安全日志

记录关键安全事件：

\`\`\`python
import logging

security_logger = logging.getLogger('security')
security_logger.setLevel(logging.INFO)

# 记录登录失败
security_logger.warning(f'Failed login attempt: {username} from {ip}')
\`\`\`

### 异常检测

监控异常行为：

1. 大量失败的登录尝试
2. 不寻常的请求模式
3. 异常的资源消耗

## 最佳实践

1. **最小权限原则**：只授予必要的权限
2. **深度防御**：多层安全措施
3. **定期更新**：保持系统和依赖库最新
4. **安全测试**：定期进行渗透测试
5. **员工培训**：提高安全意识

## 工具推荐

- **OWASP ZAP**：自动化安全扫描
- **Burp Suite**：Web 应用安全测试
- **SonarQube**：代码质量分析
- **Snyk**：依赖项漏洞扫描

## 学习资源

- [OWASP 官方网站](https://owasp.org/)
- [Web Security Academy](https://portswigger.net/web-security)
- [CWE（通用弱点枚举）](https://cwe.mitre.org/)

## 总结

Web 安全是一个持续的过程，需要开发者保持警惕并不断学习。通过实施本文介绍的安全措施，可以大大降低应用被攻击的风险。记住，安全不是一次性的工作，而是需要持续关注和改进的实践。`
    },
    {
        id: 4,
        title: "Docker 容器化部署入门",
        excerpt: "Docker 已经成为现代应用部署的标准工具。本文将带你学习 Docker 的基础知识、容器化应用以及生产环境部署的最佳实践。",
        date: "2026-03-12",
        tags: ["Docker", "部署", "DevOps"],
        content: `# Docker 容器化部署入门

Docker 简化了应用的打包、分发和部署过程。本文将详细介绍 Docker 的核心概念和实际应用。

## Docker 基础概念

### 什么是容器？

容器是一种轻量级的虚拟化技术，它将应用及其依赖打包在一起：

- **镜像（Image）**：应用的只读模板
- **容器（Container）**：镜像的运行实例
- **仓库（Registry）**：存储和分发镜像

### 为什么使用 Docker？

1. **一致性**：开发、测试、生产环境完全一致
2. **轻量级**：比虚拟机更高效
3. **可移植性**：一次构建，到处运行
4. **快速部署**：秒级启动时间

## 安装 Docker

### Windows/Mac

1. 下载 Docker Desktop
2. 安装并启动
3. 验证安装：

\`\`\`bash
docker --version
docker run hello-world
\`\`\`

### Linux

\`\`\`bash
# Ubuntu/Debian
sudo apt-get update
sudo apt-get install docker.io

# 启动 Docker
sudo systemctl start docker
sudo systemctl enable docker
\`\`\`

## Docker 基础命令

### 镜像操作

\`\`\`bash
# 搜索镜像
docker search nginx

# 拉取镜像
docker pull nginx:latest

# 查看本地镜像
docker images

# 删除镜像
docker rmi nginx
\`\`\`

### 容器操作

\`\`\`bash
# 运行容器
docker run -d -p 80:80 --name my-nginx nginx

# 查看运行中的容器
docker ps

# 查看所有容器
docker ps -a

# 停止容器
docker stop my-nginx

# 启动容器
docker start my-nginx

# 删除容器
docker rm my-nginx
\`\`\`

### 其他实用命令

\`\`\`bash
# 查看容器日志
docker logs my-nginx

# 进入容器
docker exec -it my-nginx /bin/bash

# 查看容器详情
docker inspect my-nginx

# 复制文件到容器
docker cp file.txt my-nginx:/path/
\`\`\`

## 创建自定义镜像

### Dockerfile

Dockerfile 是构建镜像的脚本：

\`\`\`dockerfile
# 基础镜像
FROM python:3.9-slim

# 设置工作目录
WORKDIR /app

# 复制依赖文件
COPY requirements.txt .

# 安装依赖
RUN pip install --no-cache-dir -r requirements.txt

# 复制应用代码
COPY . .

# 暴露端口
EXPOSE 5000

# 设置环境变量
ENV FLASK_APP=app.py

# 运行应用
CMD ["python", "app.py"]
\`\`\`

### 构建镜像

\`\`\`bash
# 构建镜像
docker build -t my-app:1.0 .

# 使用构建缓存优化
docker build --no-cache -t my-app:1.0 .
\`\`\`

## Docker Compose

Docker Compose 用于定义和运行多容器应用：

### docker-compose.yml

\`\`\`yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "5000:5000"
    volumes:
      - .:/app
    environment:
      - FLASK_ENV=development
      - DATABASE_URL=postgresql://db:5432/mydb
    depends_on:
      - db
      - redis

  db:
    image: postgres:13
    volumes:
      - postgres_data:/var/lib/postgresql/data
    environment:
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password
      - POSTGRES_DB=mydb

  redis:
    image: redis:alpine
    ports:
      - "6379:6379"

volumes:
  postgres_data:
\`\`\`

### Compose 命令

\`\`\`bash
# 启动所有服务
docker-compose up -d

# 停止所有服务
docker-compose down

# 查看服务日志
docker-compose logs -f

# 重启服务
docker-compose restart

# 构建并启动
docker-compose up -d --build
\`\`\`

## 实战案例

### 案例 1：Web 应用容器化

\`\`\`dockerfile
FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
\`\`\`

### 案例 2：数据库持久化

\`\`\`yaml
services:
  postgres:
    image: postgres:13
    volumes:
      - pgdata:/var/lib/postgresql/data
      - ./init.sql:/docker-entrypoint-initdb.d/init.sql
    environment:
      POSTGRES_PASSWORD: mypassword
    ports:
      - "5432:5432"

volumes:
  pgdata:
\`\`\`

## 最佳实践

### 1. 镜像优化

\`\`\`dockerfile
# 使用多阶段构建
FROM node:16 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
\`\`\`

### 2. 安全措施

- 使用官方基础镜像
- 定期更新镜像
- 不要在镜像中包含敏感信息
- 扫描镜像漏洞

\`\`\`bash
# 扫描镜像
docker scan my-app
\`\`\`

### 3. 资源限制

\`\`\`yaml
services:
  app:
    image: my-app
    deploy:
      resources:
        limits:
          cpus: '0.50'
          memory: 512M
        reservations:
          cpus: '0.25'
          memory: 256M
\`\`\`

## 生产环境部署

### 健康检查

\`\`\`dockerfile
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \\
  CMD curl -f http://localhost:5000/health || exit 1
\`\`\`

### 日志管理

\`\`\`yaml
services:
  app:
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "3"
\`\`\`

### 网络配置

\`\`\`bash
# 创建自定义网络
docker network create my-network

# 连接容器到网络
docker network connect my-network my-app
\`\`\`

## 常见问题解决

### Q: 容器启动失败怎么办？

**排查步骤**：
1. 检查容器日志：\`\`docker logs <container>\`\`
2. 验证配置文件
3. 检查端口占用
4. 查看容器状态：\`\`docker ps -a\`\`

### Q: 如何实现数据持久化？

**解决方案**：
1. 使用 Volume 挂载
2. 使用 Bind Mount
3. 使用数据容器

### Q: 如何优化镜像大小？

**优化技巧**：
1. 使用 Alpine 基础镜像
2. 清理缓存和临时文件
3. 合并 RUN 命令
4. 多阶段构建

## 学习资源

- [Docker 官方文档](https://docs.docker.com/)
- [Docker Hub](https://hub.docker.com/)
- [Docker Compose 文档](https://docs.docker.com/compose/)

## 总结

Docker 简化了应用的部署和管理，是现代 DevOps 工具链的核心组成部分。掌握 Docker 的使用，可以大大提高开发和部署效率。持续实践和探索是成为 Docker 专家的关键。`
    },
    {
        id: 5,
        title: "Git 版本控制最佳实践",
        excerpt: "Git 是现代软件开发中不可或缺的版本控制工具。本文将介绍 Git 的工作原理、常用命令以及团队协作中的最佳实践。",
        date: "2026-03-10",
        tags: ["Git", "版本控制", "开发工具"],
        content: `# Git 版本控制最佳实践

Git 是目前最流行的分布式版本控制系统。掌握 Git 的使用和最佳实践，对每个开发者都非常重要。

## Git 基础概念

### 核心概念

1. **仓库（Repository）**：存储项目所有历史记录的地方
2. **提交（Commit）**：项目状态的快照
3. **分支（Branch）**：独立的开发线
4. **合并（Merge）**：将分支整合到主线
5. **标签（Tag）**：标记重要版本

### Git 工作流

\`\`\`
工作区 → 暂存区 → 本地仓库 → 远程仓库
\`\`\`

## 基础命令

### 初始化和配置

\`\`\`bash
# 初始化仓库
git init

# 克隆远程仓库
git clone https://github.com/user/repo.git

# 配置用户信息
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# 查看配置
git config --list
\`\`\`

### 日常操作

\`\`\`bash
# 查看状态
git status

# 添加文件到暂存区
git add .
git add filename

# 提交更改
git commit -m "描述信息"

# 查看提交历史
git log
git log --oneline
git log --graph --all

# 查看差异
git diff
git diff HEAD~1
\`\`\`

### 分支管理

\`\`\`bash
# 创建分支
git branch feature-branch

# 切换分支
git checkout feature-branch
git switch feature-branch

# 创建并切换分支
git checkout -b feature-branch

# 查看分支
git branch
git branch -a  # 包括远程分支

# 合并分支
git checkout main
git merge feature-branch

# 删除分支
git branch -d feature-branch
\`\`\`

### 远程操作

\`\`\`bash
# 添加远程仓库
git remote add origin https://github.com/user/repo.git

# 查看远程仓库
git remote -v

# 推送到远程
git push origin main
git push -u origin feature-branch  # 设置上游分支

# 拉取更新
git pull origin main

# 获取更新（不合并）
git fetch origin
\`\`\`

## 高级用法

### 撤销操作

\`\`\`bash
# 撤销工作区修改
git restore filename
git checkout -- filename  # 旧版本命令

# 撤销暂存区修改
git restore --staged filename
git reset HEAD filename

# 撤销提交
git reset --soft HEAD~1  # 保留修改
git reset --mixed HEAD~1  # 撤销暂存
git reset --hard HEAD~1  # 完全撤销

# 撤销特定提交
git revert <commit-hash>
\`\`\`

### 变基（Rebase）

\`\`\`bash
# 变基到主分支
git checkout feature-branch
git rebase main

# 交互式变基
git rebase -i HEAD~3
\`\`\`

### 储藏（Stash）

\`\`\`bash
# 暂存当前修改
git stash

# 查看储藏列表
git stash list

# 应用储藏
git stash pop
git stash apply  # 不删除储藏

# 删除储藏
git stash drop
\`\`\`

## 团队协作

### 分支策略

#### Git Flow

\`\`\`
main (生产) ← develop (开发) ← feature/* (功能)
              ↑
              release/* (发布)
              hotfix/* (修复)
\`\`\`

#### GitHub Flow

\`\`\`
main ← feature/* (功能分支)
\`\`\`

### Pull Request 流程

1. **创建功能分支**

\`\`\`bash
git checkout -b feature/new-feature
\`\`\`

2. **开发和提交**

\`\`\`bash
git add .
git commit -m "添加新功能"
git push -u origin feature/new-feature
\`\`\`

3. **创建 Pull Request**

- 在 GitHub/GitLab 上创建 PR
- 填写详细描述
- 请求代码审查

4. **代码审查和合并**

- 同事审查代码
- 讨论修改建议
- 合并到主分支

### 解决冲突

\`\`\`bash
# 拉取时遇到冲突
git pull origin main

# 手动解决冲突后
git add .
git commit -m "解决冲突"

# 或使用合并工具
git mergetool
\`\`\`

## 提交规范

### Conventional Commits

\`\`\`
<type>(<scope>): <subject>

<body>

<footer>
\`\`\`

**Type 类型**：
- \`\`feat\`\`：新功能
- \`\`fix\`\`：bug 修复
- \`\`docs\`\`：文档更新
- \`\`style\`\`：代码格式
- \`\`refactor\`\`：重构
- \`\`test\`\`：测试
- \`\`chore\`\`：构建/工具

**示例**：

\`\`\`
feat(auth): add user login feature

Implements JWT-based authentication with:
- Login endpoint
- Token refresh mechanism
- Session management

Closes #123
\`\`\`

## 最佳实践

### 1. 频繁提交

- 保持提交粒度小
- 每个提交完成一个逻辑单元
- 避免大规模提交

### 2. 清晰的提交信息

\`\`\`bash
# 好的提交信息
feat: add user authentication

# 不好的提交信息
fix
update
\`\`\`

### 3. 使用 .gitignore

\`\`\`.gitignore
# 依赖
node_modules/

# 日志
*.log

# 环境
.env
.env.local

# IDE
.vscode/
.idea/

# 操作系统
.DS_Store
Thumbs.db
\`\`\`

### 4. 分支命名规范

\`\`\`
feature/user-login
fix/database-connection
hotfix/security-patch
release/v1.0.0
\`\`\`

### 5. 代码审查

- 必须经过审查才能合并
- 审查重点：逻辑正确性、代码风格、潜在问题
- 使用工具：GitHub PR、GitLab MR

## 常见问题解决

### Q: 如何恢复误删的分支？

\`\`\`bash
# 查看所有操作记录
git reflog

# 恢复分支
git branch recovered-branch HEAD@{2}
\`\`\`

### Q: 如何查看特定文件的历史？

\`\`\`bash
git log --follow filename
git show <commit-hash>:filename
\`\`\`

### Q: 如何对比两个分支的差异？

\`\`\`bash
git diff main feature-branch
git diff main..feature-branch  # 只显示当前分支独有的提交
\`\`\`

### Q: 大文件导致仓库过大？

\`\`\`bash
# 使用 BFG 或 git filter-repo
git filter-repo --strip-blobs-bigger-than 10M
\`\`\`

## 实用工具

### GUI 客户端

- **SourceTree**：跨平台
- **GitHub Desktop**：GitHub 官方
- **GitKraken**：功能强大
- **VS Code Git**：集成开发环境

### 命令行增强

\`\`\`bash
# Git 别名
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status

# Git 工具
git config --global core.editor "vim"
\`\`\`

## 学习资源

- [Pro Git](https://git-scm.com/book/zh/v2)
- [GitHub Skills](https://skills.github.com/)
- [Learn Git Branching](https://learngitbranching.js.org/)

## 总结

Git 是现代软件开发的基石。掌握 Git 的基础操作和最佳实践，能够显著提高开发效率和团队协作质量。持续实践和探索 Git 的高级功能，将帮助你成为更专业的开发者。`
    },
    {
        id: 6,
        title: "Redis 缓存实战指南",
        excerpt: "Redis 是高性能的键值存储系统，广泛用于缓存、消息队列等场景。本文将详细介绍 Redis 的使用方法和最佳实践。",
        date: "2026-03-08",
        tags: ["Redis", "缓存", "数据库"],
        content: `# Redis 缓存实战指南

Redis 是一个开源的内存数据结构存储系统，可以用作数据库、缓存和消息代理。本文将带你深入了解 Redis 的使用和优化。

## Redis 简介

### 什么是 Redis？

Redis（Remote Dictionary Server）是一个开源的基于内存的数据结构存储系统，支持多种数据结构：

- **String（字符串）**
- **Hash（哈希）**
- **List（列表）**
- **Set（集合）**
- **Sorted Set（有序集合）**
- **Bitmap（位图）**
- **HyperLogLog**
- **Geo（地理空间）**

### 为什么选择 Redis？

1. **高性能**：读写速度极快（10万+ ops/s）
2. **丰富的数据结构**：支持多种复杂操作
3. **持久化**：支持 RDB 和 AOF 两种持久化方式
4. **主从复制**：支持数据备份和读写分离
5. **集群模式**：支持水平扩展

## 安装和配置

### 安装 Redis

\`\`\`bash
# Ubuntu/Debian
sudo apt-get update
sudo apt-get install redis-server

# macOS
brew install redis

# 启动 Redis
redis-server

# 连接 Redis
redis-cli
\`\`\`

### 基本配置

\`\`\`conf
# redis.conf

# 绑定地址
bind 127.0.0.1

# 端口
port 6379

# 最大内存
maxmemory 256mb
maxmemory-policy allkeys-lru

# 持久化
save 900 1
save 300 10
save 60 10000

# 密码
requirepass yourpassword
\`\`\`

## 基本操作

### String 操作

\`\`\`bash
# 设置值
SET key value
SET name "John Doe"

# 获取值
GET key
GET name

# 设置过期时间
SET key value EX 3600

# 批量操作
MSET key1 value1 key2 value2
MGET key1 key2

# 自增
INCR counter
INCRBY counter 10
\`\`\`

### Hash 操作

\`\`\`bash
# 设置哈希字段
HSET user:1 name "John"
HSET user:1 age 30

# 获取哈希字段
HGET user:1 name
HGETALL user:1

# 获取所有字段
HKEYS user:1
HVALS user:1
\`\`\`

### List 操作

\`\`\`bash
# 左推入
LPUSH list value1

# 右推入
RPUSH list value2

# 左弹出
LPOP list

# 右弹出
RPOP list

# 获取列表元素
LRANGE list 0 -1
\`\`\`

### Set 操作

\`\`\`bash
# 添加成员
SADD set member1 member2

# 获取所有成员
SMEMBERS set

# 检查成员是否存在
SISMEMBER set member1

# 集合运算
SINTER set1 set2  # 交集
SUNION set1 set2  # 并集
SDIFF set1 set2   # 差集
\`\`\`

### Sorted Set 操作

\`\`\`bash
# 添加成员
ZADD leaderboard 100 player1
ZADD leaderboard 150 player2

# 获取排名
ZRANGE leaderboard 0 -1
ZRANGE leaderboard 0 -1 WITHSCORES

# 获取排名
ZREVRANK leaderboard player1

# 分数范围查询
ZRANGEBYSCORE leaderboard 100 200
\`\`\`

## Python 客户端

### 安装

\`\`\`bash
pip install redis
\`\`\`

### 基本使用

\`\`\`python
import redis

# 连接 Redis
r = redis.Redis(
    host='localhost',
    port=6379,
    db=0,
    password='yourpassword'
)

# String 操作
r.set('name', 'Alice')
print(r.get('name'))

# Hash 操作
r.hset('user:1', 'name', 'Bob')
r.hset('user:1', 'age', 25)
print(r.hgetall('user:1'))

# 设置过期时间
r.setex('token', 'abc123', 3600)

# 批量操作
pipe = r.pipeline()
pipe.set('key1', 'value1')
pipe.set('key2', 'value2')
pipe.execute()
\`\`\`

## 应用场景

### 1. 缓存

\`\`\`python
def get_user(user_id):
    # 先尝试从缓存获取
    cache_key = f'user:{user_id}'
    cached_user = r.get(cache_key)
    
    if cached_user:
        return json.loads(cached_user)
    
    # 缓存未命中，从数据库获取
    user = db.query_user(user_id)
    
    # 写入缓存，设置过期时间
    r.setex(cache_key, 3600, json.dumps(user))
    
    return user
\`\`\`

### 2. 会话管理

\`\`\`python
def create_session(user_id):
    session_id = generate_session_id()
    session_data = {
        'user_id': user_id,
        'created_at': datetime.now()
    }
    r.setex(f'session:{session_id}', 7200, json.dumps(session_data))
    return session_id

def get_session(session_id):
    session = r.get(f'session:{session_id}')
    return json.loads(session) if session else None
\`\`\`

### 3. 排行榜

\`\`\`python
def update_score(user_id, score):
    r.zadd('leaderboard', {user_id: score})

def get_leaderboard(limit=10):
    return r.zrevrange('leaderboard', 0, limit-1, withscores=True)
\`\`\`

### 4. 计数器

\`\`\`python
def increment_view_count(article_id):
    key = f'article:{article_id}:views'
    return r.incr(key)

def get_view_count(article_id):
    key = f'article:{article_id}:views'
    return int(r.get(key) or 0)
\`\`\`

### 5. 分布式锁

\`\`\`python
def acquire_lock(lock_key, timeout=10):
    end_time = time.time() + timeout
    while time.time() < end_time:
        # 使用 SETNX 命令
        if r.set(lock_key, 'locked', nx=True, ex=timeout):
            return True
        time.sleep(0.001)
    return False

def release_lock(lock_key):
    r.delete(lock_key)
\`\`\`

## 性能优化

### 1. 使用 Pipeline

\`\`\`python
# 不使用 Pipeline：每次请求都往返
for i in range(1000):
    r.set(f'key:{i}', f'value:{i}')

# 使用 Pipeline：批量发送命令
pipe = r.pipeline()
for i in range(1000):
    pipe.set(f'key:{i}', f'value:{i}')
pipe.execute()
\`\`\`

### 2. 选择合适的数据结构

\`\`\`python
# 使用 Hash 存储对象，而不是多个 String
# 不好的做法
r.set('user:1:name', 'John')
r.set('user:1:age', 30)
r.set('user:1:email', 'john@example.com')

# 好的做法
r.hset('user:1', {'name': 'John', 'age': 30, 'email': 'john@example.com'})
\`\`\`

### 3. 内存优化

\`\`\`conf
# redis.conf

# 使用 Hash 优化小对象
hash-max-ziplist-entries 512
hash-max-ziplist-value 64

# 使用 List 优化小列表
list-max-ziplist-entries 512
list-max-ziplist-value 64

# 使用 Set 优化小集合
set-max-intset-entries 512
\`\`\`

## 持久化

### RDB（快照）

\`\`\`conf
save 900 1      # 900秒内至少1个key变化
save 300 10     # 300秒内至少10个key变化
save 60 10000   # 60秒内至少10000个key变化
\`\`\`

### AOF（追加文件）

\`\`\`conf
appendonly yes
appendfsync everysec  # 每秒同步一次
\`\`\`

## 监控和调试

### 常用命令

\`\`\`bash
# 查看信息
INFO

# 查看慢查询
SLOWLOG GET 10

# 查看连接数
CLIENT LIST

# 监控命令
MONITOR

# 查看内存使用
MEMORY STATS
\`\`\`

## 常见问题解决

### Q: 如何处理缓存雪崩？

**解决方案**：
1. 设置不同的过期时间
2. 使用缓存预热
3. 使用互斥锁

### Q: 如何处理缓存穿透？

**解决方案**：
1. 缓存空值
2. 使用布隆过滤器
3. 请求限流

### Q: 如何处理缓存击穿？

**解决方案**：
1. 使用互斥锁
2. 设置热点数据永不过期
3. 异步更新缓存

## 最佳实践

1. **合理设置过期时间**：避免缓存无限增长
2. **使用连接池**：减少连接开销
3. **监控 Redis 性能**：及时发现瓶颈
4. **选择合适的持久化策略**：平衡性能和安全性
5. **定期备份**：防止数据丢失

## 学习资源

- [Redis 官方文档](https://redis.io/documentation)
- [Redis 命令参考](https://redis.io/commands)
- [Redis 实战](https://redis.io/topics/lru-cache)

## 总结

Redis 是一个强大而灵活的缓存解决方案。掌握 Redis 的核心功能和最佳实践，能够显著提升应用性能。通过合理使用 Redis 的各种数据结构和特性，可以解决很多实际问题。`
    }
];

// 获取所有标签
function getAllTags() {
    const tagSet = new Set();
    posts.forEach(post => {
        post.tags.forEach(tag => tagSet.add(tag));
    });
    return Array.from(tagSet).map(tag => ({
        name: tag,
        count: posts.filter(p => p.tags.includes(tag)).length
    })).sort((a, b) => b.count - a.count);
}

// 根据标签过滤文章
function filterPostsByTag(tag) {
    if (!tag) return posts;
    return posts.filter(post => post.tags.includes(tag));
}

// 根据 ID 获取文章
function getPostById(id) {
    return posts.find(post => post.id === parseInt(id));
}
