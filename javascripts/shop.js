"use strict";
console.log("shop linked");

let $ = require('jquery'),
baked = require("./cookies"), //baked.cookies
singleCookie = require('./singleCookie');

function show(){
    $('#shop').addClass("active");
    $(".main").addClass("gray");
    $(".main").append(`<div class="container best-sellers">
    <div class="heading">
        <h2>PICK YOUR COOKIES</h2>
    </div>
    <div class="row best-sellers-items justify-content-center">
        
    </div>`);

    baked.cookies.forEach((cookie)=>{
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

module.exports = {show};