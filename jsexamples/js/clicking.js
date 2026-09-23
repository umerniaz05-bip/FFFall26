"use strict";
let redClickBox = document.getElementById("redClick");

redClickBox.classList.add("clickBox");

//redClickBox.addEventListener("click");{
    //your actions go in here
//}

redClickBox.addEventListener("click", function() {
    document.querySelector("body").style.backgroundColor = "blue";
});

redClickBox.addEventListener("mouseover", function() {
    redClickBox.style.backgroundColor = "green";
});

redClickBox.addEventListener("mouseout", function() {
    redClickBox.style.backgroundColor = "red";
});