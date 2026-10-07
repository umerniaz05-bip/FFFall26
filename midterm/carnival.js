"use strict";

let themeButton = document.getElementById("themeButton");
let secretButton = document.getElementById("secretButton");
let lanternButton = document.getElementById("lanternButton");

let secretText = document.getElementById("secretText");
let rainbowLantern = document.getElementById("rainbowLantern");
let ending = document.getElementById("ending");

let nightMode = false;
let lanternLit = false;

// Button 1: Switch between day and night
themeButton.addEventListener("click", function() {
    if (nightMode == false) {
        document.body.classList.add("night-mode");
        themeButton.innerText = "Switch to Day Carnival";
        nightMode = true;
    } else {
        document.body.classList.remove("night-mode");
        themeButton.innerText = "Switch to Night Carnival";
        nightMode = false;
    }
});

// Button 2: Show or hide the secret
secretButton.addEventListener("click", function() {
    if (secretText.hidden == true) {
        secretText.hidden = false;
        secretButton.innerText = "Hide the Secret";
        secretButton.setAttribute("aria-expanded", "true");
    } else {
        secretText.hidden = true;
        secretButton.innerText = "Reveal the Secret";
        secretButton.setAttribute("aria-expanded", "false");
    }
});

// Button 3: Light the lantern and reveal the ending
lanternButton.addEventListener("click", function() {
    if (lanternLit == false) {
        rainbowLantern.classList.add("lit");
        rainbowLantern.innerHTML = "<p class='center-text'>The Rainbow Lantern shines again!</p>";

        ending.innerHTML = "<p>Milo placed the four crystals inside the lantern. Color swept across the islands, and the rainbow bridges shone one last time as the visitors made their way home.</p><p>Madame Marigold closed the gates. Pip curled beneath the lantern, his tail glowing a sleepy orange.</p><p>Back in Bellweather, Milo unfolded his map. A tiny golden message had appeared in its corner: <em>See you next summer.</em></p>";

        lanternButton.innerText = "Turn Off the Lantern";
        lanternLit = true;
    } else {
        rainbowLantern.classList.remove("lit");
        rainbowLantern.innerHTML = "<p class='center-text'>The Rainbow Lantern is waiting to shine.</p>";

        ending.innerHTML = "";

        lanternButton.innerText = "Light the Lantern";
        lanternLit = false;
    }
});