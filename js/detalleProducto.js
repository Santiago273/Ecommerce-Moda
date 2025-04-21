// js/detalleProducto.js
const params = new URLSearchParams(window.location.search);
const idProducto = params.get("id");

const producto = productos.find(p => p.id === idProducto);
const contenedor = document.getElementById("detalle-producto");

if (producto) {
  contenedor.innerHTML = `
    <h1>${producto.titulo}</h1>
    <img src="${producto.imagen}" style="max-width:300px; border-radius: 10px;" />
    <p style="font-size: 1.5rem; color: #4b33a8;">Precio: $${producto.precio}</p>
    <button style="padding: 1rem; background-color: #4b33a8; color: white; border: none; border-radius: 1rem; cursor: pointer;">
      Agregar al carrito
    </button>
  `;
} else {
  contenedor.innerHTML = "<p>Producto no encontrado</p>";
}
