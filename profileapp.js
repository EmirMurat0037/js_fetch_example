const myContainer = document.querySelector(".item-container")
const user_id = window.localStorage.getItem("user_id");
fetch(`https://jsonplaceholder.typicode.com/users/${user_id}`)
.then(response => response.json())
.then(user => { 
        myContainer.innerHTML+=`<div class="item-top">
        <div class="top-left-logo">
            <img src="./logo.png" alt="">
        </div>
        <div class="top-right-cart">
            <i class="fa-solid fa-cart-shopping"></i>
        </div>
    </div>
    <div class="main-item">
        <img src="./item.png" alt="">
    </div>
    <h2 class="item-heading">
        ${user.name}
    </h2>
    <p class="item-description">
        ${user.email}</p>
    
    <p class="item-price">${user.phone}</p>
    <button class="item-cart-btn">${user.city}</button>`;

})