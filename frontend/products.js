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

    const container = document.getElementById("products-container");

    if (!products || products.length === 0) {

        container.innerHTML = `
        <h2 style="text-align:center;">
            No Products Found
        </h2>
        `;

        return;
    }

    const role = localStorage.getItem("userRole");

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

<p><b>Price :</b> ₹${product.price}</p>

${
product.stock > 0
?
`<span class="stock-green">
✅ ${product.stock} Left
</span>`
:
`<span class="stock-red">
❌ Out Of Stock
</span>`
}

<br><br>

<button
class="btn"
onclick='addToCart(${JSON.stringify(product)})'
${product.stock <= 0 ? "disabled" : ""}
>
🛒 Add To Cart
</button>



${
role === "admin"
?
`
<br><br>

<button
class="btn"
style="background:#3498db;"
onclick="openStockModal('${product._id}',${product.stock})"
>
➕ Update Stock
</button>

<br><br>

<button
class="btn"
style="background:red;"
onclick="deleteProduct('${product._id}')"
>
🗑 Delete
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

function applyFilters(){

    let filtered = [...allProducts];

    // Search
    const search =
    document.getElementById("searchInput").value.toLowerCase();

    if(search){

        filtered = filtered.filter(product=>

            product.name.toLowerCase().includes(search)

        );

    }

    // Category

    const category =
    document.getElementById("categoryFilter").value;

    if(category !== "All"){

        filtered = filtered.filter(product=>

            product.category === category

        );

    }

    // Price

    const price =
    document.getElementById("priceFilter").value;

    if(price){

        const range = price.split("-");

        const min = Number(range[0]);

        const max = Number(range[1]);

        filtered = filtered.filter(product=>

            product.price >= min &&
            product.price <= max

        );

    }

    // Sort

    const sort =
    document.getElementById("sortFilter").value;

    if(sort==="priceLow"){

        filtered.sort((a,b)=>a.price-b.price);

    }

    else if(sort==="priceHigh"){

        filtered.sort((a,b)=>b.price-a.price);

    }

    else if(sort==="name"){

        filtered.sort((a,b)=>a.name.localeCompare(b.name));

    }

    displayProducts(filtered);

}

document.getElementById("searchInput")
.addEventListener("input",applyFilters);

document.getElementById("categoryFilter")
.addEventListener("change",applyFilters);

document.getElementById("priceFilter")
.addEventListener("change",applyFilters);

document.getElementById("sortFilter")
.addEventListener("change",applyFilters);


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

let currentProductId = "";

function openStockModal(id, stock){

currentProductId = id;

document.getElementById("stockValue").value = stock;

document.getElementById("stockModal").style.display="flex";

}

function closeStockModal(){

document.getElementById("stockModal").style.display="none";

}

async function updateStock(){

const token = localStorage.getItem("token");

const stock = document.getElementById("stockValue").value;

try{

const response = await fetch(

`http://localhost:5000/api/products/${currentProductId}/restock`,

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

const data = await response.json();

showToast(data.message,"success");

closeStockModal();

loadProducts();

}catch(error){

console.log(error);

showToast("Something Went Wrong","error");

}

}

loadProducts();