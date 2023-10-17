function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Función para cambiar el color de fondo al azar
function changeBackgroundColor(event) {
    if (event.target.classList.contains("celda")) {
        const celda = event.target;
        const colorOriginal = "rgb(66, 66, 66)"; // Color de fondo original
        const colorAleatorio = getRandomColor(); // Nuevo color aleatorio

        // Cambia el color al azar
        celda.style.backgroundColor = colorAleatorio;

        // Restaura el color original después de 1 segundo
        setTimeout(() => {
            celda.style.backgroundColor = colorOriginal;
        }, 1000);
    }
}

// Obtén la referencia al elemento <div> que simulará la tabla
let tablaBody = document.getElementById("principal");

// Bucle externo para crear las filas (div.fila)
for (let i = 0; i < 50; i++) {
    let fila = document.createElement("div");
    fila.classList.add("fila");

    // Bucle interno para crear las celdas (div.celda) en cada fila
    for (let j = 0; j < 50; j++) {
        let celda = document.createElement("div");
        //celda.addEventListener("hover",cambiarColor);
        celda.classList.add("celda");
        fila.appendChild(celda);
    }

    // Agrega la fila a la tabla (div#tabla-body)
    tablaBody.appendChild(fila);
}

tablaBody.addEventListener("mouseover", changeBackgroundColor);