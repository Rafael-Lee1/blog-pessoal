function addPost() {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    if (title.trim() !== '' && content.trim() !== '') {
        const postsContainer = document.getElementById('posts');
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
            <h3>${title}</h3>
            <p>${content}</p>
        `;
        postsContainer.appendChild(postDiv);
        document.getElementById('title').value = '';
        document.getElementById('content').value = '';
    }
}
