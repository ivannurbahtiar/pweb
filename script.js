// Jalankan seluruh script setelah halaman selesai dimuat
document.addEventListener("DOMContentLoaded", () => {

  // === 🛍️ PRODUK (Hanya jalan jika halaman punya elemen dengan id="product-container") ===
  const container = document.getElementById("product-container");
  if (container) {

    // Data produk dikelompokkan berdasarkan kategori
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

    // Ambil tombol kategori, elemen modal, dan tombol close
    const buttons = document.querySelectorAll(".prod-btn");
    const modal = document.getElementById("imgModal");
    const modalImg = document.getElementById("imgPreview");
    const closeBtn = document.querySelector(".close");

    // Fungsi untuk menampilkan produk berdasarkan kategori
    const renderProducts = (category) => {
      container.innerHTML = ""; // hapus isi sebelumnya
      productData[category].forEach(p => {
        container.innerHTML += `
          <div class="product-item">
            <img src="images${p.img}" alt="${p.name}">
            <h4>${p.name}</h4>
            <p>${p.price}</p>
          </div>`;
      });
    };

    // Tampilkan kategori default (ATK)
    renderProducts("atk");

    // Event untuk tombol kategori (klik = ganti produk)
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active")); // hilangkan highlight lama
        btn.classList.add("active");                        // beri highlight baru
        renderProducts(btn.dataset.category);               // tampilkan produk sesuai data-category
      });
    });

    // Klik gambar produk untuk memperbesar (buka modal)
    container.addEventListener("click", (e) => {
      if (e.target.tagName === "IMG") {
        modal.style.display = "flex";
        modalImg.src = e.target.src;
      }
    });

    // Tutup modal (klik tombol X atau area luar)
    if (closeBtn && modal) {
      closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
      });
      modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.style.display = "none";
      });
    }
  }

  // === 🧾 FORM PESANAN (Hanya jalan di halaman order.html) ===
  const form = document.getElementById('orderForm');
  const message = document.getElementById('statusMessage');

  if (form && message) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();                // cegah reload halaman
      message.style.display = 'block';   // tampilkan pesan sukses
      form.reset();                      // kosongkan form
      setTimeout(() => {
        message.style.display = 'none';  // sembunyikan setelah 3 detik
      }, 3000);
    });
  }

  // === 🍔 HAMBURGER MENU (Untuk tampilan mobile) ===
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector("nav");

  if (hamburger && nav) {
    // Klik hamburger untuk buka/tutup menu
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      nav.classList.toggle("active");
    });

    // Tutup menu setelah link diklik
    document.querySelectorAll("nav a").forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        nav.classList.remove("active");
      });
    });
  }
});


// === 🖼️ POPUP FOTO KECIL DI HALAMAN HOME ===
document.addEventListener("DOMContentLoaded", () => {
  const smallImages = document.querySelectorAll(".image-small-container img");
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("imgPreview");
  const closeBtn = document.querySelector(".close");

  // Klik foto kecil → buka modal
  smallImages.forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = img.src;
    });
  });

  // Tutup modal dengan tombol X
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Tutup modal dengan klik di luar gambar
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });
});

// === 🧾 DROPDOWN PRODUK OTOMATIS BERDASARKAN KATEGORI ===
const kategoriSelect = document.getElementById("kategori");
const produkSelect = document.getElementById("produk");

if (kategoriSelect && produkSelect) {
  const produkList = {
    atk: ["Notebook", "Pulpen Karakter", "Tempat ATK", "Penghapus Lucu", "Kalkulator Mini"],
    aksesoris: ["Jepit Rambut", "Bando Beruang", "Cermin Motif Kucing", "Tas Shopie Martin", "Kotak Tisu Box"],
    perlengkapan: ["Tempat Bekal", "Lunch Box", "Botol Minum", "Tempat Makan", "Botol Minum 2"],
    makeup: ["Cushion Skintific", "Eyeliner Implora", "Bedak Wardah Refil", "Liptint Omg", "Blush on Pixy"],
    skincare: ["Animate 1 Paket", "Face Wash Kahf", "Face Wash Scora", "Sunscreen Azarine", "Moisturizer Scora"]
  };

  kategoriSelect.addEventListener("change", () => {
    const kategori = kategoriSelect.value;
    produkSelect.innerHTML = '<option value="">-- Pilih Produk --</option>'; // reset opsi

    if (kategori && produkList[kategori]) {
      produkList[kategori].forEach(item => {
        const option = document.createElement("option");
        option.value = item;
        option.textContent = item;
        produkSelect.appendChild(option);
      });
      produkSelect.disabled = false;
    } else {
      produkSelect.disabled = true;
    }
  });
}
