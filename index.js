function _id(ident){
    return document.getElementById(ident);
}

function calculaHora(){
    let entradaHora = _id("inputTime").value;
    let entradaTipus = _id("tipusTime").value;
    
    let hora = parseInt(entradaHora.split(":")[0]);
    let minuts = parseInt(entradaHora.split(":")[1]);

    let resultat;

    if (entradaTipus == "m"){
        resultat = hora*60+minuts;
        resultat += " minuts";
    } else{
        resultat = (hora*60+minuts)*60;
        resultat += " segons";
    }

    //pintamos el resultado
    _id("resultatTime").innerHTML = resultat;
}

function calculaCapital(){
    let capitalInicial = parseFloat(_id("capitalInicial").value);
    let temps = parseInt(_id("temps").value);
    let tipus = parseInt(_id("tipus").value);

    let resultat = capitalInicial;
    for (let i = 0; i < temps; i++){
        resultat += resultat * (tipus/100);
    }
    
    //pintamos el resultado
    _id("capitalFinal").innerHTML = resultat.toFixed(2) + " €";
}

function canviaEstil(tipus){
    let colorFons = "";
    let colorBorder = "";
    if (tipus == "random"){
        let red = Math.floor(Math.random() * 255);
        let green = Math.floor(Math.random() * 255);
        let blue = Math.floor(Math.random() * 255);
        colorFons = "rgb(" + red + "," + green + "," + blue + ")";
        colorBorder = "rgb(" + green + "," + blue + "," + red + ")";
    } else{
        colorFons = "white";
        colorBorder = "black";
    }

    let main = _id("principal");
    main.style.backgroundColor = colorFons;
    main.style.borderColor = colorBorder;
}