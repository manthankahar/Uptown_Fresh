async function loadProducts() {

try {

const response = await fetch(
  "http://localhost:5000/api/products"
);

const products = await response.json();

const container =
  document.getElementById(
    "products-container"
  );

container.innerHTML = "";

products.forEach(product => {

  container.innerHTML += `
  <div class="card">

    <img
      src="${product.image}"
      alt="${product.name}"
    >

    <h3>${product.name}</h3>

    <p>${product.description}</p>

    <p><b>₹${product.price}</b></p>

    <button>
      Add To Cart
    </button>

  </div>
  `;

});

} catch (error) {

console.log(error);


}

}

loadProducts();
