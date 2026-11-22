
// Simple array of roles - you can add or edit words here
var words = [
  "Junior Full Stack Developer",
  "PHP & Laravel Developer",
  "React.js Developer",
  "MySQL Database Enthusiast"
];

var wordIndex = 0;
var charIndex = 0;
var isDeleting = false;
var typingElement = document.getElementById("typingText");

function typeEffect() {
  var currentWord = words[wordIndex];

  if (isDeleting == false) {
    // Add one letter at a time
    typingElement.innerHTML = currentWord.substring(0, charIndex + 1);
    charIndex = charIndex + 1;

    // When full word is typed, pause and then start deleting
    if (charIndex == currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }
  } else {
    // Remove one letter at a time
    typingElement.innerHTML = currentWord.substring(0, charIndex - 1);
    charIndex = charIndex - 1;

    // Move to next word when empty
    if (charIndex == 0) {
      isDeleting = false;
      wordIndex = wordIndex + 1;
      if (wordIndex >= words.length) {
        wordIndex = 0;
      }
    }
  }

  // Typing and deleting speed
  var speed = 100;
  if (isDeleting == true) {
    speed = 50;
  }
  setTimeout(typeEffect, speed);
}

// Start typing effect when page loads
typeEffect();


// ===== 2. NAVBAR SCROLL EFFECT & BACK TO TOP BUTTON =====
var navbar = document.getElementById("mainNavbar");
var topBtn = document.getElementById("backToTopBtn");

window.addEventListener("scroll", function () {
  // Add navy background and shadow to navbar after scrolling 50px
  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }

  // Show back to top button after scrolling 300px
  if (window.scrollY > 300) {
    topBtn.style.display = "flex";
  } else {
    topBtn.style.display = "none";
  }

  // Run scroll animations
  checkScrollAnimations();
});

// Smooth scroll to top when back to top button is clicked
topBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


// ===== 3. SCROLL ANIMATIONS (SECTIONS, SKILLS, TIMELINE) =====
var sections = document.querySelectorAll(".fade-section");
var skillBars = document.querySelectorAll(".skill-bar");
var timelineItems = document.querySelectorAll(".timeline-item");
var skillsAnimated = false;

function checkScrollAnimations() {
  var windowHeight = window.innerHeight;

  // Fade in sections on scroll
  for (var i = 0; i < sections.length; i++) {
    var sectionTop = sections[i].getBoundingClientRect().top;
    if (sectionTop < windowHeight - 100) {
      sections[i].classList.add("show");
    }
  }

  // Animate skill progress bars from 0% when skills section appears
  var skillsSection = document.getElementById("skills");
  if (skillsSection && skillsAnimated == false) {
    var skillsTop = skillsSection.getBoundingClientRect().top;
    if (skillsTop < windowHeight - 120) {
      for (var j = 0; j < skillBars.length; j++) {
        var targetWidth = skillBars[j].getAttribute("data-width");
        skillBars[j].style.width = targetWidth;
      }
      skillsAnimated = true;
    }
  }

  // Slide in timeline items one by one on scroll
  for (var k = 0; k < timelineItems.length; k++) {
    var itemTop = timelineItems[k].getBoundingClientRect().top;
    if (itemTop < windowHeight - 80) {
      timelineItems[k].classList.add("show");
    }
  }
}

// Run once on page load in case sections are already visible
window.addEventListener("load", function () {
  checkScrollAnimations();
  checkFormStatus();
});


// ===== 4. CONTACT FORM VALIDATION & MESSAGE DISPLAY =====
var myForm = document.getElementById("myForm");
var formMsg = document.getElementById("formMsg");

// Simple helper function to show success or error alert
function showMsg(text, type) {
  formMsg.innerHTML = text;
  formMsg.classList.remove("d-none", "alert-success", "alert-danger");
  if (type == "success") {
    formMsg.classList.add("alert-success");
  } else {
    formMsg.classList.add("alert-danger");
  }
}

// Validate form fields before submitting to contact.php
myForm.addEventListener("submit", function (event) {
  // Getting input values
  var name1 = document.getElementById("nameInput").value.trim();
  var email1 = document.getElementById("emailInput").value.trim();
  var msg1 = document.getElementById("msgInput").value.trim();

  // Check if any field is empty
  if (name1 == "" || email1 == "" || msg1 == "") {
    event.preventDefault();
    showMsg("Please fill in all fields before sending.", "error");
    return;
  }

  // Basic email check
  if (email1.indexOf("@") == -1 || email1.indexOf(".") == -1) {
    event.preventDefault();
    showMsg("Please enter a valid email address.", "error");
    return;
  }

  // Check message length
  if (msg1.length < 5) {
    event.preventDefault();
    showMsg("Please write a slightly longer message.", "error");
    return;
  }
});

// Check URL query parameter after contact.php redirects back
function checkFormStatus() {
  var params = new URLSearchParams(window.location.search);
  var status = params.get("status");

  if (status == "success") {
    showMsg("Thank you! Your message has been sent and saved.", "success");
  } else if (status == "error") {
    showMsg("Sorry! Something went wrong while saving your message. Please try again.", "error");
  }
}
