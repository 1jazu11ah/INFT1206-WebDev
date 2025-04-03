/* 
Name: Ijaz Miakhel
File: main.js
Date: 2025-04-02
Description: JavaScript code for an interactive image gallery
*/
const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Declaring the array of image filenames */
const imageFilenames = [
  "pic1.jpg",
  "pic2.jpg",
  "pic3.jpg",
  "pic4.jpg",
  "pic5.jpg",
];

/* Declaring the alternative text for each image file */
const altTexts = {
  "pic1.jpg": "Blue human eye",
  "pic2.jpg": "Rock shaped like a wave",
  "pic3.jpg": "Purple and white flowers",
  "pic4.jpg": "Old Egyptian wall painting",
  "pic5.jpg": "Butterfly on a leaf",
};

/* Looping through images */
for (let i = 1; i <= imageFilenames.length; i++) {
  const newImage = document.createElement("img");
  const filename = `pic${i}.jpg`;
  newImage.setAttribute("src", `images/${filename}`);
  newImage.setAttribute("alt", altTexts[filename]);
  thumbBar.appendChild(newImage);

  // Add click event listener to each thumbnail
  newImage.addEventListener("click", function () {
    displayedImage.setAttribute("src", this.getAttribute("src"));
    displayedImage.setAttribute("alt", this.getAttribute("alt"));
  });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", function () {
  const currentClass = btn.getAttribute("class");
  if (currentClass === "dark") {
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
  } else {
    btn.setAttribute("class", "dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
  }
});
