document
.getElementById("signupForm")
.addEventListener("submit",async(e)=>{

e.preventDefault();

const username =
document.getElementById("username").value;

const email =
document.getElementById("email").value;

const password =
document.getElementById("password").value;

await fetch(
"http://localhost:5000/api/auth/signup",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
username,
email,
password
})
}
);

alert("Signup Success");

});