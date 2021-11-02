

function getPost () {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((data) => {
        console.log(data)

        let postLayout = document.getElementById('post-layout')
        let html = "";
        data.forEach(e => {
            html += `
                <div class="col-4 mb-3">
                    <div class="post-card bg-primary h-100">
                        <div class="card-body text-white">
                            <div class ="d-flex justify-content-end">
                                <h6>${e.id}</h6>
                            </div>
                            <h5 class="post-title mb-4">${e.title}</h5>
                            <p class="post-body">${e.body}</p>
                        </div>
                    </div>
                </div>
            `
            postLayout.innerHTML = html
        });
    })
}

getPost();

function createPost() {
    
}