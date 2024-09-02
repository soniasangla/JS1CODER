


let nombre = prompt("Cuál es tu nombre?");
let edad = parseInt(prompt("Cuántos años tienes?")); 
let usaAnteojos = confirm("Usas anteojos?");

const recomendaciones = [
    ["lejos", "Puedes hacer cristales fotocromáticos o polarizados."],
    ["intermedia", "Si usas solo para la PC, te conviene BLUE VISION."],
    ["cerca", "Si lees muchas horas por día, te conviene ANTIREFLEJO."],
];

function obtenerRecomendacion(distancia) {
    const recomendacion = recomendaciones.find(function ([key]) {
        return key === distancia;
    });
        return recomendacion ? recomendacion[1] : "Siempre te conviene el tratamiento CLEARVIEW.";
}

if (edad > 40 && edad <= 50) {
    alert("es posible que tengas presbicia, una condición que usualmente sucede después de los 40 años.");
} else if (edad > 50) {
    alert("te conviene usar un multifocal.");
}

if (!usaAnteojos) {
    alert("¡Qué buena visión tienes, ${nombre}!");
} else {
    let anteojo = prompt("Para qué distancia usas tu anteojo? (lejos, intermedia, cerca)");
    let recomendacion = obtenerRecomendacion(anteojo);
    alert("Pide tu cotizacion online," + nombre);
}





