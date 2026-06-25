const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {

e.preventDefault();

const email =
document.querySelector(
'input[type="email"]'
).value;

const password =
document.querySelector(
'input[type="password"]'
).value;

try{

const response = await fetch(
"http://localhost:5000/api/auth/login",
{
method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
email,
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
"userRole",
data.user.role
);

localStorage.setItem(
"token",
data.token
);

localStorage.setItem(
"userEmail",
email
);

localStorage.setItem(
"userRole",
data.user.role
);

/* ADD THIS */
localStorage.setItem(
"userEmail",
email
);

alert("Login Successful");

window.location.href =
"index.html";

}else{

alert(data.message);

}

}catch(error){

console.log(error);

}

});

const data =
await response.json();

console.log(data);