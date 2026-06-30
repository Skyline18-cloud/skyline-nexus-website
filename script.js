/*=========================================
 SKYLINE NEXUS
 PREMIUM JS PART 1
=========================================*/

// ================= PRELOADER =================

window.addEventListener("load", function () {

    const preloader = document.getElementById("preloader");

    if (preloader) {

        setTimeout(() => {

            preloader.style.opacity = "0";

            preloader.style.visibility = "hidden";

        }, 1200);

    }

});

// ================= BACK TO TOP =================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        topBtn.style.display = "flex";

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

// ================= SCROLL REVEAL =================

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", revealSection);

function revealSection() {

    const trigger = window.innerHeight - 120;

    reveals.forEach(function (item) {

        const top = item.getBoundingClientRect().top;

        if (top < trigger) {

            item.classList.add("active");

        }

    });

}

revealSection();

// ================= COUNTER =================

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

function startCounter() {

    if (counterStarted) return;

    counterStarted = true;

    counters.forEach(counter => {

        const target = +counter.getAttribute("data-target");

        let count = 0;

        const speed = target / 120;

        const update = () => {

            count += speed;

            if (count < target) {

                counter.innerText = Math.floor(count);

                requestAnimationFrame(update);

            } else {

                counter.innerText = target + "+";

            }

        };

        update();

    });

}

window.addEventListener("scroll", function () {

    const section = document.querySelector(".stats");

    if (section) {

        const pos = section.getBoundingClientRect().top;

        if (pos < window.innerHeight - 150) {

            startCounter();

        }

    }

});

// ================= WELCOME POPUP =================

const popup = document.getElementById("welcomePopup");

if (popup && !sessionStorage.getItem("popupShown")) {

    setTimeout(function () {

        popup.style.display = "block";

    }, 1800);

    sessionStorage.setItem("popupShown", "yes");

}

function closePopup() {

    if (popup) {

        popup.style.display = "none";

    }

}

// ================= HERO BUTTON EFFECT =================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", function () {

        this.style.transform = "translateY(-5px) scale(1.03)";

    });

    btn.addEventListener("mouseleave", function () {

        this.style.transform = "translateY(0) scale(1)";

    });

});
/*=========================================
 SKYLINE NEXUS
 PREMIUM JS PART 2 (FINAL)
=========================================*/

// ================= FORM SUBMIT =================

const quoteForm = document.getElementById("quoteForm");
const loader = document.getElementById("loader");
const success = document.getElementById("successMessage");

if (quoteForm) {

quoteForm.addEventListener("submit", function () {

loader.style.display = "block";

success.style.display = "none";

});

}

// ================= SUCCESS ANIMATION =================

window.addEventListener("load", function () {

if(loader){

loader.style.display = "none";

}

});

// ================= FLOATING QUOTE =================

const quoteBtn = document.querySelector(".floating-quote");

if(quoteBtn){

quoteBtn.addEventListener("click",function(){

document.querySelector("#quote").scrollIntoView({

behavior:"smooth"

});

});

}

// ================= ACTIVE MENU =================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

const height=section.clientHeight;

if(scrollY>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// ================= SMOOTH HOVER =================

document.querySelectorAll(".service-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});

// ================= RIPPLE EFFECT =================

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(this.clientWidth,this.clientHeight);

circle.style.width=circle.style.height=diameter+"px";

circle.style.left=e.offsetX-diameter/2+"px";

circle.style.top=e.offsetY-diameter/2+"px";

circle.classList.add("ripple");

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});

// ================= STICKY HEADER =================

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.style.padding="0px";

header.style.boxShadow="0 10px 30px rgba(0,0,0,.15)";

}else{

header.style.boxShadow="0 8px 25px rgba(0,0,0,.08)";

}

});

// ================= IMAGE PARALLAX =================

window.addEventListener("scroll",()=>{

const hero=document.querySelector(".hero");

if(hero){

hero.style.backgroundPositionY=window.scrollY*0.4+"px";

}

});

// ================= TOAST =================

function showToast(message){

const toast=document.createElement("div");

toast.innerHTML=message;

toast.style.position="fixed";

toast.style.bottom="30px";

toast.style.left="30px";

toast.style.background="#0d6efd";

toast.style.color="#fff";

toast.style.padding="15px 25px";

toast.style.borderRadius="12px";

toast.style.boxShadow="0 15px 35px rgba(0,0,0,.20)";

toast.style.zIndex="999999";

toast.style.animation="fadeUp .4s";

document.body.appendChild(toast);

setTimeout(()=>{

toast.remove();

},3000);

}

