document.addEventListener("DOMContentLoaded", () => {
  // === PRODUK (Hanya jika ada product-container) ===
  const container = document.getElementById("product-container");
  if (container) {
    const productData = {
      atk: [
        { name: "Notebook", price: "Rp 4.500", img: "/notebook.jpg" },
        { name: "Pulpen Karakter", price: "Rp 2.500", img: "/pulpen karakter.jpg" },
        { name: "Tempat ATK", price: "Rp 6.500", img: "/tempatatk.jpg" },
        { name: "Penghapus Lucu", price: "Rp 6.000", img: "/penghapus-lucu.png" },
        { name: "Kalkulator Mini", price: "Rp 10.000", img: "/kalkulator-mini.jpg" },
      ],
      aksesoris: [
        { name: "Jepit Rambut", price: "Rp 14.000", img: "/jepit rambut.jpg" },
        { name: "Bando Beruang", price: "Rp 9.000", img: "/bando beruang.jpg" },
        { name: "Cermin Motif Kucing", price: "Rp 22.000", img: "/cermin motif kucing.jpg" },
        { name: "Tas Shopie Martin", price: "Rp 125.000", img: "/tas shopie martin.jpg" },
        { name: "Kotak Tisu Box", price: "Rp 19.000", img: "/kotak tisu box.jpg" },
      ],
      perlengkapan: [
        { name: "Tempat Bekal", price: "Rp 68.000", img: "/tempat bekal.jpg" },
        { name: "Lunch Box", price: "Rp 50.000", img: "/lunch box set.jpg" },
        { name: "Botol Minum", price: "Rp 22.000", img: "/botol minum.jpg" },
        { name: "Tempat Makan", price: "Rp 25.000", img: "/tempat makan.jpg" },
        { name: "Botol Minum", price: "Rp 28.000", img: "/botol minum2.jpg" },
      ],
      makeup: [
        { name: "Cushion Skintific", price: "Rp 90.000", img: "/cushion skintific.jpg" },
        { name: "Eyeliner Implora", price: "Rp 14.000", img: "/eyeliner implora.jpg" },
        { name: "Bedak Wardah Refil", price: "Rp 33.000", img: "/Bedak Wardah Refil.jpg" },
        { name: "Liptint Omg", price: "Rp 20.000", img: "/Liptint Omg.jpg" },
        { name: "Blush on Pixy", price: "Rp 27.000", img: "/Blush on Pixy .jpg" },
      ],
      skincare: [
        { name: "Animate 1 Paket", price: "Rp 99.000", img: "/Animate 1 Paket.jpg" },
        { name: "Face Wash Kahf", price: "Rp 49.000", img: "/Face Wash Kahf.jpg" },
        { name: "Face  Wash Scora", price: "Rp 38.000", img: "/Face  Wash Scora.jpg" },
        { name: "Sunscreen Azarine ", price: "Rp 29.000", img: "/Sunscreen azarine.jpg" },
        { name: "Moisturizer Scora", price: "Rp 38.000", img: "/Moisturizer Scora.jpg" },
      ]
    };

    const buttons = document.querySelectorAll(".prod-btn");
    const modal = document.getElementById("imgModal");
    const modalImg = document.getElementById("imgPreview");
    const closeBtn = document.querySelector(".close");

    const renderProducts = (category) => {
      container.innerHTML = "";
      productData[category].forEach(p => {
        container.innerHTML += `
          <div class="product-item">
            <img src="images${p.img}" alt="${p.name}">
            <h4>${p.name}</h4>
            <p>${p.price}</p>
          </div>`;
      });
    };

    // Default tampil kategori ATK
    renderProducts("atk");

    // Tombol kategori
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderProducts(btn.dataset.category);
      });
    });

    // Zoom gambar
    container.addEventListener("click", (e) => {
      if (e.target.tagName === "IMG") {
        modal.style.display = "flex";
        modalImg.src = e.target.src;
      }
    });

    if (closeBtn && modal) {
      closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
      });
      modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.style.display = "none";
      });
    }
  }

  // === FORM PESANAN (Hanya jika ada orderForm) ===
  const form = document.getElementById('orderForm');
  const message = document.getElementById('statusMessage');

  if (form && message) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      message.style.display = 'block';
      form.reset();
      setTimeout(() => {
        message.style.display = 'none';
      }, 3000);
    });
  }

  // === HAMBURGER MENU (Hanya jika ada) ===
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector("nav");

  if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      nav.classList.toggle("active");
    });

    document.querySelectorAll("nav a").forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        nav.classList.remove("active");
      });
    });
  }
});

// === POPUP UNTUK FOTO KECIL DI HOME ===
document.addEventListener("DOMContentLoaded", () => {
  const smallImages = document.querySelectorAll(".image-small-container img");
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("imgPreview");
  const closeBtn = document.querySelector(".close");

  smallImages.forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "flex";  // tampilkan popup
      modalImg.src = img.src;        // tampilkan gambar yg diklik
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none"; // tutup popup
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none"; // klik luar popup untuk menutup
  });
});

