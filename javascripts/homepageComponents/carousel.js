"use strict";
console.log("carousel linked");

let $ = require('jquery');

function showCarousel(){
    let component = `
    <div id="carousel" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block w-100" src="./images/bowls.jpg" alt="First slide">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="./images/bowls.jpg" alt="Second slide">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="./images/bowls.jpg" alt="Third slide">
            </div>
        </div>
    </div>`;

    return component;
}

module.exports = {showCarousel };

