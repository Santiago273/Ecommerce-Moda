// js/main.js

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategoria   = document.querySelectorAll(".boton-categoria");
const tituloPrincipal    = document.querySelector("#titulo-principal");
let botonesAgregar       = [];
let productosEnCarrito   = JSON.parse(localStorage.getItem("carrito")) || [];

// Actualiza badge
function actualizarContador() {
  const total = productosEnCarrito.reduce((sum, p) => sum + p.cantidad, 0);
  document.querySelectorAll(".numerito").forEach(el => el.textContent = total);
}

// Guarda en localStorage y actualiza badge
function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(productosEnCarrito));
  actualizarContador();
}

// Agrega o incrementa
function agregarAlCarrito(e) {
  const id = e.currentTarget.id;
  const prod = productos.find(p => p.id === id);
  const existente = productosEnCarrito.find(p => p.id === id);

  if (existente) existente.cantidad++;
  else productosEnCarrito.push({ ...prod, cantidad: 1 });

  guardarCarrito();
}

// Vuelve a enlazar click en botones "Agregar"
function actualizacionBotonesAgregar() {
  botonesAgregar = document.querySelectorAll(".producto-agregar");
  botonesAgregar.forEach(btn => btn.addEventListener("click", agregarAlCarrito));
}

// Render de productos
function cargarProductos(lista) {
  contenedorProductos.innerHTML = "";
  lista.forEach(p => {
    const div = document.createElement("div");
    div.className = "producto";
    div.innerHTML = `
      <img class="producto-imagen" src="${p.imagen}" alt="${p.titulo}">
      <div class="producto-detalles">
        <a href="src/pages/producto.html?id=${p.id}">
          <h3 class="producto-tituloi">${p.titulo}</h3>
        </a>
        <p class="producto-precio">$${p.precio}</p>
        <button class="producto-agregar" id="${p.id}">Agregar</button>
      </div>
    `;
    contenedorProductos.append(div);
  });
  actualizacionBotonesAgregar();
}

// Filtro por categoría
botonesCategoria.forEach(boton => {
  boton.addEventListener("click", e => {
    botonesCategoria.forEach(b => b.classList.remove("active"));
    e.currentTarget.classList.add("active");
    if (e.currentTarget.id !== "todos") {
      const fil = productos.filter(p => p.categoria.id === e.currentTarget.id);
      tituloPrincipal.innerText = fil[0]?.categoria.nombre || "Productos";
      cargarProductos(fil);
    } else {
      tituloPrincipal.innerText = "Todos los productos";
      cargarProductos(productos);
    }
  });
});

// Al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  cargarProductos(productos);
  actualizarContador();
});
