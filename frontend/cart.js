async function addToCart(product){

try{

const token =
localStorage.getItem("token");

if(!token){

showToast(
"Please Login First",
"warning"
);

window.location.href="/login";

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
"Product Added To Cart",
"success"
);

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

}