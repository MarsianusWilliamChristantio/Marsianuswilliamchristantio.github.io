// Menu mobile: buka/tutup navigasi
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Tutup menu setelah klik salah satu link (di mode mobile)
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

// Accordion Perjalanan Studi: buka/tutup detail tiap jenjang
const eduHeaders = document.querySelectorAll(".edu-header");

eduHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const body = header.nextElementSibling;
    const isOpen = header.getAttribute("aria-expanded") === "true";

    if (isOpen) {
      // tutup
      header.setAttribute("aria-expanded", "false");
      body.style.maxHeight = null;
    } else {
      // buka
      header.setAttribute("aria-expanded", "true");
      body.style.maxHeight = body.scrollHeight + "px";
    }
  });
});

// Tahun otomatis di footer
document.getElementById("year").textContent = new Date().getFullYear();
