// Parent Form
const contactForm = document.getElementById("contactForm");

// Parent Information
const name = document.getElementById("name");
const lastname = document.getElementById("lastname");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const Password = document.getElementById("Password");
const button = document.getElementById("btn");

// Parent Error Spans
const firstNameError = document.getElementById("first-name");
const lastNameError = document.getElementById("last-name");
const phoneError = document.getElementById("Phone-number");
const mailError = document.getElementById("mail");
const passwordError = document.getElementById("spassword");

// Student Information
const studentName = document.getElementById("name-student");
const studentLast = document.getElementById("last-student");

// Student Error Spans
const studentNameError = document.getElementById("first-studentName");
const studentLastError = document.getElementById("studentLast");

// Accept Terms

const accept = document.getElementById("accept");

const validNom = () => {
    const Nomvalue = name.value.trim()

    return /^[a-zA-Z]+$/gi.test(Nomvalue)




}
const validPrenom = () => {
    const prenom = lastname.value.trim()

    return /^[a-zA-Z]+$/gi.test(prenom)




}
const validePhone = () => {
    const number = phone.value.trim()

    return /^0[5-7]\d{8}$/.test(number);



}
const valideEmail = () => {
    const mail = email.value.trim()

    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(mail);



}
const validePassword = () => {
    const pas = Password.value.trim()

    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]{8,}$/.test(pas);



}
const stdentnom = () => {
    const prenom = studentName.value.trim()

    return /^[a-zA-Z]+$/gi.test(prenom)




}

const stdntlast = () => {
    const prenom = studentLast.value.trim()

    return /^[a-zA-Z]+$/gi.test(prenom)




}
contactForm.addEventListener("input", (e) => {

    if (validNom()) {
        firstNameError.textContent = "Veuillez saisir un Nom valide."
        firstNameError.style.color = "green"
        button.disabled = false;
        button.style.background = "green";





    } else {
        firstNameError.textContent = "Veuillez saisir un Nom Invalide."
        firstNameError.style.color = "red"
        button.disabled = true;
        button.style.background = "gray";
    }
    if (validPrenom()) {
        lastNameError.textContent = "Veuillez saisir un prénom valide."
        lastNameError.style.color = "green"
        button.disabled = false;
        button.style.background = "green";





    } else {
        lastNameError.textContent = "Veuillez saisir un prénom Invalide."
        lastNameError.style.color = "red"
        button.disabled = true;
        button.style.background = "gray";
    }

    if (validePhone()) {
        phoneError.textContent = "Veuillez saisir un Phone valide."
        phoneError.style.color = "green"
        lastNameError.textContent = "Veuillez saisir un prénom valide."
        lastNameError.style.color = "green"
        button.disabled = false;
        button.style.background = "green";

    } else {
        phoneError.textContent = "Veuillez saisir un Phone Invalide."
        phoneError.style.color = "red"
    }
    if (valideEmail()) {
        mailError.textContent = "Veuillez saisir  Password valide."
        mailError.style.color = "green"
        lastNameError.textContent = "Veuillez saisir un prénom valide."
        lastNameError.style.color = "green"
        button.disabled = false;
        button.style.background = "green";

    } else {
        mailError.textContent = "Veuillez saisir  Password Invalide."
        mailError.style.color = "red"
        button.disabled = true;
        button.style.background = "gray";
    }
    if (validePassword()) {
        passwordError.textContent = "Veuillez saisir  Password valide."
        passwordError.style.color = "green"
        lastNameError.textContent = "Veuillez saisir un prénom valide."
        lastNameError.style.color = "green"
        button.disabled = false;
        button.style.background = "green";

    } else {
        passwordError.textContent = "Veuillez saisir  Password Invalide."
        passwordError.style.color = "red"
        button.disabled = true;
        button.style.background = "gray";
    }
    if (stdentnom()) {
        studentNameError.textContent = "Veuillez saisir un Nom valide."
        studentNameError.style.color = "green"
        lastNameError.textContent = "Veuillez saisir un prénom valide."
        lastNameError.style.color = "green"
        button.disabled = false;
        button.style.background = "green";

    } else {
        studentNameError.textContent = "Veuillez saisir un Nom Invalide."
        studentNameError.style.color = "red"
        button.disabled = true;
        button.style.background = "gray";
    }
    if (stdntlast()) {
        studentLastError.textContent = "Veuillez saisir un Prenom valide."
        studentLastError.style.color = "green"
        lastNameError.textContent = "Veuillez saisir un prénom valide."
        lastNameError.style.color = "green"
        button.disabled = false;
        button.style.background = "green";


    } else {
        studentLastError.textContent = "Veuillez saisir un Prenom Invalide."
        studentLastError.style.color = "red"
        button.disabled = true;
        button.style.background = "gray";
    }





})

function validFrom() {
    return validNom() && validPrenom() && validePhone() && valideEmail() && validePassword() && stdentnom() && stdntlast();
}

contactForm.addEventListener("submit", (e) => {
    e.preventDefault()
    if (validFrom()) {
        const data = {
            firstName: name.value,
            lastName: lastname.value,
            PhoneNumber: phone.value,
            mail: email.value,
            password: Password.value,
            FirstNameStudent: studentName.value,
            LastNameStudent: studentLast.value




        }
        localStorage.setItem("data", JSON.stringify(data));


    }


})