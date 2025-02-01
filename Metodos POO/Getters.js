class Producto {
    constructor(nombre, precio) {
        this._nombre= nombre;
        this._precio= precio;

    }

    get nombre(){
        return this._nombre;
    }

    get precio(){
        return `$${this._precio.toflixed(2)}`;
    }
}


const item = new Producto("laptop",550.99);
console.log(item.nombre);
console.log(item.precio);
 


