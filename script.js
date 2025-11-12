// ==============================
// 🌐 SCRIPT UTAMA WEBSITE 
// ==============================

document.addEventListener("DOMContentLoaded", () => {

  // ============================================================
  // 🛍️ PRODUK — hanya aktif di halaman product.html
  // ============================================================

  const container = document.getElementById("product-container");
  if (container) {

    // ✅ Data produk berdasarkan kategori
    const productData = {
      atk: [
        { name: "Notebook", price: "Rp 4500", img: "notebook.jpg" },
        { name: "Pulpen Karakter", price: "Rp 2500", img: "pulpen karakter.jpg" },
        { name: "Tempat ATK", price: "Rp 6500", img: "tempatatk.jpg" },
        { name: "Penghapus Lucu", price: "Rp 6000", img: "penghapus-lucu.png" },
        { name: "Kalkulator Mini", price: "Rp 10000", img: "kalkulator-mini.jpg" },
      ],
      aksesoris: [
        { name: "Jepit Rambut", price: "Rp 14000", img: "jepit rambut.jpg" },
        { name: "Bando Beruang", price: "Rp 9000", img: "bando beruang.jpg" },
        { name: "Cermin Motif Kucing", price: "Rp 22000", img: "cermin motif kucing.jpg" },
        { name: "Tas Shopie Martin", price: "Rp 125000", img: "tas shopie martin.jpg" },
        { name: "Kotak Tisu Box", price: "Rp 19000", img: "kotak tisu box.jpg" },
      ],
      perlengkapan: [
        { name: "Tempat Bekal", price: "Rp 68000", img: "tempat bekal.jpg" },
        { name: "Lunch Box", price: "Rp 50000", img: "lunch box set.jpg" },
        { name: "Botol Minum", price: "Rp 22000", img: "botol minum.jpg" },
        { name: "Tempat Makan", price: "Rp 25000", img: "tempat makan.jpg" },
        { name: "Botol Minum", price: "Rp 28000", img: "botol minum2.jpg" },
      ],
      makeup: [
        { name: "Cushion Skintific", price: "Rp 90000", img: "cushion skintific.jpg" },
        { name: "Eyeliner Implora", price: "Rp 14000", img: "eyeliner implora.jpg" },
        { name: "Bedak Wardah Refil", price: "Rp 33000", img: "Bedak Wardah Refil.jpg" },
        { name: "Liptint Omg", price: "Rp 20000", img: "Liptint Omg.jpg" },
        { name: "Blush on Pixy", price: "Rp 27000", img: "Blush on Pixy.jpg" },
      ],
      skincare: [
        { name: "Animate 1 Paket", price: "Rp 99000", img: "Animate 1 Paket.jpg" },
        { name: "Face Wash Kahf", price: "Rp 49000", img: "Face Wash Kahf.jpg" },
        { name: "Face Wash Scora", price: "Rp 38000", img: "Face  Wash Scora.jpg" },
        { name: "Sunscreen Azarine", price: "Rp 29000", img: "Sunscreen azarine.jpg" },
        { name: "Moisturizer Scora", price: "Rp 38000", img: "Moisturizer Scora.jpg" },
      ]
    };

    const buttons = document.querySelectorAll(".prod-btn");
    const modal = document.getElementById("imgModal");
    const modalImg = document.getElementById("imgPreview");
    const closeBtn = document.querySelector(".close");

    // 🔹 Fungsi render produk
    const renderProducts = (category) => {
      container.innerHTML = "";
      productData[category].forEach((p, index) => {
        container.innerHTML += `
          <div class="product-item" data-category="${category}" data-index="${index}">
            <img src="./images/${p.img}" alt="${p.name}">
            <h4>${p.name}</h4>
            <p>${p.price}</p>
            <div class="product-buttons">
              <button class="cart-btn">🛒 Keranjang</button>
              <button class="buy-btn">💳 Beli Sekarang</button>
            </div>
          </div>`;
      });
    };

    // Default tampilkan kategori pertama
    renderProducts("atk");

    // Ganti kategori produk
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderProducts(btn.dataset.category);
      });
    });

    // Zoom gambar (modal)
    container.addEventListener("click", (e) => {
      if (e.target.tagName === "IMG") {
        modal.style.display = "flex";
        modalImg.src = e.target.src;
      }
    });

    if (closeBtn && modal) {
      closeBtn.addEventListener("click", () => modal.style.display = "none");
      modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.style.display = "none";
      });
    }

    // Klik tombol keranjang & beli sekarang
    container.addEventListener("click", (e) => {
      const card = e.target.closest(".product-item");
      if (!card) return;

      const category = card.dataset.category;
      const index = card.dataset.index;
      const product = productData[category][index];

      // 🛒 Tambah ke keranjang
      if (e.target.classList.contains("cart-btn")) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartBadge(); // ✅ Perbarui angka badge
        alert(`${product.name} telah dimasukkan ke keranjang!`);
      }

      // 💳 Beli Sekarang
      if (e.target.classList.contains("buy-btn")) {
        localStorage.setItem("buyNow", JSON.stringify(product));
        window.location.href = "order.html";
      }
    });
  }

  // ============================================================
  // 🍔 HAMBURGER MENU — aktif di semua halaman
  // ============================================================
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

  // ============================================================
  // 🛒 CART PAGE
  // ============================================================
  const cartContainer = document.getElementById("cart-container");
  const totalEl = document.getElementById("cart-total");
  const clearBtn = document.getElementById("clear-cart");
  const checkoutBtn = document.getElementById("checkout-btn");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // 🧩 Update badge
  function updateCartBadge() {
    const badge = document.getElementById("cart-count");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (badge) {
      if (cart.length > 0) {
        badge.textContent = cart.length;
        badge.style.display = "flex";
      } else {
        badge.style.display = "none"; // 🔥 Sembunyikan jika kosong
      }
    }
  }

  // 🧺 Render isi keranjang
  function renderCart() {
    if (!cartContainer || !totalEl) return;
    cartContainer.innerHTML = "";
    if (cart.length === 0) {
      cartContainer.innerHTML = "<p>Keranjang kosong 😢</p>";
      totalEl.textContent = "Rp 0";
      updateCartBadge();
      return;
    }

    let total = 0;
    cart.forEach((item, index) => {
      const price = parseInt(item.price.replace(/[^0-9]/g, ""));
      total += price;
      cartContainer.innerHTML += `
        <div class="cart-item">
          <img src="./images/${item.img}" alt="${item.name}">
          <div>
            <h4>${item.name}</h4>
            <p>${item.price}</p>
            <button class="remove-btn" data-index="${index}">Hapus</button>
          </div>
        </div>`;
    });

    totalEl.textContent = `Rp ${total.toLocaleString("id-ID")}`;
    updateCartBadge();
  }

  // 🗑️ Hapus item
  if (cartContainer) {
    cartContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("remove-btn")) {
        const index = e.target.dataset.index;
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
      }
    });
  }

  // 🚮 Kosongkan keranjang
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      if (confirm("Yakin ingin mengosongkan keranjang?")) {
        localStorage.removeItem("cart");
        cart = [];
        renderCart();
      }
    });
  }

  // 💳 Checkout
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      if (cart.length === 0) {
        alert("Keranjang masih kosong!");
        return;
      }
      localStorage.setItem("buyNow", JSON.stringify(cart));
      window.location.href = "order.html";
    });
  }

  // 🚀 Jalankan saat halaman dibuka
  renderCart();
  updateCartBadge();
});
