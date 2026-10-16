
// =========================================
// MENÚ RESPONSIVE
// =========================================

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {
    menuToggle.addEventListener("click", () => {
        const menuAbierto = navbar.classList.toggle("is-open");

        menuToggle.setAttribute("aria-expanded", String(menuAbierto));
        menuToggle.setAttribute(
            "aria-label",
            menuAbierto ? "Cerrar menú" : "Abrir menú"
        );

        menuToggle.innerHTML = menuAbierto
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';
    });

    navbar.querySelectorAll("a").forEach((enlace) => {
        enlace.addEventListener("click", () => {
            navbar.classList.remove("is-open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Abrir menú");
            menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
        });
    });
}


// =========================================
// SIMULACIÓN DEL DIAGRAMA DE ACTIVIDAD
// =========================================

const pasos = [
    {
        descripcion:
            "El proceso comienza cuando el futbolista se dispone a ejecutar el tiro libre.",
        elementos: [0]
    },
    {
        descripcion:
            "El futbolista se prepara para realizar el tiro. Esta es una acción dentro del proceso.",
        elementos: [1]
    },
    {
        descripcion:
            "El futbolista observa la barrera para evaluar si puede ejecutar el tiro en las condiciones adecuadas.",
        elementos: [2]
    },
    {
        descripcion:
            "Se evalúa una condición: ¿la barrera está bien ubicada? Si la respuesta es no, el futbolista ajusta su posición. Si es sí, continúa.",
        elementos: [3]
    },
    {
        descripcion:
            "Si la posición no es adecuada, el futbolista vuelve a acomodarse y observa nuevamente la barrera antes de continuar.",
        elementos: [4]
    },
    {
        descripcion:
            "Cuando está preparado, ejecuta el tiro libre y el proceso llega a su final.",
        elementos: [5]
    }
];

let pasoActual = 0;

const stepNumber = document.getElementById("stepNumber");
const stepDescription = document.getElementById("stepDescription");
const progressFill = document.getElementById("progressFill");

const previousButton = document.getElementById("previousStep");
const nextButton = document.getElementById("nextStep");
const resetButton = document.getElementById("resetSimulation");

const elementosDiagrama = document.querySelectorAll(
    ".activity-diagram [data-step]"
);


// Actualiza la explicación y destaca el elemento correspondiente.

function mostrarPaso() {
    if (!stepNumber || !stepDescription || !progressFill) {
        return;
    }

    stepNumber.textContent = `Paso ${pasoActual + 1} de ${pasos.length}`;
    stepDescription.textContent = pasos[pasoActual].descripcion;

    const progreso = ((pasoActual + 1) / pasos.length) * 100;
    progressFill.style.width = `${progreso}%`;

    elementosDiagrama.forEach((elemento) => {
        elemento.classList.remove("is-active");
    });

    const elementosActivos = pasos[pasoActual].elementos;

    elementosActivos.forEach((numero) => {
        document
            .querySelectorAll(`.activity-diagram [data-step="${numero}"]`)
            .forEach((elemento) => {
                elemento.classList.add("is-active");
            });
    });

    if (previousButton) {
        previousButton.disabled = pasoActual === 0;
    }

    if (nextButton) {
        nextButton.disabled = pasoActual === pasos.length - 1;

        nextButton.innerHTML =
            pasoActual === pasos.length - 1
                ? 'Proceso finalizado <i class="fa-solid fa-check"></i>'
                : 'Siguiente <i class="fa-solid fa-arrow-right"></i>';
    }
}


// Avanzar un paso.

if (nextButton) {
    nextButton.addEventListener("click", () => {
        if (pasoActual < pasos.length - 1) {
            pasoActual++;
            mostrarPaso();
        }
    });
}


// Retroceder un paso.

if (previousButton) {
    previousButton.addEventListener("click", () => {
        if (pasoActual > 0) {
            pasoActual--;
            mostrarPaso();
        }
    });
}


// Reiniciar la simulación.

if (resetButton) {
    resetButton.addEventListener("click", () => {
        pasoActual = 0;
        mostrarPaso();
    });
}


// =========================================
// ZOOM DEL DIAGRAMA
// =========================================

const activityDiagram = document.getElementById("activityDiagram");
const zoomIn = document.getElementById("zoomIn");
const zoomOut = document.getElementById("zoomOut");
const zoomReset = document.getElementById("zoomReset");

let nivelZoom = 1;

const zoomMinimo = 0.65;
const zoomMaximo = 1.5;
const incrementoZoom = 0.1;

function aplicarZoom() {
    if (!activityDiagram) {
        return;
    }

    activityDiagram.style.transform = `scale(${nivelZoom})`;
}

if (zoomIn) {
    zoomIn.addEventListener("click", () => {
        nivelZoom = Math.min(
            zoomMaximo,
            Number((nivelZoom + incrementoZoom).toFixed(2))
        );

        aplicarZoom();
    });
}

if (zoomOut) {
    zoomOut.addEventListener("click", () => {
        nivelZoom = Math.max(
            zoomMinimo,
            Number((nivelZoom - incrementoZoom).toFixed(2))
        );

        aplicarZoom();
    });
}

if (zoomReset) {
    zoomReset.addEventListener("click", () => {
        nivelZoom = 1;
        aplicarZoom();
    });
}


// =========================================
// INICIALIZACIÓN
// =========================================

document.addEventListener("DOMContentLoaded", () => {
    mostrarPaso();
    aplicarZoom();
});
