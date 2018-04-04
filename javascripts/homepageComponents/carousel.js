"use strict";
console.log("carousel linked");

let $ = require('jquery');
    

function showCarousel(){
    let carImages = ["home_banner_blue3.png", "home_banner_lav2.png", "home_banner_pink1.png"];

    let component = `
    <div id="homePageCarousel" class="carousel slide">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block w-100" src="./images/homeimages/${carImages[0]}" alt="First slide">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="./images/homeimages/${carImages[1]}" alt="Second slide">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="./images/homeimages/${carImages[2]}" alt="Third slide">
            </div>
        </div>
    </div>`;

    return component;
}

module.exports = {showCarousel};

