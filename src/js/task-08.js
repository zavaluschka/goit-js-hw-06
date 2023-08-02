const form = document.querySelector(".login-form");

const email = document.querySelector("input[name=email]");

const password = document.querySelector("input[name=password]");

form.addEventListener("submit", onSubmit)
function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(form)
   for (const pair of data) {
    console.log(pair)
  }

    
if(email.value ===""||password.value==="") {alert('Всі поля повинні бути заповнені!')}
form.reset()

}
