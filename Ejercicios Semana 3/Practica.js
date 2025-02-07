 class Registro {
    constructor(id,producto,codigo,fechaIngreso,precio) {
        this.id = id;
        this.producto = producto;
        this.codigo = codigo;
        this.fechaIngreso = fechaIngreso;
        this.precio = precio;
    }

    Producto(PrecioVenta,PrecioStok){
        console.log(`El producto ${this.producto} con el codigo ${this.codigo} tiene un precio de ${this.precio} y precio de venta ${PrecioVenta} y un precio de stok ${PrecioStok}`);
        
    }
 }

 obj = new Registro(21,"Laptop HP","LHP-001","2021-09-01",500);
 obj.Producto(500,1000);