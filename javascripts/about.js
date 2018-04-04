"use strict";
console.log("about linked");

let $ = require('jquery');

function show(){
    $('#about').addClass("active");
    $(".main").addClass("gray");
}

module.exports = {show};