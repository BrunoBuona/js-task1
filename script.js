let miNombre = "Tobias";
let miApellido = "Perez";
let miEdad = "24 años";
let miMascota = "Nono";
let mascotaEdad = "7 años";
// console.log(miNombre);
// console.log(miApellido);
// console.log(miEdad);
// console.log(miMascota);
// console.log(mascotaEdad);

let nombreCompleto = miNombre+" "+miApellido;

let textoPresentacion = nombreCompleto+" es un tipo audaz de "+miEdad+". Tiene una mascota llamada "+miMascota+" que tiene "+mascotaEdad+"."

// Punto 9
miEdad = parseInt(prompt("¿Que edad tenes?"))
edadMascota = parseInt(prompt("¿Que edad tiene tu mascota?"))

let sumaEdades = miEdad + edadMascota;
console.log(sumaEdades)
let restaEdades = miEdad - edadMascota;
console.log(restaEdades)
let productoEdades = miEdad * edadMascota;
console.log(productoEdades)
let divisionEdades = miEdad / edadMascota;
console.log(divisionEdades)

// Punto 10
miNombre = prompt("Como te llamas?");
miApellido = prompt("Como es tu apellido?");
miEdad = prompt("Que edad tenes?");
miMascota = prompt("Como se llama tu mascota?");
mascotaEdad = prompt("Q edad tiene tu mascota?");
console.log(miNombre);
console.log(miApellido);
console.log(miEdad);
console.log(miMascota);
console.log(mascotaEdad);

nombreCompleto = miNombre+" "+miApellido;

textoPresentacion = nombreCompleto+" es un tipo audaz de "+miEdad+". Tiene una mascota llamada "+miMascota+" que tiene "+mascotaEdad+"."

sumaEdades = miEdad + edadMascota;
console.log(sumaEdades)
restaEdades = miEdad - edadMascota;
console.log(restaEdades)
productoEdades = miEdad * edadMascota;
console.log(productoEdades)
divisionEdades = miEdad / edadMascota;
console.log(divisionEdades)