nombre=prompt("ingresa tu nombre");

var preg1=prompt("¿En qué departamento se encuentra el lago Titicaca?\nA:Tacnan\nB:Puno\nC:Cusco")
if (preg1=="B"){
    preg1=1
}
else{
    preg1=0
}

var preg2=prompt("Qué sucede en el Polo Norte cuando llega la Primavera\nA:6 meses de luz \nB:6 meses de oscuridad\nC:6 meses de alternancia ")
if (preg2=="A"){
    preg2=1
}
else{
    preg2=0
}
var total=preg1+preg2
if (total>2){
document.write(nom," sabes de primavera")
}
else{
    document.write(nom," te falta")
}