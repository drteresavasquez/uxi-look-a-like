"use strict";
console.log("navigation linked");

let $ = require('jquery'),
    home = require('./homepage'),
    about = require('./about'),
    shop = require('./shop');

let nav = ["home", "shop", "about", "brand", "instagram", "facebook", "youtube", "shoppingBag"];

let shoppingBag = `<span class="fa-stack">
<i class="fas fa-shopping-bag fa-stack-2x"></i>
<p class="fa-stack-1x cart-text">27</p>
</span>`;

nav.forEach((item)=>{
    if(item == "brand"){
        $(".nav").append(
            `<a class="brand-link brand" href="#" id="brand">Deina's Bites</a>`);
    }else if(item == "shoppingBag"){
        $(".nav").append(`<a class="nav-link" href="#" id="${item}">${shoppingBag}</a>`);
    }else{
        $(".nav").append(
            `<a class="nav-link" href="#" id="${item}">${item}</a>`);
    }
});

$(nav).each(function(index, item) {
    $(`#${item}`).on("click", function(e){
        $(".main").html("");
        $(".nav-link").removeClass("active");
        $(".main").removeClass("gray");
        
    let itemId = $(`#${item}`).attr('id'); 
        
    switch (itemId) {
        case 'home':
        case 'instagram':
        case 'facebook':
        case 'youtube':
            home.show();
            break;
        case 'shop':
            shop.show();
            break;
        case 'about':
            about.show();
            break;
        }
    });
});