// ================= CONTACT BUTTON =================

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("click",()=>{

showToast("Thank you for choosing Skyline Nexus 🚜");

});

});

// ================= END =================

console.log("Skyline Nexus Premium Loaded Successfully");
/*=========================================
 SKYLINE NEXUS
 PREMIUM JS PART 3
=========================================*/

// ================= MOBILE MENU =================

const menuBtn = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

navMenu.classList.toggle("show");

});

}

// ================= SCROLL PROGRESS =================

const progress=document.createElement("div");

progress.id="scrollProgress";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const scrollTop=document.documentElement.scrollTop;

const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const percent=(scrollTop/height)*100;

progress.style.width=percent+"%";

});

// ================= HERO TYPING EFFECT =================

const typing=document.querySelector(".typing");

if(typing){

const text=typing.innerText;

typing.innerHTML="";

let i=0;

function type(){

if(i<text.length){

typing.innerHTML+=text.charAt(i);

i++;

setTimeout(type,60);

}

}

type();

}

// ================= SERVICE CLICK =================

document.querySelectorAll(".service-card").forEach(card=>{

card.addEventListener("click",()=>{
/*=========================================
 SKYLINE NEXUS
 PREMIUM JS PART 4 (ULTIMATE)
=========================================*/

// ================= FORM SUCCESS =================

const form = document.querySelector("#quoteForm");

if(form){

form.addEventListener("submit",function(){

const loader=document.getElementById("loader");

if(loader){

loader.style.display="flex";

}

});

}

// ================= THANK YOU POPUP =================

function showSuccessPopup(){

const popup=document.createElement("div");

popup.innerHTML=`

<div style="
position:fixed;
top:50%;
left:50%;
transform:translate(-50%,-50%);
background:#fff;
padding:40px;
border-radius:20px;
box-shadow:0 20px 60px rgba(0,0,0,.25);
text-align:center;
z-index:999999;
width:350px;
max-width:90%;
">

<h2 style="color:#0d6efd;">✅ Thank You</h2>

<p style="margin:20px 0;color:#555;line-height:1.7;">
Your quotation request has been submitted successfully.
<br><br>
Our Team will contact you shortly.
</p>

<button id="closePopup"

style="
padding:12px 28px;
background:#0d6efd;
color:#fff;
border:none;
border-radius:30px;
cursor:pointer;
">

Close

</button>

</div>

`;

document.body.appendChild(popup);

document.getElementById("closePopup").onclick=function(){

popup.remove();

}

}

// ================= FORM SUCCESS =================

window.addEventListener("message",(e)=>{

if(e.data==="formSubmitted"){

const loader=document.getElementById("loader");

if(loader){

loader.style.display="none";

}

showSuccessPopup();

}

});

// ================= FLOATING QUOTE =================

const quote=document.createElement("a");

quote.href="#quote";

quote.innerHTML="💬";

quote.className="floatingQuote";

document.body.appendChild(quote);

// ================= COUNTER =================

document.querySelectorAll(".counter").forEach(counter=>{

let started=false;

function start(){

if(started) return;

started=true;

const target=+counter.dataset.target;

let count=0;

const speed=target/150;

function update(){

count+=speed;

if(count<target){

counter.innerHTML=Math.floor(count);

requestAnimationFrame(update);

}else{

counter.innerHTML=target+"+";

}

}

update();

}

window.addEventListener("scroll",()=>{

const pos=counter.getBoundingClientRect().top;

if(pos<window.innerHeight-80){

start();

}

});

});

// ================= IMAGE HOVER =================

document.querySelectorAll("img").forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transition=".5s";

img.style.transform="scale(1.05)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});

// ================= SCROLL TITLE =================

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

document.title="Skyline Nexus Construction";

}else{

document.title="Skyline Nexus";

}

});

// ================= SMOOTH APPEAR =================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

});

document.querySelectorAll(".reveal").forEach(el=>{

observer.observe(el);

});

// ================= LOADED =================

console.log("🚀 Skyline Nexus Premium Ultimate Loaded");
