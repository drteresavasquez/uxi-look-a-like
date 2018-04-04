"use strict";
console.log("follow linked");

let $ = require('jquery');

let show = (cookie) =>{
    $(".main").html("");
    $(".nav-link").removeClass("active");
    $('#shop').addClass("active");
    $(".main").addClass("gray");
    console.log("FROM SINGLE COOKIE PAGE", cookie);
};

module.exports= {show};
