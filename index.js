
function calculo() {
    let calcular = document.getElementById("calcular").value
    let valor = parseFloat(document.getElementById("valor").value)

    //  if (calcular = 'c/m'){
    //      resultado = valor * 100
    //  }
    //  else if (calcular = 'm/c'){
    //      resultado = valor / 100
    //  }
    //  else if (calcular = 'k/l'){
    //      resultado = valor *  2.2046
    //  }
    // else{
    //      resultado = valor / 2.2046
    //  }

    switch (calcular) {
        case "cm/m":
            resultado = valor / 100
            break
        case "m/cm":
            resultado = valor * 100
            break
        case "k/l":
            resultado = valor * 2.2046
            break
        case "l/k":
            resultado = valor / 2.2046
    }


    document.getElementById("resultado").value = resultado;

}