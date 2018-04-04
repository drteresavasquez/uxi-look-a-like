"use strict";
console.log("about linked");

let $ = require('jquery');

function show(){
    $('#about').addClass("active");
    $(".main").addClass("gray");
    $(".main").append(`
    <div id="sexy" class="col-sm-12">
        <img src="images/DrTeresaVasquez.png"/>
        <h1>/ MY STORY</h1>
        <p>I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.</p>
        <p class="last">I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.</p>
    </div>
    `);
}

module.exports = {show};