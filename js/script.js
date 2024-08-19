const almacen = [
    { producto: 'arroz', precio: 5.00 },
    { producto: 'pollo', precio: 8.50 },
    { producto: 'papa', precio: 2.50 },
    { producto: 'lechuga', precio: 1.50 },
    { producto: 'cerdo', precio: 16.00 },
    { producto: 'tomate', precio: 3.20 },
    { producto: 'cebolla', precio: 2.50 },
    { producto: 'zanahoria', precio: 1.00 },
]
let carrito = []

function buscarProducto (propiedad, valor) {
    if (propiedad === 1) {
        return almacen.find(elemento => elemento.producto.toLowerCase() === valor.toLowerCase());
    } else if (propiedad === 2) {
        return almacen.find(elemento => elemento.precio === valor)
    } else {
        alert('error en la búsqueda.')
    }
}

function agregarProductoCarrito (producto) {
    carrito.push(producto);
    alert(`Se añadió el producto ${producto.producto} al carrito.`);
    mostrarCarrito();
}

function mostrarCarrito() {
    if (carrito.length == 0) {
        alert('Carrito está vacío.')
    } else {
        const productosEnCarrito = carrito.map(elemento => elemento.producto).join(", \n");
        alert(`Los productos en el carrito son: ${productosEnCarrito}`);
    }
}

function finalizarCompra() {
    const totalCuenta = carrito.reduce((sum, item) => sum + item.precio,0);
    alert(`El total de tu cuenta es: ${totalCuenta}`);
}

function atenderClient() {
    let continuarCompra = true;

    while(continuarCompra) {
        const consultaUsuario = prompt('¿Desea realizar un pedido? [S/N]').toUpperCase();
        if (consultaUsuario !== 'S') {
            break;
        }

        const tipoBusqueda = parseInt(prompt('Indique si desea realizar una búsqueda por nombre del producto [1] o por precio [2].'));
        if (tipoBusqueda !== 1 && tipoBusqueda !== 2){
            alert('Opción no válida.');
            continue;
        }

        const valor = tipoBusqueda === 1 ? prompt('Ingrese el nombre del producto:') : prompt('Ingresa el precio del producto');

        let productoEncontrado = buscarProducto(tipoBusqueda, valor);

        if (productoEncontrado) {
            alert(`Se encontró el producto ${productoEncontrado.producto} y cuesta ${productoEncontrado.precio}`);
            let comprar = prompt('¿Desea comprar el producto? [S/N]').toUpperCase();
            if(comprar === 'S') {
                agregarProductoCarrito(productoEncontrado)
            }
        } else {
            alert('Producto no encontrado.');
        }

        continuarCompra = prompt('¿Desea continuar comprando? [S/N]').toUpperCase();
    }

    if (carrito.length > 0) {
        finalizarCompra();
        alert('¡Gracias por su visita!')
    }
}

atenderClient();