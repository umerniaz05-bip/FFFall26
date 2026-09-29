"use strict";

let readingButton = document.getElementById("readingButton");
let highlightButton = document.getElementById("highlightButton");
let summaryButton = document.getElementById("summaryButton");

let chapters = document.querySelector(".chapters-grid");
let summary = document.getElementById("storySummary");

// Button 1: Change background and chapter text colors
readingButton.addEventListener("click", function() {
    document.querySelector("body").style.backgroundColor = "beige";
    chapters.style.color = "#402010";
});

// Button 2: Add a CSS class to the chapter grid
highlightButton.addEventListener("click", function() {
    chapters.classList.add("chapter-highlight");
});

// Button 3: Display and style a summary
summaryButton.addEventListener("click", function() {
    summary.innerHTML = "<h3>Story Summary</h3><p>Wick Talon uses wit, deception, and humor to rise from the streets of the Drown into the political world of House Ashmar.</p>";
    summary.style.backgroundColor = "lightyellow";
    summary.style.fontSize = "20px";
    summary.style.padding = "15px";
});