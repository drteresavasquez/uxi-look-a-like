"use strict";
console.log("follow linked");

let $ = require('jquery'),
baked = require("./../cookies"), //baked.cookies
singleCookie = require('./../singleCookie');

function showFollow() {
    $(".main").append(`
    <div class="follow-component">
        <div class="jumbotron jumbotron-fluid jumbo-follow">
            <h1>/ Follow Me for More Bites</h1>
            <div class="container follow">
                <div class="row follow-items justify-content-center no-gutters">
                    
                </div>
            </div>
        </div>
    </div>`);

    baked.insta.forEach((gram)=>{
            $('.follow-items').append(`
            <div class="card col-sm-4 follow-item">
                <img class="card-img-top" id="follow-grams" src="images/${gram}" alt="Card image cap">
            </div>
            `);
        });


}

module.exports = {showFollow};