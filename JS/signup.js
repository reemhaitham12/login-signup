//*  password icon eye *//
const passwordField = document.getElementById("PasswordUser");
const togglePassword = document.getElementById("togglePassword");
const eyeIcon = document.getElementById("eye-icon");
togglePassword.addEventListener('click', function () {
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
    } else {
        passwordField.type = 'password';
        eyeIcon.classList.add('fa-eye-slash');
        eyeIcon.classList.remove('fa-eye');
    }
});

//*  email check  //
function ValidationEmail() {
    var noteEmail =document.getElementById('noteEmail');
    var text = EmailUser.value;
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(text) == true) {
        EmailUser.classList.add('is-valid');
        EmailUser.classList.remove('is-invalid');
        noteEmail.classList.add('d-none');
        return true;
    }
    else {
        EmailUser.classList.add('is-invalid');
        EmailUser.classList.remove('is-valid');
        noteEmail.classList.remove('d-none');
        return false;
    }
}; 


function signup() {
    var nameUser = document.getElementById("UserName").value;
    var email = document.getElementById("EmailUser").value;
    var password = document.getElementById("PasswordUser").value;
    var NoteEmail=document.getElementById("noteTwo");
    console.log(nameUser + email + password);
    localStorage.setItem("name", nameUser);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    let user_record = [];

    if (localStorage.getItem("users")) {
        user_record = JSON.parse(localStorage.getItem("users"));
    } else {
        user_record = [];
    }

    let isDuplicate = false;
    for (let i = 0; i < user_record.length; i++) {
        if (user_record[i].email === email) {
            isDuplicate = true;
            break;
        }
    }

    if (isDuplicate) {
        NoteEmail.classList.remove('d-none');
    } else {
        const userData = { name: nameUser, email: email, password: password };
        user_record.push(userData);
        localStorage.setItem("users", JSON.stringify(user_record));
        window.location.href = "../index.html";
    }
}