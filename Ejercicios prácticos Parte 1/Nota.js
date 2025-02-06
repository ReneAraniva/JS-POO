class RegistrosNotas{
    constructor(titulo, detalle) {
        this.titulo = titulo;
        this.detalle = detalle;
    }
    contador(){
    return this.detalle.trim().split(/\s+/).length;
    }

    ImprimirNota(){
        console.log(`Titulo:${this.titulo}`);
        console.log(`Detalle:${this.detalle}`);
        console.log(`Cantidad de palabras en el detalle:${this.contador()}`);
    }
}

const nota1 = new RegistrosNotas("Tarea","Hay que estudiar para poder dormir")
nota1.ImprimirNota()