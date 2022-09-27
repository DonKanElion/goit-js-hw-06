const form =  document.querySelector(".login-form");

form.addEventListener("submit", (evt)=> {
    evt.preventDefault();

        const {
            elements: { email, password }
        } = evt.currentTarget;
        
        if( email.value === "" || password.value === ""){
            return alert("Для успішної реєстрації, всі поля повинні бути заповнені!")
        };

      console.log(`Email: ${email.value}`);
      console.log(`Password: ${password.value}`);
    
    evt.currentTarget.reset();
});
