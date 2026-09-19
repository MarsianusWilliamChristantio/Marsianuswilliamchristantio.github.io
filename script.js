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

// Detail prestasi/kegiatan: tampilkan sebagai pop up (modal)
const overlay = document.getElementById("modalOverlay");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");

function openModal(data) {
  modalTitle.textContent = data.title || "Detail";

  let html = "";
  if (data.tanggal) html += `<p><strong>📅 Hari / Tanggal:</strong> ${data.tanggal}</p>`;
  if (data.tahun) html += `<p><strong>🗓️ Tahun:</strong> ${data.tahun}</p>`;
  if (data.keterangan) html += `<p><strong>📝 Keterangan:</strong> ${data.keterangan}</p>`;

  // File pendukung, format: "Label|url ; Label|url"
  if (data.files && data.files.trim()) {
    html += `<p><strong>📎 File Pendukung:</strong></p><div class="achievement-files">`;
    data.files.split(";").forEach((item) => {
      const [label, url] = item.split("|").map((s) => s.trim());
      if (label && url) {
        html += `<a href="${url}" target="_blank" rel="noopener" class="file-chip">${label}</a>`;
      }
    });
    html += `</div>`;
  } else {
    html += `<p><strong>📎 File Pendukung:</strong> <span class="edu-empty">– (belum ada)</span></p>`;
  }

  modalBody.innerHTML = html;
  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden"; // cegah scroll di belakang
}

function closeModal() {
  overlay.classList.remove("open");
  overlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelectorAll(".achievement-trigger").forEach((btn) => {
  btn.addEventListener("click", () => {
    openModal({
      title: btn.dataset.title,
      tanggal: btn.dataset.tanggal,
      tahun: btn.dataset.tahun,
      keterangan: btn.dataset.keterangan,
      files: btn.dataset.files,
    });
  });
});

// Tutup: tombol X, klik area gelap, atau tekan Esc
modalClose.addEventListener("click", closeModal);
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// Tahun otomatis di footer
document.getElementById("year").textContent = new Date().getFullYear();
