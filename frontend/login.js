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

alert("Login Successful");

window.location.href="/products";

}else{

alert(data.message);

}

}catch(error){

console.log(error);

alert("Something Went Wrong");

}

loginBtn.disabled=false;

loginBtn.innerText="Login";

});