async function loadDashboard(){

try{

const response =
await fetch(
"http://localhost:5000/api/admin/dashboard"
);

const data =
await response.json();

document.getElementById("totalProducts").innerText =
data.totalProducts;

document.getElementById("totalUsers").innerText =
data.totalUsers;

document.getElementById("totalOrders").innerText =
data.totalOrders;

document.getElementById("totalRevenue").innerText =
"₹"+data.totalRevenue;

}catch(error){

console.log(error);

showToast(
"Failed To Load Dashboard",
"error"
);

}

}

loadDashboard();