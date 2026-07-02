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

`<p style="color:green;font-weight:bold;">
✅ In Stock (${product.stock} Left)
</p>

<button
class="btn"
onclick='addToCart(${JSON.stringify(product)})'
>
🛒 Add To Cart
</button>`

:

`<p style="color:red;font-weight:bold;">
❌ Out Of Stock
</p>

<button
class="btn"
disabled
style="background:#999;cursor:not-allowed;"
>
Out Of Stock
</button>`

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

            alert("Please Login First");

            window.location.href = "/login";

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

        alert(data.message);

    } catch (error) {

        console.log(error);

        alert("Something Went Wrong");

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

    alert(data.message);

    loadProducts();

}

// ===============================
// Start
// ===============================

loadProducts();