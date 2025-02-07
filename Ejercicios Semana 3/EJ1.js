class Ejercicio {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    saludo(edad){ 
        console.log(`Hola, mi nombre es ${this.nombre} tengo ${edad} años`);
    }
}
obj = new Ejercicio("Juan","Merlos");
obj.saludo(28);