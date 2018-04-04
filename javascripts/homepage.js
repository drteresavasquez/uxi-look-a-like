"use strict";
console.log("homepage linked");
let caro = require("./homepageComponents/carousel");
let best = require("./homepageComponents/bestSellers");
let follow = require("./homepageComponents/followComponent");

let $ = require('jquery');

function showHomepage(){
    $(".main").html("");
    $(".main").append(caro.showCarousel());
    $(".main").append(best.showBest());
    $(".main").append(follow.showFollow());
}

module.exports = {showHomepage};
