const productos = [
    /*BUSOS*/
    {
        id: "abrigo-01",
        titulo: "Buzo negro con tigre",
        imagen: "./src/img/busos/buzo01.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "Busos"
        },
        precio: 5000,

    },

    {
        id: "abrigo-02",
        titulo: "Campera azul Adidas",
        imagen: "./src/img/busos/buzo02.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "Busos"
        },
        precio: 10000,

    },
    
    {
        id: "abrigo-03",
        titulo: "Buzo negro Adidas",
        imagen: "./src/img/busos/buzo03.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "Busos"
        },
        precio: 10000,

    },

    {
        id: "abrigo-04",
        titulo: "Buzo blanco New York City",
        imagen: "./src/img/busos/buzo04.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "Busos"
        },
        precio: 8000,

    },

    /*PANTALONES*/

    {
        id: "pantalon-01",
        titulo: "Pantalon negro",
        imagen: "./src/img/pantalones/pantalon01.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "Pantalones"
        },
        precio: 12000,

    },

    {
        id: "pantalon-02",
        titulo: "Pantalon de Jean",
        imagen: "./src/img/pantalones/pantalon02.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "Pantalones"
        },
        precio: 8000,

    },

    {
        id: "pantalon-03",
        titulo: "Pantalon gabardina mostaza",
        imagen: "./src/img/pantalones/pantalon03.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "Pantalones"
        },
        precio: 5000,

    },

    {
        id: "pantalon-04",
        titulo: "Pantalon de jean rotos",
        imagen: "./src/img/pantalones/pantalon04.jpg",
        categoria: {
            nombre: "APantalones",
            id: "Pantalones"
        },
        precio: 8000,

    },

    {
        id: "pantalon-05",
        titulo: "Pantalon de vestir gris",
        imagen: "./src/img/pantalones/pantalon05.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "Pantalones"
        },
        precio: 8000,

    },

    /*REMERAS*/

    {
        id: "remera-01",
        titulo: "Remera Vue",
        imagen: "./src/img/remeras/remera01.jpg",
        categoria: {
            nombre: "Remeras",
            id: "Remeras"
        },
        precio: 12000,

    },

    {
        id: "remera-02",
        titulo: "Remera Angular",
        imagen: "./src/img/remeras/remera02.jpg",
        categoria: {
            nombre: "Remeras",
            id: "Remeras"
        },
        precio: 12000,

    },

    {
        id: "remera-03",
        titulo: "Remera React",
        imagen: "./src/img/remeras/remera03.jpg",
        categoria: {
            nombre: "Remeras",
            id: "Remeras"
        },
        precio: 12000,

    },

    {
        id: "remera-04",
        titulo: "Remera Redux",
        imagen: "./src/img/remeras/remera04.jpg",
        categoria: {
            nombre: "Remeras",
            id: "Remeras"
        },
        precio: 12000,

    },

    {
        id: "remera-05",
        titulo: "Remera Node",
        imagen: "./src/img/remeras/remera05.jpg",
        categoria: {
            nombre: "Remeras",
            id: "Remeras"
        },
        precio: 12000,

    },

    {
        id: "remera-06",
        titulo: "Remera Sass",
        imagen: "./src/img/remeras/remera06.jpg",
        categoria: {
            nombre: "Remeras",
            id: "Remeras"
        },
        precio: 12000,

    },

    {
        id: "remera-07",
        titulo: "Remera HTML",
        imagen: "./src/img/remeras/remera07.jpg",
        categoria: {
            nombre: "Remeras",
            id: "Remeras"
        },
        precio: 12000,

    },

    {
        id: "remera-08",
        titulo: "Remera Gitub",
        imagen: "./src/img/remeras/remera08.jpg",
        categoria: {
            nombre: "Remeras",
            id: "Remeras"
        },
        precio: 12000,

    },

    {
        id: "remera-09",
        titulo: "Remera Bulma",
        imagen: "./src/img/remeras/remera09.jpg",
        categoria: {
            nombre: "Remeras",
            id: "Remeras"
        },
        precio: 12000,

    },

    {
        id: "remera-10",
        titulo: "Remera TypeScript",
        imagen: "./src/img/remeras/remera10.jpg",
        categoria: {
            nombre: "Remeras",
            id: "Remeras"
        },
        precio: 12000,

    },

    {
        id: "remera-11",
        titulo: "Remera Drupla",
        imagen: "./src/img/remeras/remera11.jpg",
        categoria: {
            nombre: "Remeras",
            id: "Remeras"
        },
        precio: 12000,

    },

    {
        id: "remera-12",
        titulo: "Remera JavaScript",
        imagen: "./src/img/remeras/remera12.jpg",
        categoria: {
            nombre: "Remeras",
            id: "Remeras"
        },
        precio: 12000,

    },

    {
        id: "remera-13",
        titulo: "Remera GraphQL",
        imagen: "./src/img/remeras/remera13.jpg",
        categoria: {
            nombre: "Remeras",
            id: "Remeras"
        },
        precio: 12000,

    },

    {
        id: "remera-14",
        titulo: "Remera WordPress",
        imagen: "./src/img/remeras/remera14.jpg",
        categoria: {
            nombre: "Remeras",
            id: "Remeras"
        },
        precio: 12000,

    },
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategoria = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar")

function cargarProductos(productosCategorias) {
    contenedorProductos.innerHTML="";
    productosCategorias.forEach(producto => {
        const div = document.createElement("div")
        div.classList.add("producto")
        div.innerHTML = 
        `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-tituloi">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>  
        `

        contenedorProductos.append(div)
    })

    actualizacionBotonesAgregar();
}

cargarProductos(productos);

botonesCategoria.forEach(boton =>{
    boton.addEventListener("click", (e)=>{
        botonesCategoria.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if(e.currentTarget.id != "todos"){

            const productosCategorias = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productosCategorias.categoria.nombre
            const productosElegidos = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosElegidos);
        }else{
            tituloPrincipal.innerText = "Todos los productos"
            cargarProductos(productos)
        }

    })
});

function actualizacionBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito)
    })
}

const productosEnCarrito = []

function agregarAlCarrito(e){
    const idBoton = e.currentTarget.id
    const productoAgregado = productos.find(producto => producto.id === idBoton);
    if(productosEnCarrito.some(producto => producto.id === idBoton)){
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton)
        productosEnCarrito[index].cantidad++
    }else{
        productoAgregado.cantidad = 1
        productosEnCarrito.push(productoAgregado)
    }
    
    
}