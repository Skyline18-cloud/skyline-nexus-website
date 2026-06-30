/* =====================================
   SKYLINE NEXUS CONSTRUCTION V3
   CLEAN JS - FULL FILE
===================================== */

/* =====================================
   PRELOADER
===================================== */

window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");

    if (preloader) {
        setTimeout(() => {
            preloader.style.display = "none";
        }, 1000);
    }
});

/* =====================================
   MOBILE MENU TOGGLE
===================================== */

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}

/* =====================================
   BACK TO TOP
===================================== */

const backToTop = document.getElementById("backToTop");

if (backToTop) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

/* =====================================
   SCROLL PROGRESS BAR
===================================== */

const scrollProgress = document.getElementById("scrollProgress");

if (scrollProgress) {
    window.addEventListener("scroll", () => {

        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        const scrolled = (scrollTop / scrollHeight) * 100;

        scrollProgress.style.width = scrolled + "%";
    });
}

/* =====================================
   MODAL + TOAST + LOADER
===================================== */

const modal = document.getElementById("successModal");
const toast = document.getElementById("toast");
const formLoader = document.getElementById("formLoader");
const quoteForm = document.querySelector(".quote-form form");

/* ---------- MODAL ---------- */

function showModal() {
    if (modal) modal.style.display = "flex";
}

function closeModal() {
    if (modal) modal.style.display = "none";
}

/* ---------- TOAST ---------- */

function showToast(message = "Success!") {
    if (!toast) return;

    const text = toast.querySelector("p");
    if (text) text.innerText = message;

    toast.style.display = "block";

    setTimeout(() => {
        toast.style.display = "none";
    }, 3000);
}

/* ---------- LOADER ---------- */

function showLoader() {
    if (formLoader) formLoader.style.display = "flex";
}

function hideLoader() {
    if (formLoader) formLoader.style.display = "none";
}

/* ---------- FORM SUBMIT ---------- */

if (quoteForm) {
    quoteForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        showLoader();

        const formData = new FormData(quoteForm);

        try {
            const response = await fetch(quoteForm.action, {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            });

            hideLoader();

            if (response.ok) {
                quoteForm.reset();
                showModal();
                showToast("Quotation Submitted Successfully!");
            } else {
                showToast("Something went wrong. Try again.");
            }

        } catch (error) {
            hideLoader();
            showToast("Network Error. Try again.");
        }
    });
}

/* =====================================
   COUNTER ANIMATION
===================================== */

const counters = document.querySelectorAll(".counter");
let counterStarted = false;

function animateCounter(counter) {
    const target = +counter.getAttribute("data-target");
    let count = 0;
    const speed = target / 100;

    function update() {
        count += speed;

        if (count < target) {
            counter.innerText = Math.ceil(count);
            requestAnimationFrame(update);
        } else {
            counter.innerText = target;
        }
    }

    update();
}

window.addEventListener("scroll", () => {

    const statsSection = document.querySelector(".stats");

    if (!statsSection || counterStarted) return;

    const top = statsSection.offsetTop;

    if (window.scrollY + window.innerHeight >= top) {
        counters.forEach(animateCounter);
        counterStarted = true;
    }
});

/* =====================================
   SMOOTH NAV SCROLL
===================================== */

document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: "smooth"
            });
        }
    });
});

/* =====================================
   ACTIVE NAV SCROLL
===================================== */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 120) {
            current = section.getAttribute("id");
        }
    });

    document.querySelectorAll("nav ul li a").forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

/* =====================================
   CLOSE MOBILE MENU ON CLICK
===================================== */

document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", () => {
        if (navMenu) navMenu.classList.remove("active");
    });
});

/* =====================================
   INIT LOG
===================================== */

console.log("Skyline Nexus Construction V3 Loaded Successfully 🚧");
