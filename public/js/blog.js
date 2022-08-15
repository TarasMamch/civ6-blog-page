document.querySelector("#new-blog").addEventListener("submit", e => {
    e.preventDefault();
    const blogObj = {
        title: document.querySelector("#title").value,
        content: document.querySelector("#blog-content").value,
        //ADD USERID
    }
    console.log(blogObj);
    fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify(blogObj),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        if (res.ok) {
            location.reload()
        } else {
            alert("error")
        }
    })
})

async function generatePosts() {
    const blogConatiner = document.getElementById('main-blog-container')
    const response = await fetch('http://localhost:3003/api/posts')
    const data = await response.json()

    for (i = 0; i < data.length; i++) {
        const divEl = document.createElement('div')
        const userInfo = document.createElement('span')
        const title = document.createElement('h3')
        const content = document.createElement('span')
        divEl.setAttribute('class', 'post')

        userInfo.innerHTML = data[i].User.username
        title.innerHTML = data[i].title
        content.innerHTML = data[i].content

        blogConatiner.appendChild(divEl)
        divEl.appendChild(userInfo)
        divEl.appendChild(title)
        divEl.appendChild(content)
    }
}

generatePosts()