
document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // 1. MENÚ RESPONSIVE
    // ==========================================

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Cerrar menú" : "Abrir menú"
        );

        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Abrir menú");
            menuToggle.textContent = "☰";
        });
    });


    // ==========================================
    // 2. SIMULACIÓN DEL DIAGRAMA DE ACTIVIDAD
    // ==========================================

    const runButton = document.getElementById("runExample");
    const resetButton = document.getElementById("resetExample");
    const simulationStatus =
        document.getElementById("simulationStatus");

    const processNodes = document.querySelectorAll(".process-node");
    const processArrows = document.querySelectorAll(".process-arrow");

    let simulationTimer = null;
    let simulationVersion = 0;

    function resetSimulation() {
        // Invalida cualquier simulación anterior.
        simulationVersion++;

        if (simulationTimer !== null) {
            clearTimeout(simulationTimer);
            simulationTimer = null;
        }

        processNodes.forEach(node => {
            node.classList.remove("active", "correct-path");
        });

        processArrows.forEach(arrow => {
            arrow.classList.remove("active");
        });

        runButton.disabled = false;
        runButton.innerHTML = "Simular proceso <span>▶</span>";

        simulationStatus.textContent =
            "Presioná “Simular proceso” para comenzar.";
    }

    function runSimulation() {
        resetSimulation();

        const currentVersion = simulationVersion;

        // El estudiante elige qué camino recorrer.
        const validCredentials = window.confirm(
            "SIMULACIÓN DE INICIO DE SESIÓN\n\n" +
            "¿Qué resultado querés representar?\n\n" +
            "Aceptar = SÍ, los datos son válidos.\n" +
            "Cancelar = NO, los datos son incorrectos."
        );

        const steps = validCredentials
            ? [
                {
                    node: 0,
                    arrow: null,
                    message: "INICIO: comienza la actividad."
                },
                {
                    node: 1,
                    arrow: 0,
                    message: "ACCIÓN: ingresar las credenciales."
                },
                {
                    node: 2,
                    arrow: 1,
                    message: "DECISIÓN: evaluar si los datos son válidos."
                },
                {
                    node: 4,
                    arrow: 3,
                    message: "SÍ: los datos son correctos. Se permite el acceso."
                },
                {
                    node: 5,
                    arrow: 4,
                    message: "FIN: la actividad termina correctamente."
                }
            ]
            : [
                {
                    node: 0,
                    arrow: null,
                    message: "INICIO: comienza la actividad."
                },
                {
                    node: 1,
                    arrow: 0,
                    message: "ACCIÓN: ingresar las credenciales."
                },
                {
                    node: 2,
                    arrow: 1,
                    message: "DECISIÓN: evaluar si los datos son válidos."
                },
                {
                    node: 3,
                    arrow: 2,
                    message: "NO: se muestra un mensaje de error."
                }
            ];

        runButton.disabled = true;

        let currentStep = 0;

        function showStep() {
            // Evita que una ejecución anterior siga activa.
            if (currentVersion !== simulationVersion) {
                return;
            }

            if (currentStep >= steps.length) {
                runButton.disabled = false;
                runButton.innerHTML =
                    "Volver a simular <span>↻</span>";

                simulationStatus.textContent = validCredentials
                    ? "Simulación finalizada: acceso correcto."
                    : "Simulación finalizada: credenciales incorrectas.";

                simulationTimer = null;
                return;
            }

            const step = steps[currentStep];

            processNodes.forEach(node => {
                node.classList.remove("active");
            });

            processArrows.forEach(arrow => {
                arrow.classList.remove("active");
            });

            const node = document.querySelector(
                `[data-step="${step.node}"]`
            );

            if (node) {
                node.classList.add("active");
            }

            if (step.arrow !== null) {
                const arrow = document.querySelector(
                    `[data-arrow="${step.arrow}"]`
                );

                if (arrow) {
                    arrow.classList.add("active");
                }
            }

            simulationStatus.textContent = step.message;
            currentStep++;

            simulationTimer = setTimeout(showStep, 1100);
        }

        showStep();
    }

    runButton.addEventListener("click", runSimulation);
    resetButton.addEventListener("click", resetSimulation);


    // ==========================================
    // 3. CUESTIONARIO DE INGENIERÍA DE SOFTWARE
    // ==========================================

    const questions = [
        {
            question: "¿Qué símbolo representa una decisión?",
            options: [
                "Un círculo negro",
                "Un rombo",
                "Un rectángulo"
            ],
            correct: 1,
            explanation:
                "¡Correcto! El rombo representa una decisión. " +
                "Permite seleccionar un camino según una condición."
        },
        {
            question: "¿Qué indica una flecha en el diagrama?",
            options: [
                "El nombre del sistema",
                "El final obligatorio del proceso",
                "El flujo de control entre pasos"
            ],
            correct: 2,
            explanation:
                "¡Bien! La flecha indica cómo continúa el flujo " +
                "de una actividad a otra."
        },
        {
            question:
                "Si una contraseña es incorrecta, ¿qué debería ocurrir?",
            options: [
                "Evaluar la condición y mostrar un error",
                "Permitir siempre el acceso",
                "Ignorar la condición"
            ],
            correct: 0,
            explanation:
                "Exacto. La condición permite elegir el camino " +
                "correspondiente al resultado de la validación."
        },
        {
            question:
                "¿Para qué sirve un diagrama de actividad UML?",
            options: [
                "Únicamente para decorar una página",
                "Para representar acciones y decisiones de un proceso",
                "Para almacenar contraseñas"
            ],
            correct: 1,
            explanation:
                "¡Muy bien! Permite visualizar y analizar el " +
                "comportamiento de un proceso antes de programarlo."
        }
    ];

    const questionText = document.getElementById("questionText");
    const quizOptions = document.getElementById("quizOptions");
    const quizFeedback = document.getElementById("quizFeedback");
    const quizNext = document.getElementById("quizNext");
    const questionCounter = document.getElementById("questionCounter");
    const quizProgress = document.getElementById("quizProgress");

    let questionIndex = 0;
    let score = 0;
    let answered = false;
    let quizFinished = false;

    function renderQuestion() {
        const question = questions[questionIndex];

        answered = false;
        quizFinished = false;

        questionCounter.textContent =
            `PREGUNTA ${String(questionIndex + 1).padStart(2, "0")} / ` +
            `${String(questions.length).padStart(2, "0")}`;

        quizProgress.style.width =
            `${((questionIndex + 1) / questions.length) * 100}%`;

        questionText.textContent = question.question;

        quizFeedback.textContent =
            "Seleccioná una opción para continuar.";

        quizNext.disabled = true;
        quizNext.textContent =
            questionIndex === questions.length - 1
                ? "Ver resultado →"
                : "Siguiente pregunta →";

        quizOptions.replaceChildren();

        question.options.forEach((option, index) => {
            const button = document.createElement("button");

            button.type = "button";
            button.className = "quiz-option";
            button.dataset.answer = index;

            const letter = document.createElement("span");
            letter.textContent = String.fromCharCode(65 + index);

            button.append(
                letter,
                document.createTextNode(option)
            );

            button.addEventListener("click", () => {
                checkAnswer(index);
            });

            quizOptions.appendChild(button);
        });
    }

    function checkAnswer(selectedIndex) {
        if (answered || quizFinished) {
            return;
        }

        answered = true;

        const question = questions[questionIndex];

        const buttons = quizOptions.querySelectorAll(".quiz-option");

        buttons.forEach((button, index) => {
            button.disabled = true;

            if (index === question.correct) {
                button.classList.add("correct");
            }

            if (
                index === selectedIndex &&
                selectedIndex !== question.correct
            ) {
                button.classList.add("incorrect");
            }
        });

        if (selectedIndex === question.correct) {
            score++;
        }

        quizFeedback.textContent = question.explanation;
        quizNext.disabled = false;
    }

    function showResults() {
        quizFinished = true;

        const percentage = Math.round(
            (score / questions.length) * 100
        );

        questionCounter.textContent = "DESAFÍO COMPLETADO";
        quizProgress.style.width = "100%";

        if (percentage === 100) {
            questionText.textContent = "¡Excelente trabajo!";
        } else if (percentage >= 50) {
            questionText.textContent = "¡Vas por buen camino!";
        } else {
            questionText.textContent = "¡Seguí practicando!";
        }

        quizOptions.replaceChildren();

        const result = document.createElement("p");
        result.className = "quiz-result";

        result.textContent =
            `Tu resultado: ${score} de ${questions.length} ` +
            `respuestas correctas (${percentage}%).`;

        quizOptions.appendChild(result);

        quizFeedback.textContent =
            percentage === 100
                ? "Dominás los conceptos básicos de este desafío."
                : "Revisá los símbolos y volvé a intentarlo para mejorar.";

        quizNext.disabled = false;
        quizNext.textContent = "Volver a intentarlo ↻";
    }

    function restartQuiz() {
        questionIndex = 0;
        score = 0;
        answered = false;
        quizFinished = false;

        renderQuestion();
    }

    quizNext.addEventListener("click", () => {
        if (quizFinished) {
            restartQuiz();
            return;
        }

        if (!answered) {
            return;
        }

        if (questionIndex < questions.length - 1) {
            questionIndex++;
            renderQuestion();
        } else {
            showResults();
        }
    });

    // Inicializar el cuestionario.
    renderQuestion();

});
