function mostrarPrecio(seguro) {
    
    if  (seguro == "basico") {
        document.querySelector("body > form > div > p:nth-child(2)").style.opacity = "1"
        document.querySelector("body > form > div > p:nth-child(4)").style.opacity = "0"
        document.querySelector("body > form > div > p:nth-child(6)").style.opacity = "0"
    }
    else if  (seguro == "intermedio") {
        document.querySelector("body > form > div > p:nth-child(4)").style.opacity = "1"
        document.querySelector("body > form > div > p:nth-child(2)").style.opacity = "0"
        document.querySelector("body > form > div > p:nth-child(6)").style.opacity = "0"


    }
    else if  (seguro == "premium") {
        document.querySelector("body > form > div > p:nth-child(6)").style.opacity = "1"
        document.querySelector("body > form > div > p:nth-child(2)").style.opacity = "0"
        document.querySelector("body > form > div > p:nth-child(4)").style.opacity = "0"


    }
    else {
        console.log("No se pudo elegir un seguro");
    }
 }



// function saludo() {
//     console.log("saludo")
//     alert('Hola qué tal')
// }