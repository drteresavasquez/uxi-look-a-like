"use strict";
console.log("footer linked");

let $ = require('jquery');

$(".footer").append(`<div class="jumbotron jumbotron-fluid jumbo-footer">
<div class="row footer-comp">
<div class="footer-col col-sm-3">
    <p class="title">Shop:</p>
    <ul>
        <li>About</li>
        <li>FAQ</li>
        <li>Shipping / Pick Up </li>
        <li>Store Policy</li>
        <li>Contact Me</li>
    </ul>
</div>
<div class="footer-col col-sm-3">
    <p class="title">Opening Hours:</p>
    <ul>
        <li>Mon - Fri: 7am - 10pm </li>
        <li>Saturday: 8am - 10pm</li>
        <li>Sunday: 8am - 11pm</li>
    </ul>
</div>
<div class="footer-col col-sm-3">
    <p class="title">Address:</p>
    <ul>
        <li>500 Terry Francois Street</li>
        <li>San Francisco, CA 94158</li>
        <li>Tel: 123-456-7890</li>
    </ul>
</div>
<div class="footer-col-last col-sm-3">
        <p class="title">Social Media Here:</p>
</div>
<div class="footer-col-full col-sm-12">
    <p>© 2023 by Deina's Bites. </p>
</div>
</div>
</div>`);