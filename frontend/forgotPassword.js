const form =
document.getElementById("forgotForm");

form.addEventListener("submit",async(e)=>{

e.preventDefault();

const email =
document.getElementById("email").value;

const btn =
document.getElementById("sendOtpBtn");

btn.disabled=true;

btn.innerText="Sending...";

try{

const response =
await fetch(

"http://localhost:5000/api/auth/forgot-password",

{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

email

})

}

);

const data =
await response.json();

alert(data.message);

if(response.ok){

localStorage.setItem(

"resetEmail",

email

);

window.location.href="/verify-otp";

}

}catch(error){

console.log(error);

alert("Something Went Wrong");

}

btn.disabled=false;

btn.innerText="Send OTP";

});