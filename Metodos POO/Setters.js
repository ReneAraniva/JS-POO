class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this._edad = edad; 
    }

    get edad() {
        return this._edad; 
    }

    set edad(nuevaEdad) {
        if (nuevaEdad > 0) {
            this._edad = nuevaEdad; 
        } else {
            console.log("La edad debe ser mayor que 0.");
        }
    }
}

const Persona1 = new Persona("Carlos", 25);
Persona1.edad = 30;
console.log(Persona1.edad);
Persona1.edad = -5;
