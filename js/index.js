



function verArticulos(codigo){
    switch (codigo) {
        case 1: 

        alert("El valor del calzado que elegiste es de $115000")
        break

        case 2: 

        alert("El valor de la remera que elegiste es de $22000")
        break

        case 3:

        alert("El valor del short que elegiste es de $27000")
        break

        case 4:

        alert("El valor de los botines que elegiste es de $108000")
        break

        case 5:

        alert("El valor de la mochila que elegiste es de $75000")
        break

        case 6:

        alert("El valor de los pantalones que elegiste es de $80000")
        break 

        default:

        alert("Selección no válida")

    }

}


function verCuotas(){
    console.log ("Podés pagar en hasta:")

    for(let i=1; i<=6; i++){
        console.log(i + " " + "cuotas sin interés")
    }

}

 
function verPrenda(){

    let verPrenda = prompt("Escribe el código de la prenda que quieres ver")

    if (verPrenda !== "" && verPrenda !== null){
        
        verArticulos(parseInt(verPrenda)) 

        verCuotas()

    } else {
        console.warn("El valor ingresado es inválido")
    }

}   