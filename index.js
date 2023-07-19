let form = document.getElementById(`signupform`)
let nameInputField = document.getElementById(`fullnamefield`)
let emailInputField = document.getElementById(`emailfield`)
let passwordInputField = document.getElementById(`passwordfield`)
let confirmPasswordInputField = document.getElementById(`confirmPasswordfield`)
let fullNameError = document.getElementById(`fullNameErrorMessage`)
let fullNameExclamation = document.getElementById(`fullNameExclamation`)
let fullNameSuccess = document.getElementById(`fullNameSuccess`)
let emailError = document.getElementById(`emailErrorMessage`)
let emailExclamation = document.getElementById(`emailExclamation`)
let emailSuccess = document.getElementById(`emailSuccess`)
let passwordError = document.getElementById(`passwordErrorMessage`)
let passwordExclamation = document.getElementById(`passwordExclamation`)
let passwordSuccess = document.getElementById(`passwordSuccess`)
let confirmPasswordError = document.getElementById(`confirmPasswordErrorMessage`)
let confirmPasswordExclamation = document.getElementById(`confirmPasswordExclamation`)
let confirmPasswordSuccess = document.getElementById(`confirmPasswordSuccess`)


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
    // Email Validation Field

    if(emailInputField.value.trim(``) === ``){
        emailError.innerText = `Enter Valid Email Address`
        emailInputField.style.border = `1px solid red`
        emailExclamation.style.color = `red`
        emailExclamation.style.visibility = `visible`
    }else if(validEmail(emailInputField.value)){
        emailError.style.visibility = `hidden`
        emailInputField.style.border = `1px solid green`
        emailSuccess.style.color = `green`
        emailSuccess.style.visibility = `visible`
    }

    // Password Validation Field
    if(passwordInputField.value.trim(``) === ``){
        passwordError.innerText = `Enter a Valid Password`
        passwordInputField.style.border = `1px solid red`
        passwordExclamation.style.color = `red`
        passwordExclamation.style.visibility = `visible`
    }else if(nameInputField.value.trim().length < 8){
        passwordError.innerText = `Password Must Be More Than 8 Characters`
        passwordInputField.style.border = `1px solid red`
        passwordExclamation.style.color = `red`
        passwordExclamation.style.visibility = `visible`
    }else{
        passwordExclamation.style.visibility = `hidden`
        passwordError.style.visibility = `hidden`
        passwordInputField.style.border = `1px solid green`
        passwordSuccess.style.color = `green`
        passwordSuccess.style.visibility = `visible`
    }

    // Confirm Password Validation Field
    if(confirmPasswordInputField.value.trim(``) === ``){
        confirmPasswordError.innerText = `Enter a Valid Password`
        confirmPasswordInputField.style.border = `1px solid red`
        confirmPasswordExclamation.style.color = `red`
        confirmPasswordExclamation.style.visibility = `visible`
    }else if(confirmPasswordInputField.value != passwordInputField.value ){
        confirmPasswordError.innerText = `Password Does Not Match`
        confirmPasswordInputField.style.border = `1px solid red`
        confirmPasswordExclamation.style.color = `red`
        confirmPasswordExclamation.style.visibility = `visible`
    }else{
        confirmPasswordExclamation.style.visibility = `hidden`
        confirmPasswordError.style.visibility = `hidden`
        confirmPasswordInputField.style.border = `1px solid green`
        confirmPasswordSuccess.style.color = `green`
        confirmPasswordSuccess.style.visibility = `visible`
    }

}

function validEmail(emailOfUser){
    const regularExpression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    let myTest = regularExpression.test(emailOfUser)
    return myTest
}