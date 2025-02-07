class Persona {
    constructor(nombre) {
        this.nombre = nombre;
        
    }
    saludar(otronombre="amigo"){
        console.log(`Hola ${otronombre}, soy ${this.nombre}`);
        
    }
}

obj = new Persona("Pacheco");
obj.saludar();