const cart =
JSON.parse(
localStorage.getItem("cart")
) || [];

let html = "";

cart.forEach(item=>{

html += `
<p>${item.name}</p>
`;

});

document.getElementById(
"cartItems"
).innerHTML = html;