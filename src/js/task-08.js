// const form = document.querySelector(".login-form");

// const email = document.querySelector("input[name=email]");

// const password = document.querySelector("input[name=password]");

// form.addEventListener("submit", onSubmit)
// function onSubmit(e) {
//     e.preventDefault();
//   //   const data = new FormData(form)
//   //  for (const pair of data) {
//   //   console.log(pair)
//   // }
//   const obj = new Object {
//     Email: '$(form.elements.email.value)'
//   }
//   console.log(form.elements.email.value)
//   console.log(form.elements.password.value)
    
// if(email.value ===""||password.value==="") {alert('Всі поля повинні бути заповнені!')}
// form.reset()

// }

const form = document.querySelector(".login-form");
 form.addEventListener("submit", onSubmit)
function onSubmit(e) {
    e.preventDefault();
  const obj = new Object();
  Object.email = form.elements.email.value;
  Object.password = form.elements.password.value;
  console.log(`Email: ${Object.email} Password: ${Object.password}`)
  

     if(Object.email ===""||Object.password==="") {alert('Всі поля повинні бути заповнені!')}
   form.reset()
  }

// const obj = new Object { }
// obj.email = form.elements.email.value;
// obj.password = form.elements.password.value;
//   console.log(`${obj.email}``${obj.password}`)
//   console.log(obj.email)
