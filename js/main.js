// //CARGAMOS LOS PRODUCTOS
// //CREAMOS UN ARRAY CON LOS OBJETOS PRODUCTOS

// const productos = [
  
//   //cervezas
//   {
//     id: "cerveza-01",
//     titulo: "Cerveza Bira",
//     imagen: "./img/cervezas/01.jpg",
//     categoria: {
//       nombre: "cervezas",
//       id: "cervezas"
//     },
//     precio: 800
//   },
//   {
//     id: "cerveza-02",
//     titulo: "Cerveza Huerca",
//     imagen: "./img/cervezas/02.jpg",
//     categoria: {
//       nombre: "cervezas",
//       id: "cervezas"
//     },
//     precio: 900
//   },
//   {
//     id: "cerveza-03",
//     titulo: "Cerveza Corona",
//     imagen: "./img/cervezas/03.jpg",
//     categoria: {
//       nombre: "cervezas",
//       id: "cervezas"
//     },
//     precio: 900
//   },
//   {
//     id: "cerveza-04",
//     titulo: "Cerveza Budweiser",
//     imagen: "./img/cervezas/04.jpg",
//     categoria: {
//       nombre: "cervezas",
//       id: "cervezas"
//     },
//     precio: 850
//   },
//   {
//     id: "cerveza-05",
//     titulo: "Cerveza Heineken",
//     imagen: "./img/cervezas/05.jpg",
//     categoria: {
//       nombre: "cervezas",
//       id: "cervezas"
//     },
//     precio: 900
//   },

//    //vinos
//   {
//     id: "vino-01",
//     titulo: "vino Rasteau",
//     imagen: "./img/vinos/01.jpg",
//     categoria: {
//       nombre: "vinos",
//       id: "vinos"
//     },
//     precio: 3000
//   },
//   {
//     id: "vino-02",
//     titulo: "vino Corvo",
//     imagen: "./img/vinos/02.jpg",
//     categoria: {
//       nombre: "vinos",
//       id: "vinos"
//     },
//     precio: 2500
//   },
//   {
//     id: "vino-03",
//     titulo: "Vino Espirit",
//     imagen: "./img/vinos/03.jpg",
//     categoria: {
//       nombre: "vinos",
//       id: "vinos"
//     },
//     precio: 5000
//   },
//   {
//     id: "vino-04",
//     titulo: "vino Paros",
//     imagen: "./img/vinos/04.jpg",
//     categoria: {
//       nombre: "vinos",
//       id: "vinos"
//     },
//     precio: 2000
//   },
//   {
//     id: "vino-05",
//     titulo: "vino Broadleaf",
//     imagen: "./img/vinos/05.jpg",
//     categoria: {
//       nombre: "vinos",
//       id: "vinos"
//     },
//     precio: 5000
//   },
//   {
//     id: "vino-06",
//     titulo: "Vino Ferrari Maximun",
//     imagen: "./img/vinos/06.jpg",
//     categoria: {
//       nombre: "vinos",
//       id: "vinos"
//     },
//     precio: 4000
//   },
//   {
//     id: "vino-07",
//     titulo: "vino 2019",
//     imagen: "./img/vinos/07.jpg",
//     categoria: {
//       nombre: "vinos",
//       id: "vinos"
//     },
//     precio: 4600
//   },
//   {
//     id: "vino-08",
//     titulo: "vino Moda",
//     imagen: "./img/vinos/08.jpg",
//     categoria: {
//       nombre: "vinos",
//       id: "vinos"
//     },
//     precio: 3500
//   },

//    //blancas
//   {
//     id: "blanca-01",
//     titulo: "Jagermeister",
//     imagen: "./img/blancas/01.jpg",
//     categoria: {
//       nombre: "blancas",
//       id: "blancas"
//     },
//     precio: 5000
//   },
//   {
//     id: "blanca-02",
//     titulo: "Desperados",
//     imagen: "./img/blancas/02.jpg",
//     categoria: {
//       nombre: "blancas",
//       id: "blancas"
//     },
//     precio: 3000
//   },
//   {
//     id: "blanca-03",
//     titulo: "Woodys",
//     imagen: "./img/blancas/03.jpg",
//     categoria: {
//       nombre: "blancas",
//       id: "blancas"
//     },
//     precio: 4000
//   },
//   {
//     id: "blanca-04",
//     titulo: "Esbjaerg Vodka",
//     imagen: "./img/blancas/04.jpg",
//     categoria: {
//       nombre: "blancas",
//       id: "blancas"
//     },
//     precio: 5000
//   },
//   {
//     id: "blanca-05",
//     titulo: "Smirnoff",
//     imagen: "./img/blancas/05.jpg",
//     categoria: {
//       nombre: "blancas",
//       id: "blancas"
//     },
//     precio: 4000
//   },  
// ]

let productos = [];
console.log(productos);

fetch("./js/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        cargarProductos(productos);
    })

//AQUI NOS TRAEMOS TODOS LOS ELEMENTOS DEL HTML- LOS ELEMENTOS DEL DOM
const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
/*le pongo un atributo id al elemento html, y le defino id= "titulo-principal"*/
/*tituloPrincipal se convierte en un Objeto*/
const tituloPrincipal = document.querySelector("#titulo-principal");
//está bueno ver que es un objeto
console.log(typeof tituloPrincipal);
//agregar al carrito
//lo que recibe como parametro es el elemento con la class = "producto-agregar";
//let porque lo vamos a querer modificar
//con querySelectorAll puedo llamar al atributo con sintáxis css .agregar #seccion-principal
let botonesAgregar = document.querySelectorAll(".producto-agregar");
//numerito de los productos agregados al lado de carrito
const numerito = document.querySelector("#numerito");


