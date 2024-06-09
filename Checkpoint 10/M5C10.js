// MENU BOTTEGA DINER


// Definición del menú
const menu = {
    primeros: [
        { nombre: "Ensalada", precio: 5 },
        { nombre: "Sopa", precio: 4 },
        { nombre: "Consome", precio: 6 },
    ],
    segundos: [
        { nombre: "Pollo", precio: 10 },
        { nombre: "Pasta", precio: 8 },
        { nombre: "Pescado", precio: 9 },
    ],
    postres: [
        { nombre: "Tarta", precio: 7 },
        { nombre: "Fruta", precio: 3 },
        { nombre: "Yogur", precio: 5 },
    ]
};

const randomComments = [
    "¡Me encanta, tienes buen paladar!",
    "¡Excelente elección, no le decepcionará!",
    "No es mi plato favorito, pero no está mal...",
    "Tengo que consultar si aún nos queda este plato...",
    "Ah, buena elección, es nuestra especialidad.",
    "Tenemos platos mejores que este..."
];

// Función para mostrar el menú

function mostrarMenu() {
    let mensaje = "Bienvenido a Bottega Diner:\n";

    mensaje += "\nPrimeros\n";

    for (let i = 0; i < menu.primeros.length; i++) {
        mensaje += `${i + 1}. ${menu.primeros[i].nombre} - €${menu.primeros[i].precio}\n`;
    }

    mensaje += "\nSegundos:\n";

    for (let i = 0; i < menu.segundos.length; i++) {
        mensaje += `${i + 1}. ${menu.segundos[i].nombre} - €${menu.segundos[i].precio}\n`;
    }

    mensaje += "\nPostres:\n";

    for (let i = 0; i < menu.postres.length; i++) {
        mensaje += `${i + 1}. ${menu.postres[i].nombre} - €${menu.postres[i].precio}\n`;
    }

    alert(mensaje);
}


// Función para obtener la elección del usuario

function obtenerEleccion(categoria) {
    let eleccion;
    while (true) {
        eleccion = prompt(`Elija una opción de ${categoria} (1, 2 o 3):`);
        if (eleccion === '1' || eleccion === '2' || eleccion === '3') {
            break;
        } else {
            alert("Opción inválida. Por favor, elija 1, 2 o 3.");
        }
    }
    return parseInt(eleccion) - 1;
}

// Función para obtener comentario aleatorio

function getRandomFoodComment() {
    const randomIndex = Math.floor(Math.random() * randomComments.length);
    return randomComments[randomIndex];
}

// Mostrar el menú al usuario
mostrarMenu();

// Obtener elección para primeros

let eleccionPrimeros = obtenerEleccion("Primeros");
let platoPrimero = menu.primeros[eleccionPrimeros];
alert(`Has elegido ${platoPrimero.nombre}. ${getRandomFoodComment()} Precio: €${platoPrimero.precio}`);

// Obtener elección para segundos

let eleccionSegundos = obtenerEleccion("Segundos");
let platoSegundo = menu.segundos[eleccionSegundos];
alert(`Has elegido ${platoSegundo.nombre}. ${getRandomFoodComment()} Precio: €${platoSegundo.precio}`);

// Obtener elección para postres

let eleccionPostres = obtenerEleccion("Postres");
let platoPostre = menu.postres[eleccionPostres];
alert(`Has elegido ${platoPostre.nombre}. ${getRandomFoodComment()} Precio: €${platoPostre.precio}`);

// Calcular y mostrar el precio total

let precioTotal = platoPrimero.precio + platoSegundo.precio + platoPostre.precio;
alert(`El precio total de tu comida es: €${precioTotal}`);









