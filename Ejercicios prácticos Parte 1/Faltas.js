class Sanciones {
    constructor(nombre) {
        this.nombre = nombre;
        this.infraccion = [];
    }

    faltas(infraccion) {
        const notas = {
            "Llegada tardia": 1,
            "Caminar por los pasillos en horas de clase": 3,
            "No andar vestimenta apropiada": 2,
            "No hacer uso adecuado de las instalaciones": 5
        };
        this.infraccion.push({ descripcion: infraccion, valor: notas[infraccion] });
    }

    imprimirTotal() {
        if (this.infraccion.length > 0) {

            let total = 0;
            console.log(`Infracciones de ${this.nombre}:`);

            for (let i = 0; i < this.infraccion.length; i++) {
                total += this.infraccion[i].valor;
                console.log(`${this.infraccion[i].descripcion}: $${this.infraccion[i].valor}`);
            }

            console.log(`El total de infracciones de ${this.nombre} es: $${total}`);

        } else {
            console.log("No hay infracciones");
        }
    }
}

const estudiante1 = new Sanciones("Carlos");
estudiante1.faltas("Llegada tardia");
estudiante1.faltas("Caminar por los pasillos en horas de clase");
estudiante1.imprimirTotal();