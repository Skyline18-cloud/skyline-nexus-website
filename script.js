/* ==========================================
   SKYLINE NEXUS PREMIUM SCRIPT V2
========================================== */

// Back To Top Button

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

if (window.scrollY > 300) {
topBtn.style.display = "block";
} else {
topBtn.style.display = "none";
}

});

topBtn.addEventListener("click", function () {

window.scrollTo({
top: 0,
behavior: "smooth"
});

});

// Sticky Header

const header = document.querySelector("header");

window.addEventListener("scroll", function () {

if (window.scrollY > 50) {

header.style.background = "rgba(255,255,255,.96)";
header.style.boxShadow = "0 10px 30px rgba(0,0,0,.12)";

} else {

header.style.background = "rgba(255,255,255,.82)";
header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

}

});

// Scroll Reveal Animation

const reveals = document.querySelectorAll(
".service-box,.about-card,.about-text,.contact-info,.contact-form"
);

function revealElements() {

const windowHeight = window.innerHeight;

reveals.forEach(function (el) {

const top = el.getBoundingClientRect().top;

if (top < windowHeight - 100) {

el.style.opacity = "1";
el.style.transform = "translateY(0)";

}

});

}

reveals.forEach(function (el) {

el.style.opacity = "0";
el.style.transform = "translateY(50px)";
el.style.transition = "all .8s ease";

});

window.addEventListener("scroll", revealElements);

revealElements();

// Active Menu

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 120;

if (pageYOffset >= sectionTop) {

current = section.getAttribute("id");

}

});

navLinks.forEach(link => {

link.classList.remove("active");

if (link.getAttribute("href") === "#" + current) {

link.classList.add("active");

}

});

});

// Form Submit Success

const form = document.querySelector("form");

if(form){

form.addEventListener("submit", function(){

alert("Thank You! Your quotation request has been submitted successfully.");

});

}

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});
