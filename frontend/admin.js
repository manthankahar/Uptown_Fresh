const form =
document.querySelector("form");

form.addEventListener(
"submit",
async(e)=>{

e.preventDefault();

const name =
document.getElementById("name").value;

const price =
document.getElementById("price").value;

const image =
document.getElementById("image").value;

const description =
document.getElementById("description").value;

const category =
document.getElementById("category").value;

const stock =
document.getElementById("stock").value;

const token = localStorage.getItem("token");

await fetch(
"http://localhost:5000/api/products",
{
method:"POST",

headers:{
"Content-Type":"application/json",
Authorization:`Bearer ${token}`
},

body:JSON.stringify({
name,
price,
category,
stock,
image,
description
})
}
);

alert(
"Product Added"
);

});