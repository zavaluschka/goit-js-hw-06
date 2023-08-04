

const form = document.querySelector(".login-form");
 form.addEventListener("submit", onSubmit)
function onSubmit(e) {
    e.preventDefault();
  const obj = new Object();
  obj.email = form.elements.email.value;
  obj.password = form.elements.password.value;
  // console.log(`Email: ${obj.email} Password: ${obj.password}`)
  console.log(obj)

     if(obj.email ===""||obj.password==="") {alert('Всі поля повинні бути заповнені!')}
   form.reset()
  }
