function showToast(message, type = "success") {

const oldToast = document.querySelector(".toast");

if(oldToast){

oldToast.remove();

}

const toast = document.createElement("div");

toast.className = `toast ${type}`;

toast.innerHTML = message;

document.body.appendChild(toast);

setTimeout(()=>{

toast.classList.add("show");

},100);

setTimeout(()=>{

toast.classList.remove("show");

setTimeout(()=>{

toast.remove();

},500);

},3000);

}