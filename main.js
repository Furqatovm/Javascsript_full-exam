let header =document.getElementById("header");
let menu =document.getElementById("menu");

let closee =document.getElementById("close");
closee.style.cursor ="pointer"

let nav =document.getElementById("nav");

menu.addEventListener("click", ()=> {
    header.style.display ="none";
    nav.style.display ="flex";
});

closee.addEventListener("click", ()=> {
    header.style.display ="flex";
    nav.style.display ="none";
})