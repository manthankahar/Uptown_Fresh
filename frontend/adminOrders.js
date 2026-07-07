async function loadOrders(){

try{

const response = await fetch(

"http://localhost:5000/api/orders/all",

{

headers:{
Authorization:`Bearer ${localStorage.getItem("token")}`
}

}

);

const orders = await response.json();

if (!orders.length) {

container.innerHTML = `
<div style="width:100%;text-align:center;padding:50px;">
<h2>📦 No Orders Found</h2>
</div>
`;

return;

}

console.log("Orders =>", orders);

const container =
document.getElementById("ordersContainer");

let html="";

orders.forEach(order=>{

let products="";

order.products.forEach(item=>{

products += `

<li>

${item.productId.name}

&nbsp;

<b>x${item.quantity}</b>

</li>

`;

});

html += `

<div class="product-card">

<h2>
👤 ${order.userId ? order.userId.name : "Unknown User"}
</h2>

<p>
📧 ${order.userId ? order.userId.email : "No Email"}
</p>

<hr>

<p>

<b>Total :</b>

₹${order.totalPrice}

</p>

<p>

<b>Date :</b>

${new Date(order.createdAt).toLocaleString()}

</p>

<p>

<b>Status :</b>

<span style="color:#27ae60;font-weight:bold;">

${order.status}

</span>

</p>

<h3>

Products

</h3>

<ul>

${products}

</ul>

<br>

<select
onchange="changeStatus('${order._id}',this.value)"
>

<option ${order.status=="Pending"?"selected":""}>Pending</option>

<option ${order.status=="Packed"?"selected":""}>Packed</option>

<option ${order.status=="Shipped"?"selected":""}>Shipped</option>

<option ${order.status=="Delivered"?"selected":""}>Delivered</option>

</select>

<br><br>

<button

class="btn"

style="background:#e74c3c;"

onclick="deleteOrder('${order._id}')"

>

🗑 Delete Order

</button>

</div>

`;

});

container.innerHTML = html;

}catch(error){

console.log(error);

showToast(
"Unable To Load Orders",
"error"
);

}

}

// ======================
// Update Status
// ======================

async function changeStatus(id, status) {

try {

const response = await fetch(

`http://localhost:5000/api/orders/status/${id}`,

{

method: "PUT",

headers: {

"Content-Type": "application/json",

Authorization: `Bearer ${localStorage.getItem("token")}`

},

body: JSON.stringify({

status

})

}

);

const data = await response.json();

showToast(data.message, "success");

loadOrders();

} catch (error) {

console.log(error);

showToast("Unable To Update Status", "error");

}

}

// ======================
// Delete Order
// ======================

async function deleteOrder(id) {

const confirmDelete = confirm(

"Are you sure you want to delete this order?"

);

if (!confirmDelete) {

return;

}

try {

const response = await fetch(

`http://localhost:5000/api/orders/${id}`,

{

method: "DELETE",

headers: {

Authorization: `Bearer ${localStorage.getItem("token")}`

}

}

);

const data = await response.json();

showToast(data.message, "success");

loadOrders();

} catch (error) {

console.log(error);

showToast("Unable To Delete Order", "error");

}

}