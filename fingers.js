/*jslint
    browser, for
*/

var handsDiv = document.getElementById("hands");
var fingersDiv = document.getElementById("fingers");

var handsDesc = document.getElementById("description-hands");
var fingersDesc = document.getElementById("description-fingers");

Leap.loop(function (obj) {
    "use strict";

    var hands = obj.hands.length;
    var fingers = obj.pointables.length;
    var extenders = 0;
    var i = 0;

    for (i = 0; i < fingers; i += 1) {
        if (obj.pointables[i].extended === true) {
            extenders += 1;
        }
    }

    handsDiv.innerHTML = hands;
    fingersDiv.innerHTML = extenders;

    var a = hands === 1 ? "hand<br>detected" : "hands<br>detected";
    var b = fingers === 1 ? "finger<br>extended" : "fingers<br>extended";

    handsDesc.innerHTML = a;
    fingersDesc.innerHTML = b;

    document.title = [hands, a, fingers, b].join(" ");

});
