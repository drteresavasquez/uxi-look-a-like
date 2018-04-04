"use strict";
console.log("follow linked");

let $ = require('jquery');

function showFollow() {
    let component = `<!-- ***** BEGIN FOLLOW COMPONENT ***** -->
    <div class="follow-component">
        <div class="jumbotron jumbotron-fluid jumbo-follow">
            <h1>/ Follow Me for More Bites</h1>
            <div class="container follow">
                <div class="row follow-items justify-content-center no-gutters">
                    <div class="card col-sm-4 follow-item">
                        <img class="card-img-top" src="images/cookies/butter-qv.png" alt="Card image cap">
                    </div>
                    <div class="card col-sm-4 follow-item">
                        <img class="card-img-top" src="images/cookies/butter-qv.png" alt="Card image cap">
                    </div>
                    <div class="card col-sm-4 follow-item">
                        <img class="card-img-top" src="images/cookies/butter-qv.png" alt="Card image cap">
                    </div>
                    <div class="card col-sm-4 follow-item">
                        <img class="card-img-top" src="images/cookies/butter-qv.png" alt="Card image cap">
                    </div>
                    <div class="card col-sm-4 follow-item">
                        <img class="card-img-top" src="images/cookies/butter-qv.png" alt="Card image cap">
                    </div>
                    <div class="card col-sm-4 follow-item">
                        <img class="card-img-top" src="images/cookies/butter-qv.png" alt="Card image cap">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- ***** END FOLLOW COMPONENT ***** -->`;

    return component;
}

module.exports = {showFollow};