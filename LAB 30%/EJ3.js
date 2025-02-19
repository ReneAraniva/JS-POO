class Inventario {
    constructor(producto, precio, cantidad) {
        this._producto = producto;
        this._precio = precio;
        this._cantidad = cantidad;
    }
    
    get producto() {
        return this._producto;
    }

    get precio() {
        return this._precio;
    }

    get cantidad() {
        return this._cantidad;
    }

    set cantidad(stock) {
        if (stock <= 0) {
            console.error("No se puede agregar una cantidad negativa o cero al stock");
            return;
        }
        this._cantidad += stock;
        console.log(`Stock actualizado: ${this._cantidad}`);
    }

    set precio(precio) {
        if (precio < 0) {
            console.error("No se puede establecer un precio negativo");
            return;
        }
        this._precio = precio;
    }

    comprar(cantidad) {
        if (cantidad <= 0) {
            console.error("No se puede comprar no hay stock o a intruducido una cantidad negativa");
            return;
        }
        if (this._cantidad < cantidad) {
            console.error("No hay suficiente stock");
            return;
        }
        this._cantidad -= cantidad;
        console.log("------------------------------------------");
        console.log("Compra realizada con éxito");
        console.log("Recibo");
        console.log(`Nombre: ${this._producto}`);
        console.log(`Precio: ${this._precio}`);
        console.log(`Cantidad restante: ${this._cantidad}`);
        console.log("------------------------------------------");
        
    }
}

const producto = new Inventario("PC-Gamer HONOR Zeus", 1000, 7);
producto.comprar(3);

producto.cantidad = 5;
producto.precio = 1200;
producto.comprar(2);

producto.precio = -900;
producto.cantidad = -3;
producto.comprar(-2);
