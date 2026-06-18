const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {

e.preventDefault();

const name =
document.querySelector(
'input[type="text"]'
).value;

const email =
document.querySelector(
'input[type="email"]'
).value;

const password =
document.querySelector(
'input[type="password"]'
).value;

const response =
await fetch(
"http://localhost:5000/api/auth/signup",
{
method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
name,
email,
password
})
}
);

const data =
await response.json();

alert(data.message);

});