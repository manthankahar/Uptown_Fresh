let allProducts = [];
async function loadProducts() {

try {

const response = await fetch(
"http://localhost:5000/api/products"
);

const products = await response.json();

allProducts = products;

const container =
document.getElementById(
"products-container"
);

const role =
localStorage.getItem("userRole");

container.innerHTML = "";

products.forEach(product => {

container.innerHTML += `

<div class="card">

<span
style="
background:#27ae60;
color:white;
padding:6px 12px;
border-radius:20px;
position:absolute;
margin:10px;
font-size:13px;
"
>
🌿 Fresh
</span>

<img
src="${product.image}"
alt="${product.name}"
>

<h3>${product.name}</h3>

<p>${product.description}</p>

<p>
⭐⭐⭐⭐⭐
</p>

<p>
<b>Category :</b>
${product.category}
</p>

<p style="color:green;">
<b>Stock :</b>
${product.stock}
</p>

<h2 style="color:#27ae60;">
₹${product.price}
</h2>

<button
onclick='addToCart(${JSON.stringify(product)})'
>
🛒 Add To Cart
</button>

${
role === "admin"
?

`

<button
onclick="deleteProduct('${product._id}')"
style="
background:red;
margin-top:10px;
"
>

Delete

</button>

`

:

""

}

</div>

`;

});

} catch (error) {

console.log(error);

}

}

loadProducts();

function addToCart(product){

let cart =
JSON.parse(
localStorage.getItem("cart")
)
|| [];

cart.push(product);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

alert(
"✅ Product Added To Cart"
);

}

async function deleteProduct(id){

const confirmDelete =
confirm(
"Delete this Product?"
);

if(!confirmDelete)
return;

const token =
localStorage.getItem("token");

const response =
await fetch(

`http://localhost:5000/api/products/${id}`,

{

method:"DELETE",

headers:{

Authorization:
`Bearer ${token}`

}

}

);

const data =
await response.json();

alert(data.message);

loadProducts();

document
.getElementById("searchInput")
.addEventListener(
"keyup",
function(){

const value =
this.value.toLowerCase();

const cards =
document.querySelectorAll(".card");

cards.forEach(card=>{

const text =
card.innerText.toLowerCase();

if(text.includes(value)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

}
