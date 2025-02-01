class Automovil {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.encendido = false;
        
    }

    encender(){
        this.encendido = true;
        console.log(`El automovil ${this.modelo} ${this.marca} esta encendido`);
        
    }
    apagar(){
        this.encendido =false;
        console.log(`El automovil ${this.modelo} ${this.marca} esta apagado`);
    }
}

const auto = new Automovil('Toyota', 'Corolla');
auto.encender();
auto.apagar();

