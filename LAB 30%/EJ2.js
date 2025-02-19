class DetectarAños {
    constructor(nombre, añoNacimiento) {
        this._nombre = nombre;
        this.añoNacimiento = añoNacimiento; 
    }

    get nombre() {
        return this._nombre;
    }

    get añoNacimiento() {
        return this._añoNacimiento;
    }

    set añoNacimiento(Nacimiento) {
    const fechaNac = new Date(Nacimiento);

    if (fechaNac.toString() === "Invalid Date") {
        console.error("Fecha de nacimiento inválida. Use el formato 'YYYY-MM-DD'.");  
    }
    this._añoNacimiento = fechaNac;
    }

    calcularEdad() {
        const hoy = new Date();
        let edad = hoy.getFullYear() - this._añoNacimiento.getFullYear();
        
        if (hoy.getDate() < this._añoNacimiento.getDate()) {
            edad--;
        }
        return edad;
    }
    imprimirEdad() {
        console.log(`Nombre: ${persona.nombre}`);
        console.log(`Fecha de Nacimiento: ${this.añoNacimiento.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit' })}`);
        console.log(`Edad: ${persona.calcularEdad()} años.`);
    }
}
const persona = new DetectarAños("René", "2004-10-22");
persona.imprimirEdad();