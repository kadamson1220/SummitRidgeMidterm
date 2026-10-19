import "./scss/styles.scss";
import { getPageID, loadPage } from "./model.js";

let isLoggedIn = sessionStorage.getItem("summitLoggedIn") === "true";

function showToast(message, type = "info") {
  const container = document.querySelector("#toastContainer");
  const toast = document.createElement("div");
  toast.classList.add("toast", `toast--${type}`);
  toast.innerHTML = message;
  container.appendChild(toast);
  setTimeout(() => toast.classList.add("toast--hide"), 3000);
  setTimeout(() => toast.remove(), 3500);
}

function updateLoginLink() {
  const loginLink = document.querySelector("#loginLink");
  loginLink.innerHTML = isLoggedIn ? "Logout" : "Login";
  loginLink.href = isLoggedIn ? "#logout" : "#login";
}

function changeRoute() {
  if (window.location.hash === "#logout") {
    isLoggedIn = false;
    sessionStorage.removeItem("summitLoggedIn");
    window.location.hash = "home";
    updateLoginLink();
    showToast("You have been logged out.", "info");
    return;
  }

  loadPage(getPageID());
  updateLoginLink();
  initPageListeners();
  document.querySelector("#mainNav").classList.remove("nav--open");
}

function initPageListeners() {
  document.querySelectorAll(".feedback-button").forEach((button) => {
    button.addEventListener("click", () => {
      showToast(button.dataset.message || "Thanks! Your selection was received.", "success");
    });
  });

  const newsletterForm = document.querySelector("#newsletterForm");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const email = document.querySelector("#newsletterEmail").value.trim();
      if (!email || !email.includes("@")) {
        showToast("Please enter a valid email address.", "error");
        return;
      }
      showToast("Thanks! You are on the trail-ready list.", "success");
      newsletterForm.reset();
    });
  }

  const contactForm = document.querySelector("#contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = document.querySelector("#contactName").value.trim();
      const email = document.querySelector("#contactEmail").value.trim();
      const subject = document.querySelector("#contactSubject").value;
      const message = document.querySelector("#contactMessage").value.trim();
      if (!name || !email || !subject || !message) {
        showToast("Please complete all required fields.", "error");
        return;
      }
      if (!email.includes("@")) {
        showToast("Please enter a valid email address.", "error");
        return;
      }
      showToast("Your message was sent successfully.", "success");
      contactForm.reset();
    });
  }

  const loginForm = document.querySelector("#loginForm");
  if (loginForm) loginForm.addEventListener("submit", handleLogin);
  const signupForm = document.querySelector("#signupForm");
  if (signupForm) signupForm.addEventListener("submit", handleSignup);
}

function handleLogin(event) {
  event.preventDefault();
  const email = document.querySelector("#loginEmail").value.trim().toLowerCase();
  const password = document.querySelector("#loginPassword").value;
  const savedUser = JSON.parse(localStorage.getItem("summitUser"));

  if (!email || !password) {
    showToast("Email and password are required.", "error");
    return;
  }
  if (!email.includes("@")) {
    showToast("Please enter a valid email address.", "error");
    return;
  }
  if (!savedUser || savedUser.email !== email || savedUser.password !== password) {
    showToast("Incorrect email or password. Please sign up first.", "error");
    return;
  }

  isLoggedIn = true;
  sessionStorage.setItem("summitLoggedIn", "true");
  updateLoginLink();
  showToast(`Welcome back, ${savedUser.firstName}!`, "success");
  setTimeout(() => (window.location.hash = "home"), 500);
}

function handleSignup(event) {
  event.preventDefault();
  const firstName = document.querySelector("#firstName").value.trim();
  const lastName = document.querySelector("#lastName").value.trim();
  const email = document.querySelector("#signupEmail").value.trim().toLowerCase();
  const password = document.querySelector("#signupPassword").value;
  const confirmPassword = document.querySelector("#confirmPassword").value;

  if (!firstName || !lastName || !email || !password || !confirmPassword) {
    showToast("Please complete all required fields.", "error");
    return;
  }
  if (!email.includes("@")) {
    showToast("Please enter a valid email address.", "error");
    return;
  }
  if (password.length < 6) {
    showToast("Password must be at least 6 characters.", "error");
    return;
  }
  if (password !== confirmPassword) {
    showToast("Passwords do not match.", "error");
    return;
  }

  localStorage.setItem("summitUser", JSON.stringify({ firstName, lastName, email, password }));
  showToast("Account created! You can now log in.", "success");
  setTimeout(() => (window.location.hash = "login"), 600);
}

function initApp() {
  document.querySelector("#menuButton").addEventListener("click", () => {
    document.querySelector("#mainNav").classList.toggle("nav--open");
  });
  window.addEventListener("hashchange", changeRoute);
  changeRoute();
}

initApp();
