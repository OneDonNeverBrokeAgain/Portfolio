// Toggle navigation
document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("navLinks").classList.toggle("show");
});

// Filter Projects
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const category = btn.getAttribute("data-category");
    projectCards.forEach(card => {
      card.style.display = (category === "all" || card.dataset.category === category) ? "block" : "none";
    });
  });
});

// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const msgBox = document.getElementById("form-msg");

  if (name && email && message) {
    msgBox.textContent = "Message sent successfully!";
    msgBox.style.color = "green";
    this.reset();
  } else {
    msgBox.textContent = "Please fill in all fields.";
    msgBox.style.color = "red";
  }
});
