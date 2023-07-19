let form = document.getElementById(`signupform`)
let nameInputField = document.getElementById(`fullnamefield`)
let emailInputField = document.getElementById(`emailfield`)
let passwordInputField = document.getElementById(`passwordfield`)
let fullNameError = document.getElementById(`fullNameErrorMessage`)
let fullNameExclamation = document.getElementById(`fullNameExclamation`)
let fullNameSuccess = document.getElementById(`fullNameSuccess`)
let emailError = document.getElementById(`emailErrorMessage`)
let emailExclamation = document.getElementById(`emailExclamation`)
let emailSuccess = document.getElementById(`emailSuccess`)


form.addEventListener(`submit`, function(event){
    event.preventDefault()
    formValidation()
} )

function formValidation(){
    // Validation for Full Name Field
    if(nameInputField.value.trim(``) === ``){
        fullNameError.innerText = `Enter Your Full Name`
        nameInputField.style.border = `1px solid red`
        fullNameExclamation.style.color = `red`
        fullNameExclamation.style.visibility = `visible`
    }else if(nameInputField.value.trim().length < 6){
        fullNameError.innerText = `Full Name Must Be More Than 6 Letters`
        nameInputField.style.border = `1px solid red`
        fullNameExclamation.style.color = `red`
        fullNameExclamation.style.visibility = `visible`
    }else{
        fullNameExclamation.style.visibility = `hidden`
        fullNameError.style.visibility = `hidden`
        nameInputField.style.border = `1px solid green`
        fullNameSuccess.style.color = `green`
        fullNameSuccess.style.visibility = `visible`
    }
    // Email Validation field

    if(emailInputField.value.trim(``) === ``){
        emailError.innerText = `Enter Valid Email Address`
        emailInputField.style.border = `1px solid red`
        emailExclamation.style.color = `red`
        emailExclamation.style.visibility = `visible`
    }

}

function validEmail(){
    const regularExpression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
}