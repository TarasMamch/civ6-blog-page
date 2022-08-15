document.querySelector("#signup").addEventListener("submit", e => {
    e.preventDefault();
    const userObj = {
        username: document.querySelector("#signup-name").value,
        email: document.querySelector("#signup-email").value,
        password: document.querySelector("#signup-password").value
    };
    console.log(userObj);
    fetch("/api/users", {
        method: "POST",
        body: JSON.stringify(userObj),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        if (res.ok) {
            console.log("new user is created!");
            location.href = "/login";
        } else {
            alert("failed to register");
        }
    })
});
