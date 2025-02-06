class Loteria {
    constructor(numero, cantidad, concursante) {
        this.numero = numero;
        this.cantidad = cantidad;
        this.concursante = concursante;
    }

    Jugar(){
        const PreciosValidos=[1,2,5,10,20];
        if (!PreciosValidos.includes(this.cantidad)) {
            console.log("El precio no es valido, debe ser 1,2,5,10 o 20");
            return;
            
        }
        if (this.numero < 0 || this.numero >99) {
            console.log("El numero no es valido,Debe ser entre 0 y 99");
            return;   
        }    
        const numeroAleatorio = Math.floor(Math.random() * 100);
      
        console.log(`El numero sorteado de ${this.concursante} es: ${this.numero}`);
        if (this.numero === numeroAleatorio) {
            console.log(`Felicidades, has ganado $${this.cantidad * 20}`);
            
        }else{
            console.log(`Lo siento, el numero sorteado fue ${numeroAleatorio}`);
        }
    }
    }

    const loteria = new Loteria(21, 20, "Manolo");
    loteria.Jugar();
