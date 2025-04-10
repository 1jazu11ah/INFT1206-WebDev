/*
Name: Ijaz Miakhel
File: main.js
Date: 09 April 2025
Description: Accessibility improvements for a wildlife website.
*/
// functionality for showing/hiding the comments section

const showHideBtn = document.querySelector(".show-hide");
const commentWrapper = document.querySelector(".comment-wrapper");

commentWrapper.style.display = "none";

// Make the button focusable by keyboard
showHideBtn.setAttribute("tabindex", "0");

// Function for handling button click or keypress (Enter)
showHideBtn.onclick = function () {
  let showHideText = showHideBtn.textContent;
  if (showHideText === "Show comments") {
    showHideBtn.textContent = "Hide comments";
    commentWrapper.style.display = "block";
  } else {
    showHideBtn.textContent = "Show comments";
    commentWrapper.style.display = "none";
  }
};

// Add keydown event to activate the button on Enter key press
showHideBtn.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    showHideBtn.click();
  }
});

// functionality for adding a new comment via the comments form

const form = document.querySelector(".comment-form");
const nameField = document.querySelector("#name");
const commentField = document.querySelector("#comment");
const list = document.querySelector(".comment-container");

form.onsubmit = function (e) {
  e.preventDefault();
  submitComment();
};

function submitComment() {
  const listItem = document.createElement("li");
  const namePara = document.createElement("p");
  const commentPara = document.createElement("p");
  const nameValue = nameField.value;
  const commentValue = commentField.value;

  namePara.textContent = nameValue;
  commentPara.textContent = commentValue;

  list.appendChild(listItem);
  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);

  nameField.value = "";
  commentField.value = "";
}
