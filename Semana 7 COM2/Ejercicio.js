class Empleado {
    constructor(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }

    mostrarInfo() {
        console.log(`Nombre: ${this.nombre}, Salario: ${this.salario}`);
    }
}

class Contabilidad extends Empleado {
    constructor(nombre, salario) {
        super(nombre, salario);
    }

    calcularSueldoNeto() {
        const seguro = this.salario * 0.03;
        const renta = this.salario * 0.075;
        const sueldoNeto = this.salario - seguro - renta;
        return sueldoNeto;
    }

    mostrarSueldoNeto() {
        const sueldoNeto = this.calcularSueldoNeto();
        console.log(`Sueldo Neto a Devengar para ${this.nombre}: ${sueldoNeto}`);
    }
}

const empleado1 = new Contabilidad('Juan', 1000);
empleado1.mostrarInfo();
empleado1.mostrarSueldoNeto();