const button = document.getElementById("button")
const errorMessage = document.getElementById("error-message")
const emailChecked = document.getElementById("email")
const validEmail = document.getElementById("valid-message")

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

button.addEventListener("click", event => {
    if (!isValidEmail(email.value)){
        errorMessage.style.display = "flex";
        email.style.border = "2px solid hsl(0, 93%, 68%)"
    }
    else{
        validEmail.style.display = "flex"
    }
})

