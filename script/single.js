let singleClick = localStorage.getItem('mypost')

fetch(`https://jsonplaceholder.typicode.com/posts/${singleClick}`)
.then(response => response.json())
.then((data) => {
    console.log(data)
    let postSingle = document.getElementById('post-single');
    html =`
        <div class="card-body">
            <div class ="d-flex justify-content-end">
                <h6>${data.id}</h6>
            </div>
            <h5 class="post-title mb-4">${data.title}</h5>
            <p class="post-body">${data.body}</p>
        </div>
    `;
    postSingle.innerHTML = html
});
