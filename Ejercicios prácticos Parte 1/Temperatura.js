class Converciones {
    constructor(temperatura, escala) {
        this.temperatura = temperatura;
        this.escala = escala.toLowerCase();       
    }

    ConvertiCelcius(){
        if(this.escala == "fahrenheit"){
            return (this.temperatura - 32) * 5/9;
    }else if (this.escala === "kelvin") {
        return this.temperatura - 273.15;
    } else{
        return console.log("escala no valida");
    }
}

ConvertirFaherheit(){
    if (this.escala === "celcius") {
        return (this.temperatura * 9/5) + 32;
    } else if (this.escala === "kelvin") {
        return (this.temperatura - 273.15) * 9/5 + 32;
    } else {
        return console.log("escala no valida");
    }
}
ConvertirKelvin(){
    if (this.escala === "celcius") {
        return this.temperatura + 273.15;
    } else if (this.escala === "fahrenheit") {
        return (this.temperatura - 32) * 5/9 + 273.
    }else{
        return console.log("escala no valida");
    }
}
}

const temperatura1 = new Converciones(100, "fahrenheit");
console.log(`La temperatura en 100° F es ${temperatura1.ConvertiCelcius()}°C`);

const temperatura2 = new Converciones(127, "celcius");
console.log(`La temperatura en 127°C es ${temperatura2.ConvertirKelvin()} k`);

const temperatura3 = new Converciones(120, "kelvin");
console.log(`La temperatura en 120 k es ${temperatura3.ConvertirFaherheit()}°F`);
