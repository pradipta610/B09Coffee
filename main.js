const menu= document.querySelector(".menu-toggle input");
const nav = document.querySelector("ul");

menu.addEventListener("click",function(){
    nav.classList.toggle("slide");
});//buat burger span