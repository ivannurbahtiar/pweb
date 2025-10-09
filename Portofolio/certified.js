const tabButtons = document.querySelectorAll(".tab-btn");
const certificates = document.querySelectorAll(".certificate-card");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Hapus active dari semua tab
    tabButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const target = btn.dataset.tab;

    // Sembunyikan semua sertifikat
    certificates.forEach((cert) => {
      if (cert.dataset.category === target) {
        cert.classList.remove("hidden");
      } else {
        cert.classList.add("hidden");
      }
    });
  });
});

// Ambil elemen modal
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close");

// Semua gambar sertifikat
const certImages = document.querySelectorAll(".certificate-card img");

// Saat gambar diklik
certImages.forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
});

// Tombol close ditekan
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Klik di luar gambar menutup modal
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
