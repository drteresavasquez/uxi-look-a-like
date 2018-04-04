"use strict";
console.log("best sellers linked");

let $ = require('jquery');

function showBest() {
    let component = `
<!-- ***** BEGIN BEST SELLERS COMPONENT ***** -->
        <div class="container best-sellers">
            <div class="heading">
                <h2>/ Best Sellers</h2>
            </div>
            <div class="subheading">
                <p>I'm a paragraph. Click here to add your own text and edit me.</p>
            </div>
            <div class="row best-sellers-items justify-content-center">
                <div class="card col-sm-4 bs-item">
                    <img class="card-img-top" src="images/cookies/butter-qv.png" alt="Card image cap">
                    <div class="card-body">
                        <p class="card-text">
                            <span class="item-name">Oatmeal Bites</span>
                            <br>
                            <span class="item-price">$100.00</span>
                        </p>
                    </div>
                </div>
                <div class="card col-sm-4 bs-item">
                    <img class="card-img-top" src="images/cookies/butter-qv.png" alt="Card image cap">
                    <div class="card-body">
                        <p class="card-text">
                            <span class="item-name">Oatmeal Bites</span>
                            <br>
                            <span class="item-price">$100.00</span>
                        </p>
                    </div>
                </div>
                <div class="card col-sm-4 bs-item">
                    <img class="card-img-top" src="images/cookies/butter-qv.png" alt="Card image cap">
                    <div class="card-body">
                        <p class="card-text">
                            <span class="item-name">Jam & Poppy Seed Bites</span>
                            <br>
                            <span class="item-price">$100.00</span>
                        </p>
                    </div>
                </div>
            </div>

            <!-- ***** BEGIN ALL COOKIES BUTTON ***** -->
            <div class="all-cookies">
                <div class="all-cookies-component">
                    <hr>
                    <button type="button" class="btn btn-outline-dark">All Cookies</button>
                </div>
            </div>
            <!-- ***** END ALL COOKIES BUTTON ***** -->

        </div>
        <!-- ***** END BEST SELLERS COMPONENT ***** -->`;

    return component;
}

module.exports = {
    showBest
};