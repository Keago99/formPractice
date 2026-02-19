
export function passwordValidation(){

    const password = document.querySelector("#password");
    const passwordConfirm = document.querySelector("#passwordConfirm");


    function validatePasswordsMatch(){
        if(password.value !== passwordConfirm.value){
            passwordConfirm.setCustomValidity("Passwords do not match!");
        }
        else{
            passwordConfirm.setCustomValidity("");
        }
    }

    password.addEventListener("input", validatePasswordsMatch);
    passwordConfirm.addEventListener("input", validatePasswordsMatch);
}