// js/detalleProducto.js

// Leemos carrito existente
let productosEnCarrito = JSON.parse(localStorage.getItem("carrito")) || [];

const params     = new URLSearchParams(window.location.search);
const idProducto = params.get("id");
const producto   = productos.find(p => p.id === idProducto);
const contenedor = document.getElementById("detalle-producto");

function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(productosEnCarrito));
}

function agregarDesdeDetalle() {
  const existe = productosEnCarrito.find(p => p.id === producto.id);
  if (existe) existe.cantidad++;
  else productosEnCarrito.push({ ...producto, cantidad: 1 });

  guardarCarrito();
  alert("Producto agregado al carrito");
}

if (producto) {
  contenedor.innerHTML = `
    <h1>${producto.titulo}</h1>
    <img src="${producto.imagen}" style="max-width:300px;border-radius:10px;" />
    <p style="font-size:1.5rem;color:#4b33a8;">Precio: $${producto.precio}</p>
    <button id="detalle-agregar" style="padding:1rem;background-color:#4b33a8;color:#fff;border:none;border-radius:1rem;cursor:pointer;">
      Agregar al carrito
    </button>
  `;
  document.getElementById("detalle-agregar").addEventListener("click", agregarDesdeDetalle);
} else {
  contenedor.innerHTML = "<p>Producto no encontrado</p>";
}
