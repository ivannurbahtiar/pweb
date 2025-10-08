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
