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

if(response.ok){

showToast(
data.message,
"success"
);

localStorage.setItem(

"resetEmail",

email

);

setTimeout(()=>{

window.location.href="/verify-otp";

},1000);

}else{

showToast(
data.message,
"error"
);

}

}catch(error){

console.log(error);

showToast(
"Something Went Wrong",
"error"
);

}

btn.disabled=false;

btn.innerText="Send OTP";

});