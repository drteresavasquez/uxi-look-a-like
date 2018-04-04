"use strict";
console.log("best sellers linked");

let $ = require('jquery'),
    baked = require("./../cookies"), //baked.cookies
    shop = require('./../shop'),
    singleCookie = require('./../singleCookie');

function show() {
    $(".main").append(`
        <div class="container best-sellers">
            <div class="heading">
                <h2>/ Best Sellers</h2>
            </div>
            <div class="subheading">
                <p>I'm a paragraph. Click here to add your own text and edit me.</p>
            </div>
            <div class="row best-sellers-items justify-content-center">
                
            </div>

            <!-- ***** BEGIN ALL COOKIES BUTTON ***** -->
            <div class="all-cookies">
                <div class="all-cookies-component">
                    <hr>
                    <button type="button" id="all-cookies" class="btn btn-outline-dark">All Cookies</button>
                </div>
            </div>
            <!-- ***** END ALL COOKIES BUTTON ***** -->

        </div>`);

        let firstThree = baked.cookies.slice(1,4);

        firstThree.forEach((cookie)=>{
            $('.best-sellers-items').append(`
            <div class="card col-sm-4 bs-item">
            <img class="card-img-top" id="${cookie.sku}" src="images/cookies/${cookie.img1}" alt="Card image cap">
            <div class="card-body">
                <p class="card-text">
                    <span class="item-name">${cookie.name}</span>
                    <br>
                    <span class="item-price">${cookie.price}</span>
                </p>
            </div>
        </div>
            `);
        });

        $(".all-cookies").click((e)=>{
            $(".main").html("");
            $(".nav-link").removeClass("active");
            shop.show();
        });

        $(".card-img-top").click((e)=>{
            let cookieSku = e.target.id;
            baked.cookies.forEach((cookie)=>{
                if(cookie.sku === cookieSku){
                    singleCookie.show(cookie);
                }
            });
        });
        $(".card-img-top").on("mouseenter", (e)=>{
            let cookieSku = e.target.id;
            baked.cookies.forEach((cookie)=>{
                if(cookie.sku === cookieSku){
                    $(`#${cookieSku}`).attr('src', `images/cookies/${cookie.img2}`);
                }
            });
        });
    
        $(".card-img-top").on("mouseleave", (e)=>{
            let cookieSku = e.target.id;
            baked.cookies.forEach((cookie)=>{
                if(cookie.sku === cookieSku){
                    $(`#${cookieSku}`).attr('src', `images/cookies/${cookie.img1}`);
                }
            });
        });
}

module.exports = {
    show
};