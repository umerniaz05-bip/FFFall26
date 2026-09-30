"use strict";

let readingButton = document.getElementById("readingButton");
let highlightButton = document.getElementById("highlightButton");
let summaryButton = document.getElementById("summaryButton");

let chapters = document.querySelector(".chapters-grid");
let summary = document.getElementById("storySummary");

readingButton.addEventListener("click", function() {
    document.body.classList.toggle("reading-mode");
});

highlightButton.addEventListener("click", function() {
    chapters.classList.toggle("chapter-highlight");
});

let summaryVisible = false;

summaryButton.addEventListener("click", function() {
    if (summaryVisible == false) {
        summary.innerHTML = "<h3>Story Summary</h3><p>Wick Talon uses wit, deception, and humor to rise from the streets of the Drown into the political world of House Ashmar.</p>";
        summary.style.backgroundColor = "lightyellow";
        summary.style.fontSize = "20px";
        summary.style.padding = "15px";
        summary.style.display = "block";

        summaryButton.innerHTML = "Hide Story Summary";
        summaryVisible = true;
    } else {
        summary.style.display = "none";

        summaryButton.innerHTML = "Reveal Story Summary";
        summaryVisible = false;
    }
});