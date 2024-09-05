var typed = new Typed(".input", {
    Strings: ["E-commerce website",  "Fashion Store", "Grocery Website", "Shopping Website"],
    typespeed: 70,
    backspeed: 60,
    loop:true
});
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');

}