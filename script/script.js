// let postTitle = document.getElementById('post-title')
// let postBody = document.getElementById('post-body')
// let postForm = document.querySelector('#post-form')

// postForm.addEventListener('submit', createPost)

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
                        <a href="page.html">
                            <div class="post-card bg-primary h-100">
                                <div class="card-body text-white">
                                    <div class ="d-flex justify-content-end">
                                        <h6>${e.id}</h6>
                                    </div>
                                    <h5 class="post-title mb-4">${e.title}</h5>
                                    <p class="post-body">${e.body}</p>
                                </div>
                            </div>
                        </a> 
                    </div>
            `
            postLayout.innerHTML = html
        });
    })
}

getPost();


function getSinglePost () {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then((data) => {
        console.log(data)

        let postSingle = document.getElementById('post-single')
        let html = "";
        data.forEach(e => {
            html += `
                <div class="card-body">
                    <div class ="d-flex justify-content-end">
                        <h6>${e.id}</h6>
                    </div>
                    <h5 class="post-title mb-4">${e.title}</h5>
                    <p class="post-body">${e.bobdy}</p>
                </div>
            `
            postSingle.innerHTML = html
        });
    })
}

getSinglePost();


// function createPost(e) {
//     e.preventDefault();
//     let pTitle = postTitle.Value;
//     let pBody = postBody.Value;

//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify({
//             title: 'pTitle',
//             body: 'pBody',
//             userId: '3'
//         }),
//         headers: {
//             'content-type': 'application/json; charset=UTF-8'
//         },
//     })
//     .then((response) => response.json())
//     .then ()
// }