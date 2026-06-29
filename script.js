// ================================
// Skyline Nexus Construction
// JavaScript
// ================================

// Back To Top Button

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  
  if (window.scrollY > 300) {
    
    topBtn.style.display = "block";
    
  } else {
    
    topBtn.style.display = "none";
    
  }
  
});

topBtn.addEventListener("click", () => {
  
  window.scrollTo({
    
    top: 0,
    
    behavior: "smooth"
    
  });
  
});


// ================================
// Smooth Navigation
// ================================

document.querySelectorAll('nav a').forEach(anchor => {
  
  anchor.addEventListener('click', function(e) {
    
    e.preventDefault();
    
    document.querySelector(this.getAttribute('href'))
      
      .scrollIntoView({
        
        behavior: 'smooth'
        
      });
    
  });
  
});


// ================================
// Sticky Header Shadow
// ================================

window.addEventListener("scroll", () => {
  
  const header = document.querySelector("header");
  
  if (window.scrollY > 50) {
    
    header.style.boxShadow = "0 10px 30px rgba(0,0,0,.15)";
    
  } else {
    
    header.style.boxShadow = "0 3px 12px rgba(0,0,0,.08)";
    
  }
  
});


// ================================
// Fade Animation
// ================================

const observer = new IntersectionObserver(entries => {
  
  entries.forEach(entry => {
    
    if (entry.isIntersecting) {
      
      entry.target.classList.add("show");
      
    }
    
  });
  
});

document.querySelectorAll("section").forEach(section => {
  
  observer.observe(section);
  
});


// ================================
// Console Message
// ================================

console.log("Skyline Nexus Construction & Earthmovers Website Loaded Successfully");
