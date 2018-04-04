"use strict";
console.log("homepage linked");
let caro = require("./homepageComponents/carousel");
let best = require("./homepageComponents/bestSellers");
let follow = require("./homepageComponents/followComponent");

let $ = require('jquery');

function show(){
    $(".main").append(caro.showCarousel());
    best.show();
    $(".main").append(follow.showFollow());
    $('#home').addClass("active");
}

module.exports = {show};
