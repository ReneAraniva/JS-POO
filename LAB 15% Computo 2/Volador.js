const Volador = {
  volar() {
    return `${this.nombre} está volando.`;
  }
};

const Nadador = {
  nadar() {
    return `${this.nombre} está nadando.`;
  }
};

class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }
  comer() {
    return `${this.nombre} está comiendo.`;
  }
}

class Pato extends Animal {
  constructor(nombre) {
    super(nombre);
  }
}

Object.assign(Pato.prototype, Volador, Nadador);

const miPato = new Pato("Donald");

console.log(miPato.comer()); 
console.log(miPato.volar());  
console.log(miPato.nadar()); 
