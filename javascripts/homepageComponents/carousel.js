"use strict";
console.log("carousel linked");

let $ = require('jquery'),
shop = require('./../shop');
    
function showCarousel(){
    let carImages = ["home_banner_blue3.png", "home_banner_lav2.png", "home_banner_pink1.png"];

    $(".main").append(`
    <div id="homePageCarousel" class="carousel slide">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block w-100" src="./images/homeimages/${carImages[0]}" alt="First slide">
                <div class="carousel-caption d-none d-md-block">
                    <h1>100% NATURAL.<br>
                    HOMEMADE<br>
                    FRESH COOKIES.</h1>
                    <button type="button" class="btn btn-light">SHOP NOW</button>
              </div>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="./images/homeimages/${carImages[1]}" alt="Second slide">
                <div class="carousel-caption d-none d-md-block">
                    <h1>100% NATURAL.<br>
                    HOMEMADE<br>
                    FRESH COOKIES.</h1>
                    <button type="button" class="btn btn-light">SHOP NOW</button>
              </div>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="./images/homeimages/${carImages[2]}" alt="Third slide">
                <div class="carousel-caption d-none d-md-block">
                    <h1>100% NATURAL.<br>
                    HOMEMADE<br>
                    FRESH COOKIES.</h1>
                    <button type="button" class="btn btn-light">SHOP NOW</button>
              </div>
            </div>
        </div>
    </div>`);

    $(".btn").click((e)=>{
        $(".main").html("");
        $(".nav-link").removeClass("active");
        $(".main").removeClass("gray");
        shop.show();
    });
}

module.exports = {showCarousel};

