function logout() {
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    //alert("logout Successful")
    window.location.href = "../index.html";
}



function displayUserName() {
    const nameUser = localStorage.getItem("name");
    if (nameUser) {
        document.getElementById("name_User").textContent = nameUser;
    } else {
        window.location.href = "../index.html";
    }
}
window.onload = displayUserName;


