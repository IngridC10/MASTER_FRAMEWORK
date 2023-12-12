
var ingrid=18;
var harol="hola soy harold"
console.log(ingrid,harol)
document.write(`<h1>tiene`+ingrid+ `años</h1>`)

var nombre="ingrid"
var altura=1.89

// var datos=document.getElementById("datos");
datos.innerHTML = `
    <h3> Mido: ${altura} cm </h3>
    `;

    if (altura>=190){ 
        datos.innerHTML += `<h1>Eres una persona ALTA</h1>`;
    
    
    }else{
        datos.innerHTML+=`<h1>Eres una persona BAJITA</h1>`;
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



nombres.forEach((nombre) => {
    document.write(nombre + `<br/>`);
});

// objeto jason

var coche={
    modelo: 'Mercedes Clase A',
    maxima:500,
    antiguedad:2020,
    mostrarDatos(){
        console.log(this.modelo,this.maxima,this.antiguedad)

    },
    propiedad1:"valor aleatorio"
};
document.write("<h1>"+coche.antiguedad+"</h1>");
coche.mostrarDatos();
console.log(coche)

// promesas

var saludar= new Promise((resolve,reject) => {
    setTimeout(() => {
      let saludo="hola muy buenaas a todos";
      if(saludo){
        resolve(saludo);

      }else{
        reject('No hay saludo disponible');

      }
    
    
    },20000);
        

});

saludar.then(resultado => {
    alert(resultado);
})
.catch(error => {
    alert(error);

})