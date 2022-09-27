const validationInputId = document.querySelector("#validation-input");
const limiter = validationInputId.attributes[2].value;


validationInputId.addEventListener('blur', (event) => {

    if(event.currentTarget.value.length >= limiter){
        
        validationInputId.classList.remove('invalid');
        return validationInputId.classList.add('valid');   
    }

    validationInputId.classList.remove('valid');
    return validationInputId.classList.add('invalid');
});