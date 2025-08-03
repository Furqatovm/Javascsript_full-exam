let header =document.getElementById("header");
let menu =document.getElementById("menu");

let closee =document.getElementById("close");
closee.style.cursor ="pointer";
let qora =document.getElementById("qora");

let nav =document.getElementById("nav");

menu.addEventListener("click", ()=> {
    header.style.display ="none";
    nav.style.display ="flex";
    qora.style.display ="block"
});

closee.addEventListener("click", ()=> {
    header.style.display ="flex";
    nav.style.display ="none";
    qora.style.display ="none"
})