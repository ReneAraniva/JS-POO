class IMC {
    constructor(peso, altura) {
        this._peso = peso;
        this._altura = altura;
    }

    CalcularIMC(){
        const imc = this._peso / Math.pow(this._altura, 2);
        return imc;
    }

    clasificacion(imc){
        if(imc < 18.5) {
            console.log("Insuficiente ponderal"); 
        } else if (imc >= 18.5 && imc <= 24.9) {
            console.log("Intervalo Normal");
        } else if (imc >= 25 && imc <= 29.9) {
            console.log("Sobrepeso");
        } else if (imc >= 30 && imc < 35) {
            console.log("Obesidad");
        } else if (imc >= 35 && imc <= 39.9) {
            console.log("Obesidad II");
        } else if (imc >= 40) {
            console.log("Obesidad III");
        } 
    }
}

const Mujer = new IMC(65, 1.75);
const imcMujer = Mujer .CalcularIMC();
console.log(`Su IMC es de: ${imcMujer}`);
Mujer.clasificacion(imcMujer);

const Hombre = new IMC(100, 1.82);
const imcHombre = Hombre.CalcularIMC();
console.log(`Su IMC es de: ${imcMujer}`);
Hombre.clasificacion(imcHombre);

