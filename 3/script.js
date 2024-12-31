// DOM Manipulation - complete script.js, style the form using only JavaScript

const form = document.getElementsByTagName("form");
const nameLabel = document.getElementById("nameLabel");
const emailLabel = document.getElementById("emailLabel");
const phoneLabel = document.getElementById("phoneLabel");
const messageLabel = document.getElementById("messageLabel");
const optionsLabel = document.getElementById("optionsLabel");
const inputFields = document.querySelectorAll("input");
const textArea = document.querySelector("textarea");
const options = document.getElementById("options");

nameLabel.textContent = "Name:";
emailLabel.textContent = "E-mail:";
phoneLabel.textContent = "Phone:";
messageLabel.textContent = "Please type in your message:";
optionsLabel.textContent = "Choose an option:";

document.body.style.backgroundColor = "#1d1d1b";
document.body.style.color = "#86affa";
document.body.style.fontFamily = "Lexend, serif";

form[0].style.border = "1px solid #86affa";
form[0].style.margin = "2rem auto";
form[0].style.padding = "2rem";
form[0].style.maxWidth = "32rem";
form[0].style.textAlign = "center";

// Node list, styles need to be applied to each element individually
inputFields.forEach(input => {
    input.style.color = "#86affa";
    input.style.backgroundColor = "#1d1d1b";
    input.style.border = "1px solid #86affa"
    input.style.fontFamily = "Lexend, serif";
})

textArea.style.marginTop = "0.5rem";
textArea.style.color = "#86affa";
textArea.style.backgroundColor = "#1d1d1b";
textArea.style.border = "1px solid #86affa"
textArea.style.fontFamily = "Lexend, serif";

options.style.color = "#86affa";
options.style.backgroundColor = "#1d1d1b";
options.style.border = "none"
options.style.textTransform = "uppercase"
options.style.fontFamily = "Lexend, serif";

const submitButton = document.querySelector("input[type='submit']");
submitButton.style.backgroundColor = "#86affa";
submitButton.style.color = "#1d1d1b";
submitButton.style.border = "none";
submitButton.style.padding = "0.5rem 1.5rem";



