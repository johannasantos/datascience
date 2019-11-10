/*fetch("https://raw.githubusercontent.com/sachalifs/MediaChicas/master/archivo.json")
.then(function(respuesta) {
    return respuesta.json()
})
.then(function(informacion) {
    console.log(informacion.titulo);
    console.log(informacion.descripcion);
        // Acá procesaremos la información
    })
  */  
    
    
/* fetch("https://raw.githubusercontent.com/sachalifs/MediaChicas/master/archivo3.json")
    .then(function(respuesta) {
        return respuesta.json()
    })
    .then(function(informacion) {
        console.log(informacion);
        let simpsons = informacion.nombres;
        for (let i = 0; i < simpsons.length; i++) {
            console.log(simpsons[i]+ 'simpsons');
        }
        
    })
*/

   /* fetch("https://raw.githubusercontent.com/dariosus/chicas-ds/master/obrasciudadad.json")
    .then(function(respuesta) {
         return respuesta.json()
})
    .then(function(informacion) {
    let obra100 = informacion[100];
    let obra10 = informacion[10];
    let obra104 = informacion[104];
    let obra140 = informacion[140];

    let tipoGrafico = "bar"
    let nombreGrafico = "Costo por obra"
    let nombresDatos = [obra100.nombre,obra10.nombre,obra104.nombre]
    let datos = [obra100.monto_contrato,obra10.monto_contrato,]

    let infoChart = {
        type: tipoGrafico,
        data: {
            labels: nombresDatos,
            datasets: [{
                label: nombreGrafico,
                data: datos,
                backgroundColor: ["red", "blue","pink"]
            }]


        }



    }

/** */

let datos = [Math.random(), Math.random(), Math.random(), Math.random()]

function color(numero) {
    if(numero < 0.3){
        return "green";
    } else if (numero < 0.6)
    }




















