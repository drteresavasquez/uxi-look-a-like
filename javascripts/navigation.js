"use strict";
console.log("navigation linked");

let $ = require('jquery');

let nav = ["home", "shop", "about", "brand", "instagram", "facebook", "youtube"];

let shoppingBag = `<span class="fa-stack">
<i class="fas fa-shopping-bag fa-stack-2x"></i>
<p class="fa-stack-1x cart-text">27</p>
</span>`;

nav.forEach((item)=>{
    if(item == "brand"){
        $(".nav").append(
            `<a class="brand-link brand" href="#" id="brand">Deina's Bites</a>`);
    }else{
        $(".nav").append(
            `<a class="nav-link" href="#" id="${item}">${item}</a>`);
    }
});

$(".nav").append(`<a class="nav-link" href="#" id="shoppingBag">${shoppingBag}</a>`);


$(nav).each(function(index, item) {
    $(`#${item}`).on("click", function(e){
    
    let itemId = $(`#${item}`).attr('id'); 
        switch (itemId) {
            case `${itemId}`:
                $(".nav-link").removeClass("active");
                $(`#${itemId}`).addClass("active");
                break;
        }
    });
});







// $(".nav").append(
//     `<a class="nav-link active" href="#">Home</a>
//     <a class="nav-link" href="#">Shop</a>
//     <a class="nav-link" href="#">About Me</a>
//     <a class="brand-link brand" href="#">Deina's Bites</a>
//     <a class="nav-link" href="#">Instagram</a>
//     <a class="nav-link" href="#">Facebook</a>
//     <a class="nav-link" href="#">Youtube</a>
//     <a class="nav-link" href="#">
//         <span class="fa-stack">
//             <i class="fas fa-shopping-bag fa-stack-2x"></i>
//             <p class="fa-stack-1x cart-text">27</p>
//         </span>
//     </a>`
// );