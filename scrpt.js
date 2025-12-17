function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "12345") {
        document.getElementById("loginPage").classList.add("hidden");
        document.getElementById("homePage").classList.remove("hidden");
    } else {
        alert("Username atau Password salah!");
    }
}

function logout() {
    document.getElementById("homePage").classList.add("hidden");
    document.getElementById("loginPage").classList.remove("hidden");

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}
