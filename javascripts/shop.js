"use strict";
console.log("shop linked");

let $ = require('jquery');

function show(){
    $('#shop').addClass("active");
    $(".main").addClass("gray");
}

module.exports = {show};