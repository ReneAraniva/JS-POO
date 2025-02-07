 class Producto {
    constructor(id,producto,codigo,fechaIngreso,precio) {
        this.id = id;
        this.producto = producto;
        this.codigo = codigo;
        this.fechaIngreso = fechaIngreso;
        this.precio = precio;
    }
    Registro(PrecioMas20,PrecioMenos20){
        PrecioMas20 = this.precio + (this.precio * 0.20);
        PrecioMenos20 = this.precio - (this.precio * 0.20);
        console.log(`El producto ${this.producto} con el codigo ${this.codigo} tiene un precio de ${this.precio} y precio de venta con un 20% de incremento ${PrecioMas20} y precio de venta con un 20% de descuento ${PrecioMenos20}`);
    }
 }

obj = new Producto(21,"Laptop HP","LHP-001","2021-09-01",500);
obj.Registro();