document.addEventListener("DOMContentLoaded", () => {
  const productData = {
    atk: [
      { name: "Notebook", price: "Rp 4.500", img: "atk1.jpg" },
      { name: "Pulpen Karakter", price: "Rp 2.500", img: "atk2.jpg" },
      { name: "Tempat ATK", price: "Rp 6.500", img: "atk3.jpg" },
    ],
    aksesoris: [
      { name: "Jepit rambut", price: "Rp 14.000", img: "ak1.jpg" },
      { name: "Bando Beruang", price: "Rp 9.000", img: "ak2.jpg" },
    ],
    perlengkapan: [
      { name: "Tempat Bekal", price: "Rp 68.000", img: "pm1.jpg" },
      { name: "Lunch Box", price: "Rp 50.000", img: "pm2.jpg" },
    ],
    makeup: [
      { name: "Cushion Skintific", price: "Rp 90.000", img: "mu1.jpg" },
      { name: "Eyeliner Implora", price: "Rp 14.000", img: "mu2.jpg" },
    ],
    skincare: [
      { name: "Face Wash Kahf", price: "Rp 49.000", img: "sk1.jpg" },
      { name: "Sunscreen Azarine", price: "Rp 29.000", img: "sk2.jpg" },
    ]
  };

  const buttons = document.querySelectorAll(".prod-btn");
  const container = document.getElementById("product-container");

  if (container) {
    const renderProducts = (category) => {
      container.innerHTML = "";
      productData[category].forEach(p => {
        container.innerHTML += `
          <div class="product-item">
            <img src="images/${p.img}" alt="${p.name}">
            <h4>${p.name}</h4>
            <p>${p.price}</p>
          </div>`;
      });
    };

    renderProducts("atk");

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderProducts(btn.dataset.category);
      });
    });
  }
});
