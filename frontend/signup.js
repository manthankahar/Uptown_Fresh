const form = document.querySelector("form");

form.addEventListener("submit", async(e)=>{

e.preventDefault();

const name =
document.querySelector('input[type="text"]').value;

const email =
document.querySelector('input[type="email"]').value;

const mobile =
document.getElementById("mobile").value;

const password =
document.querySelector('input[type="password"]').value;

const confirmPassword =
document.getElementById("confirmPassword").value;

const passwordRegex =
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

if(!passwordRegex.test(password)){

showToast(
"Password must contain Uppercase, Lowercase, Number & Special Character",
"warning"
);

return;

}

if(password!==confirmPassword){

showToast(
"Password Does Not Match",
"error"
);

return;

}

if(mobile.length!==10){

showToast(
"Mobile Number Must Be 10 Digits",
"warning"
);

return;

}

showLoader();

try{

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

hideLoader();

if(response.ok){

showToast(
"Signup Successful",
"success"
);

setTimeout(()=>{

window.location.href="/login";

},1000);

}else{

showToast(
data.message,
"error"
);

}

}catch(error){

hideLoader();

console.log(error);

showToast(
"Something Went Wrong",
"error"
);

}

});