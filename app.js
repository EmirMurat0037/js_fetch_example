const loader = document.querySelector(".loader")
const myContainer = document.querySelector(".container");

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
    loader.style.display="none";
    data.forEach(user => {
        myContainer.innerHTML+=`<div class="users">
        <img class="avatar" src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" style="height: 100px;">
        <br>
        <span class="name">${user.name}</span>
        <br>
        <span class="mail">${user.email}</span>
        <br>
        <span class="number">${user.phone}</span>
        <br>
        <span class="adress">${user.address}</span>
        <br>
        <button class="detay" onclick="detay(${user.id})">detay</button>
        <br>
    </div>`;
    });
})

const detay = ((id) =>{
    window.localStorage.setItem("user_id",id);
    window.location.href="profile.html";
})
