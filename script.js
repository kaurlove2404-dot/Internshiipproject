/* FORM VALIDATION */
const form = document.getElementById("contact-form");
const error = document.getElementById("error");

form.addEventListener("submit", function(e){
  e.preventDefault();
  const email = document.getElementById("email").value;

  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
    error.textContent = "Invalid email format";
  } else {
    error.textContent = "Message sent successfully!";
    console.log("Email:", email);
    form.reset();
  }
});

/* THEME TOGGLE */
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  const dark = document.body.classList.contains("dark-theme");
  toggleBtn.setAttribute("aria-pressed", dark);
  localStorage.setItem("theme", dark ? "dark" : "light");
});

if(localStorage.getItem("theme") === "dark"){
  document.body.classList.add("dark-theme");
}

/* MODAL POPUP */
const modal = document.getElementById("book-modal");
const closeBtn = document.getElementById("close-modal");

document.querySelectorAll(".book-item").forEach(item => {
  item.addEventListener("click", () => {
    modal.setAttribute("aria-hidden", "false");
    document.getElementById("modal-content").textContent =
      item.textContent + " available with 20% discount!";
    closeBtn.focus();
  });
});

closeBtn.addEventListener("click", () => {
  modal.setAttribute("aria-hidden", "true");
});
