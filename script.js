/* =====================================
   SKYLINE NEXUS CONSTRUCTION V3
   JS PART 1 - CORE FUNCTIONALITY
===================================== */

/* ---------- PRELOADER ---------- */

window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    setTimeout(() => {
        preloader.style.display = "none";
    }, 1000);
});


/* ---------- MOBILE MENU TOGGLE ---------- */

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


/* ---------- BACK TO TOP BUTTON ---------- */

const backToTop = document.getElementById("backToTop");

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


/* ---------- SCROLL PROGRESS BAR ---------- */

const scrollProgress = document.getElementById("scrollProgress");

window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrolled = (scrollTop / scrollHeight) * 100;

    if (scrollProgress) {
        scrollProgress.style.width = scrolled + "%";
    }
});
/* =====================================
   SKYLINE NEXUS CONSTRUCTION V3
   JS PART 2 - FORM + MODAL + TOAST
===================================== */

/* ---------- ELEMENTS ---------- */

const modal = document.getElementById("successModal");
const toast = document.getElementById("toast");
const formLoader = document.getElementById("formLoader");
const quoteForm = document.querySelector(".quote-form form");


/* ---------- SHOW MODAL ---------- */

function showModal() {
    if (modal) {
        modal.style.display = "flex";
    }
}

/* ---------- CLOSE MODAL ---------- */

function closeModal() {
    if (modal) {
        modal.style.display = "none";
    }
}

/* ---------- SHOW TOAST ---------- */

function showToast(message = "Message Sent Successfully!") {

    if (!toast) return;

    toast.querySelector("p").innerText = message;
    toast.style.display = "block";

    setTimeout(() => {
        toast.style.display = "none";
    }, 3000);
}


/* ---------- SHOW LOADER ---------- */

function showLoader() {
    if (formLoader) {
        formLoader.style.display = "flex";
    }
}

/* ---------- HIDE LOADER ---------- */

function hideLoader() {
    if (formLoader) {
        formLoader.style.display = "none";
    }
}


/* ---------- FORM SUBMIT HANDLING ---------- */

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
   SKYLINE NEXUS CONSTRUCTION V3
   JS PART 3 - ANIMATIONS + COUNTERS
===================================== */


/* ---------- COUNTER ANIMATION ---------- */

const counters = document.querySelectorAll(".counter");

function animateCounter(counter) {
    const target = +counter.getAttribute("data-target");
    let count = 0;

    const speed = target / 100;

    const updateCount = () => {
        count += speed;

        if (count < target) {
            counter.innerText = Math.ceil(count);
            requestAnimationFrame(updateCount);
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
}


/* ---------- SCROLL TRIGGER FOR COUNTERS ---------- */

let counterStarted = false;

window.addEventListener("scroll", () => {

    const statsSection = document.querySelector(".stats");

    if (!statsSection) return;

    const sectionTop = statsSection.offsetTop;
    const sectionHeight = statsSection.offsetHeight;

    if (
        window.scrollY + window.innerHeight >= sectionTop &&
        !counterStarted
    ) {
        counters.forEach(counter => animateCounter(counter));
        counterStarted = true;
    }
});


/* ---------- SMOOTH NAV SCROLL ---------- */

document.querySelectorAll("nav ul li a").forEach(link => {

    link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: "smooth"
            });
        }
    });

});


/* ---------- ACTIVE NAV ON SCROLL ---------- */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (scrollY >= sectionTop - 100) {
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


/* ---------- MOBILE MENU CLOSE ON CLICK ---------- */

document.querySelectorAll("nav ul li a").forEach(link => {

    link.addEventListener("click", () => {
        document.querySelector("nav ul").classList.remove("active");
    });

});


/* ---------- INITIAL LOG ---------- */

console.log("Skyline Nexus Construction V3 Fully Loaded 🚧");
