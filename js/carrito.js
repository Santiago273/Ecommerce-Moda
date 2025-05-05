// js/carrito.js

let productosEnCarrito = JSON.parse(localStorage.getItem("carrito")) || [];

const carritoVacioMsg     = document.querySelector(".carrito-vacio");
const contenedorProductos = document.querySelector(".carrito-productos");
const accionesCarrito     = document.querySelector(".carrito-acciones");
const btnVaciar           = document.querySelector(".carrito-acciones-vaciar");
const btnComprar          = document.querySelector(".carrito-acciones-comprar");
const totalDisplay        = document.getElementById("total");

function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(productosEnCarrito));
  renderCarrito();
}

function renderCarrito() {
  if (productosEnCarrito.length === 0) {
    carritoVacioMsg.classList.remove("disabled");
    contenedorProductos.classList.add("disabled");
    accionesCarrito.classList.add("disabled");
    return;
  }
  carritoVacioMsg.classList.add("disabled");
  contenedorProductos.classList.remove("disabled");
  accionesCarrito.classList.remove("disabled");

  contenedorProductos.innerHTML = "";
  productosEnCarrito.forEach(item => {
    const div = document.createElement("div");
    div.className = "carrito-producto";
    div.innerHTML = `
      <img class="carrito-producto-imagen" src="${item.imagen}" alt="${item.titulo}">
      <div class="carrito-producto-titulo">
        <small>Título</small><h3>${item.titulo}</h3>
      </div>
      <div class="carrito-producto-cantidad">
        <small>Cantidad</small><p>${item.cantidad}</p>
      </div>
      <div class="carrito-producto-precio">
        <small>Precio</small><p>$${item.precio}</p>
      </div>
      <div class="carrito-producto-subtotal">
        <small>Subtotal</small><p>$${item.precio * item.cantidad}</p>
      </div>
      <button class="carrito-producto-eliminar" data-id="${item.id}">
        <i class="bi bi-trash-fill"></i>
      </button>
    `;
    contenedorProductos.append(div);
  });

  document.querySelectorAll(".carrito-producto-eliminar").forEach(btn => {
    btn.addEventListener("click", e => {
      const id = e.currentTarget.dataset.id;
      productosEnCarrito = productosEnCarrito.filter(p => p.id !== id);
      guardarCarrito();
    });
  });

  const total = productosEnCarrito.reduce((sum, p) => sum + p.precio * p.cantidad, 0);
  totalDisplay.textContent = `$${total}`;
}

btnVaciar.addEventListener("click", () => {
  productosEnCarrito = [];
  guardarCarrito();
});

btnComprar.addEventListener("click", () => {
  alert("¡Gracias por tu compra!");
  productosEnCarrito = [];
  guardarCarrito();
});

document.addEventListener("DOMContentLoaded", renderCarrito);
