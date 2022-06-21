// DESARROLLO DE UNA PLATAFORMA DE ALQUILER DE MOTOS.


// Solicitamos ciudad, cantidad de motos, cilindrada y casco extra.

var geo_loc = prompt("Ingrese la ciudad en la que desea alquilar.");
var q_bikes = prompt("Ingrese un minimo de 1 moto y un maximo de 5 de motos.");
var extra_helmet = prompt("Desea un casco extra?.");
extra_helmet = extra_helmet.toLowerCase();
var rent_time = prompt("Cuantas semanas desea alquilar?");


if (q_bikes > 5 && q_bikes < 1){
    alert("Ingrese una cantidad entre 1 y 5 motos.");
    q_bikes = prompt("Ingrese un minimo de 1 moto y un maximo de 5 de motos.");

}

if (extra_helmet === "si" ) {
    extra_helmet = 5;
}else{
    extra_helmet = 0;
}

// Calculamos el precio final del alquiler

function rented_bike_cost (q_bikes, rent_time, extra_helmet){
    const final_price = (q_bikes * 50) + (rent_time * 10) + extra_helmet
    return alert("El precio final del alquiler de "+ q_bikes + " motos en la ciudad de " + geo_loc + " por " + rent_time + " semanas es: $" + final_price);
   

}

// Asignamos los parametros a la funcion
rented_bike_cost (q_bikes, rent_time, extra_helmet);

