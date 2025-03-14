const Volador = {
    volar() {
        return `${this.nombre} está volando.`;
    }
};

const Invisible = {
    serInvisible() {
        return `${this.nombre} se ha vuelto invisible.`;
    }
};

const SuperFuerza = {
    usarSuperFuerza() {
        return `${this.nombre} está usando superfuerza.`;
    }
};

class Superheroe {
    constructor(nombre) {
        this.nombre = nombre;
    }
    presentarse() {
        return `¡Hola! Soy ${this.nombre}, un superhéroe.`;
    }
}

class SuperheroePoderoso extends Superheroe {
    constructor(nombre) {
        super(nombre);
    }
}

Object.assign(SuperheroePoderoso.prototype, Volador, Invisible, SuperFuerza);

const miSuperheroe = new SuperheroePoderoso("Superman");

console.log(miSuperheroe.presentarse());
console.log(miSuperheroe.volar());       
console.log(miSuperheroe.serInvisible()); 
console.log(miSuperheroe.usarSuperFuerza());
