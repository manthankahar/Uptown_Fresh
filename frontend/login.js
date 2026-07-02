const form = document.querySelector("form");

const togglePassword =
document.getElementById("togglePassword");

const password =
document.getElementById("password");

togglePassword.addEventListener("click",()=>{

password.type =
password.type==="password"
?
"text"
:
"password";

});

form.addEventListener("submit",async(e)=>{

e.preventDefault();

const login =
document.getElementById("loginField").value;

const password =
document.getElementById("password").value;

const loginBtn =
document.getElementById("loginBtn");

loginBtn.disabled=true;

loginBtn.innerText="Logging In...";

// Loader Start
showLoader();

try{

const response =
await fetch(
"http://localhost:5000/api/auth/login",
{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

login,
password

})

}

);

const data =
await response.json();

// Loader Stop
hideLoader();

if(response.ok){

localStorage.setItem(
"token",
data.token
);

localStorage.setItem(
"userEmail",
data.user.email
);

localStorage.setItem(
"userRole",
data.user.role
);

// Toast Success
showToast(
"Login Successful",
"success"
);

// 1 Second pachi Redirect
setTimeout(()=>{

window.location.href="/products";

},1000);

}else{

showToast(
data.message,
"error"
);

}

}catch(error){

// Loader Stop
hideLoader();

console.log(error);

showToast(
"Something Went Wrong",
"error"
);

}

loginBtn.disabled=false;

loginBtn.innerText="Login";

});