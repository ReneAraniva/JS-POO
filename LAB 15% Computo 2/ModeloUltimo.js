let Revision = {
    diagnostico(){
        return `El paciente: ${this.nombre} está en revisión y se le ha hecho un diagnóstico.`;
        
    }
}
let Curacion = {
    curar(){
        return `El paciente: ${this.nombre} ha sido curado y sanado.`
    }
}

let Inyeccion = {
    vacunar(){
        return `El paciente: ${this.nombre} se le a colocado una vacuna.`
    }
}

class PacienteCanino {
    constructor(nombre) {
        this.nombre = nombre
    }
}

class Consulta extends PacienteCanino {
    constructor(nombre) {
        super(nombre)
        
    }
}

Object.assign(Consulta.prototype,Revision,Curacion,Inyeccion)

const PacienteCan = new Consulta("Popys");

console.log(PacienteCan.diagnostico());
console.log(PacienteCan.vacunar());
console.log(PacienteCan.curar());