//vamos a subir los productos al HTML desde JS

//le vamos a mandar un paramtre a cargarProductos para que solo muestre la categoria elegida (id)
function cargarProductos(productosElegidos){

  //primero vacio el html
  contenedorProductos.innerHTML = "";

  productosElegidos.forEach(producto => {
    //acá se crean y guardan los productos
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
    <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
    <div class="producto-detalles">
    <h3 class="producto-titulo">${producto.titulo}</h3>
    <p class="producto-precio">$${producto.precio}</p>
    <button class="producto-agregar" id="${producto.id}">Agregar</button> 
    </div>
    `;
    contenedorProductos.append(div);
  })
  //llamo aquí a lafuncion que actualiza los botones, una vez que ya cargaron los productos, desde JS
  actualizarBotonesAgregar();
  //para este momento, el objeto botonesAgregar ya tiene todos sus atributos y métodos
  console.log(botonesAgregar)
}

// cargarProductos(productos);

//ESTA FUNCION SOLO LE DEFINE EL BKCOLOR ACTIVE A LA CATEGORIA QUE SE ESTE HACIENDO CLICK

//metodo para recorrer al array
botonesCategorias.forEach(boton => {
  //evento que sucede al hacer click
  boton.addEventListener("click", (e)=> {
    //funcion para que sólo se active el evento en la categoria seleccionada
    botonesCategorias.forEach(boton => boton.classList.remove("active"));

    //aqui para que suceda solo en el 
    e.currentTarget.classList.add("active");

    //este if es para que cuando hago click en toos los productos, me los muestre
    if(e.currentTarget.id != "todos"){
      //SI ESTÁ EN UNA CATEGORIA
      //para que cada pagina tel como titulo su su categoría (abrigos, camisas, pantalones)
      const productosCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
      tituloPrincipal.innerText = productosCategoria.categoria.nombre;
      //ejecuto true si el id es != "todos" (el que tiene todos los productos)
      //aqui guardo el array
      const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);//que el id delobjo sea igual al boton de la categoria clickeada
      //la llamo a la funcion y le mando el nuevo argumento, que es el id
      cargarProductos(productosBoton);
    } else {
       //SI ESTÁ EN CATEGORIA "TODOS" LOS PRODUCTOS
       //ejecuto false si el id es == "todos" (el que tiene todos los productos) y carga todos los productos
       //si estamos en todos los productos, dejar el texto "Todos los productos"
       tituloPrincipal.innerText = "Todos los productos";
      //sino, me carga todos los productos
      cargarProductos(productos)
    }

  })
})

function actualizarBotonesAgregar () {
  botonesAgregar = document.querySelectorAll(".producto-agregar")

  // a partir de acá todo CARRITO
  botonesAgregar.forEach(boton => {
    boton.addEventListener("click", agregarAlCarrito);
  })
}

let productosEnCarrito;

//guardo los objetos en el storage
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS){
  productosEnCarrito = JSON.parse(productosEnCarritoLS);
  actualizarNumerito();
} else {
  productosEnCarrito = [];
}
//si lo consoleo acá, me devuelve una lista vacía
// console.log(botonesAgregar)

//primero array vacio, no hay productos agregardos al carrito
// const productosEnCarrito = [];

function agregarAlCarrito (e){
  const idBoton = e.currentTarget.id;
  //accedo por consola solo para mostrar que al hacer click en el boton, me devuelve el valor del id del objeto
  console.log(idBoton);
  const productoAgregado = productos.find(producto => producto.id === idBoton);
  //está función, al hacer click en agregar de cualquier producto, me devuelve todo el objeto de ese producto, y el id también;

  if(productosEnCarrito.some(producto => producto.id === idBoton)){
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    // console.log(index);
    //contador que va contando, cuando compran 2 abrigo-01, 2 camisa-03, todo con el mismo id. modifica el valor del atributo del objeto;
    productosEnCarrito[index].cantidad++;

  } else{
    // console.log(productoAgregado);
    //vamos guardando los objetos que el usuario quiere comprar, en un ARRAY
    //ACÁ EMPIEZA LA MÁGIA
    //agregro un nuevo atributo con el valor 1 para cada objeto, así no me agrega dos veces el mismo producto al carrito, sino que incrementa una variable, un contador;
    productoAgregado.cantidad = 1; 
    productosEnCarrito.push(productoAgregado);
    // console.log(productosEnCarrito);
    // console.log(productoAgregado);
  }

  actualizarNumerito();
  //para ver como el valor de la propiedad cantidad del objeto, poductosEnCarrito, se va incrementando, cuando le doy comprar dos veces o más al mismo producto. En realidad, modifica el atributo cantidad: 3 del objeto seleccionado
  // console.log(productosEnCarrito);

  //lo inspecciono si se cargo en el local storage en Almacenamiento de las web tools
  localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito () {
  let nuevoNumerito = productosEnCarrito.reduce((acc,producto) => acc + producto.cantidad,0);
  // console.log(numerito);
  //para que me actualice el numero del carrito a medidad que va aeligiendo productos
  numerito.innerText = nuevoNumerito;
}
  
