// 页面加载后初始化
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
    
    if (postId) {
        renderPost(postId);
    } else {
        // 如果没有文章 ID，返回首页
        window.location.href = 'index.html';
    }
});

// 渲染文章详情
function renderPost(postId) {
    const post = getPostById(postId);
    
    if (!post) {
        document.querySelector('.article').innerHTML = `
            <div class="empty-state">
                <p>文章不存在</p>
                <a href="index.html" class="back-link">← 返回首页</a>
            </div>
        `;
        return;
    }
    
    // 设置文章标题
    document.getElementById('article-title').textContent = post.title;
    
    // 设置日期
    document.getElementById('article-date').textContent = post.date;
    
    // 设置标签
    document.getElementById('article-tags').innerHTML = post.tags.map(tag => 
        `<span class="post-tag">${tag}</span>`
    ).join('');
    
    // 渲染 Markdown 内容
    const articleContent = document.getElementById('article-content');
    articleContent.innerHTML = marked.parse(post.content);
}
