let allProducts = [];

// ===============================
// Load Products From API
// ===============================

async function loadProducts() {

    try {

        const response = await fetch("http://localhost:5000/api/products");

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

    if (products.length === 0) {

        container.innerHTML = `
            <h2 style="text-align:center;">
                No Products Found
            </h2>
        `;

        return;

    }

    let html = "";

    products.forEach(product => {

        html += `

<div class="product-card">

    <img
        src="${product.image}"
        class="product-image"
    >

    <h2>${product.name}</h2>

    <p>${product.description}</p>

    <h3 style="color:#27ae60;">
        ₹${product.price}
    </h3>

    <button
        class="btn"
        onclick='addToCart(${JSON.stringify(product)})'
    >
        Add To Cart
    </button>

</div>

`;

    });

    container.innerHTML = html;

}

// ===============================
// Search Products
// ===============================

const searchInput =
document.getElementById("searchInput");

searchInput.addEventListener("input", () => {

    const keyword =
    searchInput.value.toLowerCase();

    const filtered =
    allProducts.filter(product =>

        product.name
        .toLowerCase()
        .includes(keyword)

    );

    displayProducts(filtered);

});

// ===============================
// Category Filter
// ===============================

const categoryFilter =
document.getElementById("categoryFilter");

categoryFilter.addEventListener("change", () => {

    const category =
    categoryFilter.value;

    if(category === "all"){

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

alert(data.message || "Product Added Successfully");

}else{

alert(data.message || "Failed To Add Product");

}

}catch(error){

console.log(error);

alert("Something Went Wrong");

}

}

// ===============================
// Load Products Automatically
// ===============================

loadProducts();