const form = document.querySelector("form");

form.addEventListener("submit", async(e)=>{

e.preventDefault();

const name=document.querySelector('input[type="text"]').value;

const email=document.querySelector('input[type="email"]').value;

const mobile=document.getElementById("mobile").value;

const password=document.querySelector('input[type="password"]').value;

const confirmPassword=document.getElementById("confirmPassword").value;

const passwordRegex =
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

if(!passwordRegex.test(password)){

alert("Password must contain 8 characters, Uppercase, Lowercase, Number and Special Character");

return;

}

if(password!==confirmPassword){

alert("Password Does Not Match");

return;

}

if(mobile.length!==10){

alert("Mobile Number Must Be 10 Digits");

return;

}

const response=await fetch(
"http://localhost:5000/api/auth/signup",
{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

name,
email,
mobile,
password

})

}

);

const data=await response.json();

alert(data.message);

if(response.ok){

window.location.href="/login";

}

});