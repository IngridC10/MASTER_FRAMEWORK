// alert("hola ingrid")
var nombre="victor robles";
var altura=189;


var concatenacion= nombre + " " + altura;

var datos = document.getElementById("datos");
datos.innerHTML = `
    <h1>Soy la caja de datos</h1>
    <h2>Mi nombre es: ${nombre} </h2>
    <h3> Mido: ${altura} cm </h3>
    `;

    // podemos hacer CONDICIONALES FOR EXAMPLES:
if (altura>=190){ 
    datos.innerHTML += `<h1>Eres una persona ALTA</h1>`;


}else{
    datos.innerHTML+=`<h1>Eres una persona BAJITA</h1>`;
}


for(var i =2000; i<=2020; i++){
    datos.innerHTML += "<h2>Estamos en el año: "+i;

}

function MuestraMiNombre(nombre,altura){
    var misDatos=`
    <h1>Soy la caja de datos</h1>
    <h2>Mi nombre es: ${nombre} </h2>
    <h3> Mido: ${altura} cm </h3>
    `;
    return misDatos;

}

function imprimir(){
    var datos = document.getElementById("datos");
    datos.innerHTML=MuestraMiNombre("Victor Robles", 1.89);}

imprimir();

//  example de arrays
var nombres= ['victor','antonio','joaquin'];
//  alert(nombres[1]);
document.write('<h1>Listado de nombres</h1>');
for(i = 0; i < nombres.lenght; i++){
    document.write(nombres[i]+ `<br/>`);

}