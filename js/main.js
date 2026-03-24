// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    renderTags();
    renderPosts();
});

// 渲染标签
function renderTags(filterTag = null) {
    const tagsContainer = document.getElementById('tags-container');
    const tags = getAllTags();
    
    tagsContainer.innerHTML = tags.map(tag => `
        <div class="tag ${filterTag === tag.name ? 'active' : ''}" 
             data-tag="${tag.name}">
            ${tag.name}
            <span class="tag-count">${tag.count}</span>
        </div>
    `).join('');
    
    // 添加点击事件
    document.querySelectorAll('.tag').forEach(tagEl => {
        tagEl.addEventListener('click', function() {
            const tagName = this.getAttribute('data-tag');
            if (filterTag === tagName) {
                // 取消筛选
                renderTags();
                renderPosts();
            } else {
                // 筛选该标签的文章
                renderTags(tagName);
                renderPosts(tagName);
            }
        });
    });
}

// 渲染文章列表
function renderPosts(filterTag = null) {
    const postsGrid = document.getElementById('posts-grid');
    let postsToShow = filterTag ? filterPostsByTag(filterTag) : posts;
    
    if (postsToShow.length === 0) {
        postsGrid.innerHTML = `
            <div class="empty-state">
                <p>没有找到相关文章</p>
            </div>
        `;
        return;
    }
    
    postsGrid.innerHTML = postsToShow.map(post => `
        <article class="post-card" onclick="showPost(${post.id})">
            <div class="post-card-header">
                <h2 class="post-title">${post.title}</h2>
                <p class="post-excerpt">${post.excerpt}</p>
            </div>
            <div class="post-card-footer">
                <span class="post-date">${post.date}</span>
                <div class="post-tags">
                    ${post.tags.map(tag => `
                        <span class="post-tag">${tag}</span>
                    `).join('')}
                </div>
            </div>
        </article>
    `).join('');
}

// 显示文章详情
function showPost(postId) {
    const post = getPostById(postId);
    if (post) {
        // 保存当前筛选标签
        const activeTag = document.querySelector('.tag.active')?.getAttribute('data-tag');
        localStorage.setItem('activeTag', activeTag || '');
        
        // 跳转到文章详情页
        window.location.href = `post.html?id=${postId}`;
    }
}
