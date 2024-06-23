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


const email = document.getElementById("EmailUser").value;
email.addEventListener('input', function() {
    noteTwoEmail.classList.add('d-none');
});
const password = document.getElementById("PasswordUser").value;
password.addEventListener('input', function() {
    noteTwoEmail.classList.add('d-none');
});

function login() {
    const email = document.getElementById("EmailUser").value;
    const password = document.getElementById("PasswordUser").value;
    const noteEmail = document.getElementById("noteEmail"); // Email not found message
    const note = document.getElementById("note"); // Incorrect email or password message

    // Reset messages
    noteEmail.classList.add('d-none');
    note.classList.add('d-none');

    let user_record = [];
    if (localStorage.getItem("users")) {
        user_record = JSON.parse(localStorage.getItem("users"));
    }

    let userFound = false;
    let passwordMatch = false;
    let matchedUser = null;

    for (let i = 0; i < user_record.length; i++) {
        if (user_record[i].email === email) {
            userFound = true;
            if (user_record[i].password === password) {
                passwordMatch = true;
                matchedUser = user_record[i];
                break;
            }
        }
    }

    if (userFound && passwordMatch) {
        localStorage.setItem("name", matchedUser.name);
        localStorage.setItem("email", matchedUser.email);
        window.location.href = "./HTML/home.html";
    } else if (userFound || passwordMatch) {
        note.classList.remove('d-none');
    } else {
        noteEmail.classList.remove('d-none');
    }
}

