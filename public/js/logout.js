document.querySelector("#logout").addEventListener("click", e => {
    e.preventDefault();
    fetch("/logout", {
        method: "get",
    }).then(res => {
        if (res.ok) {
            location.href = "/";
        } else {
            alert("you are not logged in!");
        }
    })
})