fetch("https://raw.githubusercontent.com/dariosus/chicas-ds/master/obrasciudadad.json")
.then(function(respuesta) {
  return respuesta.json()
})
.then(function(informacion) {

  console.log(informacion);

  let cantVivienda = 0;
  let cantArq = 0;
  let cantTransp = 0;


  for (let i = 0; i < informacion.length; i++) {
    if (informacion[i].tipo == "Vivienda") {
      cantVivienda = cantVivienda + 1;
    }
    else if (informacion[i].tipo == "Arquitectura") {
      cantArq = cantArq + 1;
    }
    else if (informacion[i].tipo == "Transporte") {
      cantTransp = cantTransp + 1;
    }

    console.log("Vuelta: " + i + " - Porotos Viv: " + cantVivienda + " - Porotos Arq: " + cantArq + " - Porotos Transp: " + cantTransp)
  }

  let nombreGrafico = "Obras";

  let datos = [cantVivienda, cantArq, cantTransp];

  let tipoGrafico = "bar";

  let nombresDatos = ["Viviendas", "Arq", "Transp"];

  let infoChart = {
    type: tipoGrafico,
    data: {
        labels: nombresDatos,
        datasets: [{
            label: nombreGrafico,
            data: datos,
            backgroundColor: "pink"
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
  };


  let ctx = document.getElementById('miGraficoFinal').getContext('2d');
  let myChart = new Chart(ctx, infoChart);



})
