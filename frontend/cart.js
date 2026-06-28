async function addToCart(product){

try{

const token =
localStorage.getItem("token");

if(!token){

alert("Please Login First");

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

alert("✅ Product Added To Cart");

}else{

alert(data.message);

}

}catch(error){

console.log(error);

alert("Something Went Wrong");

}

}