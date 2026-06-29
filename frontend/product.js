async function addToCart(product){

try{

const token =
localStorage.getItem("token");

if(!token){

showToast(
"Please Login First",
"error"
);

setTimeout(()=>{

window.location.href="/login";

},1500);

return;

}

const response =
await fetch(
"http://localhost:5000/api/cart/add",
{

method:"POST",

headers:{

"Content-Type":"application/json",

Authorization:`Bearer ${token}`

},

body:JSON.stringify({

productId:product._id

})

}

);

const data =
await response.json();

if(response.ok){

showToast(

data.message || "Product Added To Cart",

"success"

);

}else{

showToast(

data.message || "Failed To Add Product",

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

}