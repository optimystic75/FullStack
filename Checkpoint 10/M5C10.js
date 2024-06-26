const menu = {
    desayuno: {
        primero: [
            { nombre: "Huevos Revueltos", precio: 5 },
            { nombre: "Bacon", precio: 6.50},
            { nombre: "Salchichas", precio: 7.25 }
        ],
        segundo: [
            { nombre: "Tostadas", precio: 3.25 },
            { nombre: "Croissant", precio: 4.50 },
            { nombre: "Bagels", precio: 4.50 }
        ],
        postre: [
            { nombre: "Cafe o Té", precio: 2.75 },
            { nombre: "Zumo", precio: 3.25 },
            { nombre: "Batido", precio: 4 }
        ]
    },
    comida: {
        primero: [
            { nombre: "Ensalada César", precio: 5.75 },
            { nombre: "Sopa de Tomate", precio: 4.50 },
            { nombre: "Crema de Verdura", precio: 4.50 }
        ],
        segundo: [
            { nombre: "Pasta Alfredo", precio: 10 },
            { nombre: "Lasagna Vegetal", precio: 7.50 },
            { nombre: "Pollo al Horno", precio: 8.25 }
        ],
        postre: [
            { nombre: "Tarta de Chocolate", precio: 5.25 },
            { nombre: "Hojaldre con Crema", precio: 3.25 },
            { nombre: "Panna Cotta", precio: 7.50 }
        ]
    },
    cena: {
        primero: [
            { nombre: "Consome de Verduras", precio: 4.75 },
            { nombre: "Esparragos Verdes", precio: 5.50 },
            { nombre: "Ensalada Nicoise", precio: 6 }
        ],
        segundo: [
            { nombre: "Pescado al Papillote", precio: 9.25 },
            { nombre: "Calamares en su Tinta", precio: 7.50 },
            { nombre: "Risotto de Champiñones", precio: 7.50 }
        ],
        postre: [
            { nombre: "Fruta Fresca", precio: 2.75 },
            { nombre: "Yogurt", precio: 1.25 },
            { nombre: "Creme Bruleé", precio: 4.50 }
        ]
    }
};

const randomComments = [
    "¡Me encanta, tienes buen paladar!",
    "¡Excelente elección, no le decepcionará!",
    "No es mi plato favorito, pero no está mal...",
    "Tengo que consultar si aún nos queda este plato...",
    "Ah, buena elección, es nuestra especialidad.",
    "Tenemos platos mejores que este..."
];

function mostrarMenu(categoria) {
    let mensaje = `¡Bienvenido a Bottega Diner!\n\nMenú de ${categoria.toUpperCase()}:\n`;

    for (const tipo in menu[categoria]) {
        mensaje += `\n${tipo.toUpperCase()}:\n`;
        for (let i = 0; i < menu[categoria][tipo].length; i++) {
            mensaje += `${i + 1}. ${menu[categoria][tipo][i].nombre} - €${menu[categoria][tipo][i].precio}\n`;
        }
    }

    alert(mensaje);
}

function obtenerEleccion(categoria, tipo) {
    let eleccion;
    let platos = menu[categoria][tipo];
    let mensaje = `Elija una opción de ${tipo} en ${categoria}:\n`;

    for (let i = 0; i < platos.length; i++) {
        mensaje += `${i + 1}. ${platos[i].nombre} - €${platos[i].precio}\n`;
    }

    while (true) {
        eleccion = prompt(mensaje);
        if (eleccion === '1' || eleccion === '2' || eleccion === '3') {
            break;
        } else {
            alert("Opción inválida. Por favor, elija 1, 2 o 3.");
        }
    }

    return parseInt(eleccion) - 1;
}

function getRandomFoodComment() {
    const randomIndex = Math.floor(Math.random() * randomComments.length);
    return randomComments[randomIndex];
}

function obtenerMenuPorHora() {
    while (true) {
        let hora = prompt("Por favor, introduzca la hora actual (0-23):");
        hora = parseInt(hora);

        if (isNaN(hora) || hora < 0 || hora > 23) {
            alert("Hora inválida. Por favor, introduzca una hora entre 0 y 23.");
        } else {
            if (hora >= 6 && hora < 12) {
                return "desayuno";
            } else if (hora >= 12 && hora < 18) {
                return "comida";
            } else if (hora >= 18 && hora < 23) {
                return "cena";
            } else {
                alert("Lo siento, nuestra cocina está cerrada en este momento.");
                return null;
            }
        }
    }
}

let categoria = obtenerMenuPorHora();

if (categoria) {
    mostrarMenu(categoria);

    let eleccionPrimero = obtenerEleccion(categoria, "primero");
    let platoPrimero = menu[categoria].primero[eleccionPrimero];
    let nombrePrimero = platoPrimero.nombre;
    let precioPrimero = platoPrimero.precio;
    alert(`Has elegido ${nombrePrimero}. ${getRandomFoodComment()} Precio: €${precioPrimero}`);

    let eleccionSegundo = obtenerEleccion(categoria, "segundo");
    let platoSegundo = menu[categoria].segundo[eleccionSegundo];
    let nombreSegundo = platoSegundo.nombre;
    let precioSegundo = platoSegundo.precio;
    alert(`Has elegido ${nombreSegundo}. ${getRandomFoodComment()} Precio: €${precioSegundo}`);

    let eleccionPostre = obtenerEleccion(categoria, "postre");
    let platoPostre = menu[categoria].postre[eleccionPostre];
    let nombrePostre = platoPostre.nombre;
    let precioPostre = platoPostre.precio;
    alert(`Has elegido ${nombrePostre}. ${getRandomFoodComment()} Precio: €${precioPostre}`);

    let precioTotal = precioPrimero + precioSegundo + precioPostre;
    alert(`TU FACTURA:\n\n* Primero: ${nombrePrimero} - €${precioPrimero}\n* Segundo: ${nombreSegundo} - €${precioSegundo}\n* Postre: ${nombrePostre} - €${precioPostre}\n\nTOTAL: €${precioTotal}`);
}








