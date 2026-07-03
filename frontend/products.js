let allProducts = [];

// ===============================
// Load Products
// ===============================

async function loadProducts() {

    try {

        const response = await fetch("http://localhost:5000/api/products");

        if (!response.ok) {
            throw new Error("Failed To Fetch Products");
        }

        const products = await response.json();

        allProducts = products;

        displayProducts(products);

    } catch (error) {

        console.log(error);

        document.getElementById("products-container").innerHTML = `
            <h2 style="text-align:center;color:red;">
                Failed To Load Products
            </h2>
        `;

    }

}

// ===============================
// Display Products
// ===============================

function displayProducts(products) {

    const container =
        document.getElementById("products-container");

    if (!products || products.length === 0) {

        container.innerHTML = `
            <h2 style="text-align:center;">
                No Products Found
            </h2>
        `;

        return;

    }

    const role =
        localStorage.getItem("userRole");

    let html = "";

    products.forEach(product => {

        html += `

<div class="product-card">

    <img
        src="${product.image}"
        class="product-image"
        alt="${product.name}"
    >

    <h2>${product.name}</h2>

    <p>${product.description}</p>

    <p><b>Category :</b> ${product.category}</p>

<p>
<b>Price :</b> ₹${product.price}
</p>

${
product.stock > 0

?

`<span class="stock-green">
✅ ${product.stock} Left
</span>`

:

`
<span class="stock-red">
❌ Out Of Stock
</span>

${
role === "admin"
?
`
<br><br>

<button
class="btn"
style="background:#3498db;"
onclick="restockProduct('${product._id}')"
>
➕ Restock
</button>
`
:
""
}
`
}

    ${
        role === "admin"
        ?
        `
        <button
            class="btn"
            style="background:red;margin-top:10px;"
            onclick="deleteProduct('${product._id}')"
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

    container.innerHTML = html;

}

// ===============================
// Search
// ===============================

document
.getElementById("searchInput")
.addEventListener("input", function () {

    const keyword =
        this.value.toLowerCase();

    const filtered =
        allProducts.filter(product =>
            product.name.toLowerCase().includes(keyword)
        );

    displayProducts(filtered);

});

// ===============================
// Category Filter
// ===============================

document
.getElementById("categoryFilter")
.addEventListener("change", function () {

    const category = this.value;

    if (category === "all") {

        displayProducts(allProducts);

        return;

    }

    const filtered =
        allProducts.filter(product =>
            product.category === category
        );

    displayProducts(filtered);

});

// ===============================
// Add To Cart
// ===============================

async function addToCart(product) {

    try {

        const token =
            localStorage.getItem("token");

        if (!token) {

            showToast(
               "Please Login First",
                 "warning"
);

setTimeout(()=>{

window.location.href="/login";

},1000);

            return;

        }

        const response = await fetch(
            "http://localhost:5000/api/cart/add",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    productId: product._id
                })
            }
        );

        const data = await response.json();

       showToast(
data.message,
"success"
);

    } catch (error) {

        console.log(error);

       showToast(
"Something Went Wrong",
"error"
);

    }

}

// ===============================
// Delete Product (Admin)
// ===============================

async function deleteProduct(id) {

    const token =
        localStorage.getItem("token");

    const confirmDelete =
        confirm("Delete This Product?");

    if (!confirmDelete) return;

    const response = await fetch(

        `http://localhost:5000/api/products/${id}`,

        {
            method: "DELETE",

            headers: {
                Authorization: `Bearer ${token}`
            }

        }

    );

    const data =
        await response.json();

    showToast(
data.message,
"success"
);

    loadProducts();

}

async function restockProduct(id){

const stock =
prompt("Enter New Stock Quantity");

if(!stock) return;

const token =
localStorage.getItem("token");

try{

const response =
await fetch(

`http://localhost:5000/api/products/${id}/restock`,

{

method:"PUT",

headers:{

"Content-Type":"application/json",

Authorization:`Bearer ${token}`

},

body:JSON.stringify({

stock

})

}

);

const data =
await response.json();

showToast(
data.message,
"success"
);

loadProducts();

}catch(error){

console.log(error);

showToast(
"Something Went Wrong",
"error"
);

}

}

loadProducts();