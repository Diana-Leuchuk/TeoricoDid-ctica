
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Diagramas de Actividad UML | Informática</title>

    <link rel="stylesheet" href="stylesda.css">

    <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
</head>

<body>

    <!-- MENÚ DE NAVEGACIÓN -->
    <header class="header">
        <a href="#inicio" class="logo">
            <span class="logo-icon">
                <i class="fa-solid fa-diagram-project"></i>
            </span>
            <span>UML<span class="logo-highlight">Flow</span></span>
        </a>

        <button class="menu-toggle" id="menuToggle"
                aria-label="Abrir menú" aria-expanded="false">
            <i class="fa-solid fa-bars"></i>
        </button>

        <nav class="navbar" id="navbar">
            <a href="#inicio">Inicio</a>
            <a href="#concepto">Concepto</a>
            <a href="#simbologia">Simbología</a>
            <a href="#ejemplo">Ejemplo práctico</a>
            <a href="#cierre">Conclusión</a>
        </nav>
    </header>

    <main>

        <!-- PORTADA -->
        <section class="hero" id="inicio">
            <div class="hero-content">

                <span class="eyebrow">
                    <i class="fa-solid fa-graduation-cap"></i>
                    Aprendiendo UML
                </span>

                <h1>
                    Diagramas de<br>
                    <span>Actividad UML</span>
                </h1>

                <p>
                    Representá visualmente los pasos de un proceso,
                    las decisiones que pueden surgir y el recorrido
                    que sigue una actividad desde su inicio hasta su final.
                </p>

                <div class="hero-buttons">
                    <a href="#concepto" class="btn btn-primary">
                        Comenzar a aprender
                        <i class="fa-solid fa-arrow-down"></i>
                    </a>

                    <a href="#ejemplo" class="btn btn-secondary">
                        Ver ejemplo
                    </a>
                </div>

                <div class="hero-features">
                    <div>
                        <i class="fa-solid fa-circle-check"></i>
                        <span>Conceptos básicos</span>
                    </div>

                    <div>
                        <i class="fa-solid fa-shapes"></i>
                        <span>Simbología UML</span>
                    </div>

                    <div>
                        <i class="fa-solid fa-play"></i>
                        <span>Ejemplo interactivo</span>
                    </div>
                </div>
            </div>

            <div class="hero-visual">
                <div class="visual-card">

                    <div class="visual-card-header">
                        <span class="status-dot"></span>
                        <span>Flujo de una actividad</span>
                    </div>

                    <div class="mini-diagram">
                        <div class="mini-start"></div>
                        <div class="mini-arrow"></div>
                        <div class="mini-action">Ejecutar actividad</div>
                        <div class="mini-arrow"></div>
                        <div class="mini-decision"></div>
                        <div class="mini-arrow"></div>
                        <div class="mini-end"></div>
                    </div>

                    <div class="visual-card-footer">
                        <i class="fa-solid fa-lightbulb"></i>
                        Un proceso, paso a paso
                    </div>
                </div>

                <div class="floating-icon floating-one">
                    <i class="fa-solid fa-code"></i>
                </div>

                <div class="floating-icon floating-two">
                    <i class="fa-solid fa-share-nodes"></i>
                </div>
            </div>
        </section>

        <!-- CONCEPTO -->
        <section class="section concept-section" id="concepto">

            <div class="section-heading">
                <span class="section-label">01 · CONCEPTO</span>
                <h2>¿Qué es un diagrama de actividad?</h2>
                <p>
                    Una herramienta visual que permite comprender
                    cómo se desarrolla un proceso.
                </p>
            </div>

            <div class="concept-grid">

                <div class="concept-text">
                    <p>
                        Un <strong>diagrama de actividad UML</strong>
                        es una representación gráfica que muestra
                        la secuencia de acciones de un proceso, desde
                        su punto de inicio hasta su finalización.
                    </p>

                    <p>
                        Se utiliza para describir el comportamiento
                        de un sistema, organizar tareas y representar
                        decisiones que modifican el recorrido de una actividad.
                    </p>

                    <p>
                        Las flechas indican el sentido del flujo y los
                        símbolos permiten reconocer qué sucede en cada etapa.
                    </p>

                    <div class="info-note">
                        <i class="fa-solid fa-circle-info"></i>

                        <div>
                            <strong>Idea clave</strong>
                            <p>
                                El diagrama no solo muestra qué acciones
                                existen, sino también en qué orden se realizan.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="concept-visual">

                    <div class="concept-visual-title">
                        <i class="fa-solid fa-diagram-project"></i>
                        Estructura básica
                    </div>

                    <div class="flow-example">
                        <div class="flow-node flow-start"></div>
                        <div class="flow-connector"></div>

                        <div class="flow-node flow-action">
                            Realizar una acción
                        </div>

                        <div class="flow-connector"></div>
                        <div class="flow-node flow-end"></div>

                        <span class="flow-caption">Fin del proceso</span>
                    </div>
                </div>

            </div>
        </section>

        <!-- SIMBOLOGÍA: SOLAMENTE CINCO SÍMBOLOS -->
        <section class="section symbols-section" id="simbologia">

            <div class="section-heading">
                <span class="section-label">02 · SIMBOLOGÍA</span>
                <h2>Los símbolos principales</h2>
                <p>
                    Cada figura representa un elemento del proceso.
                    Conocé los cinco símbolos incluidos en esta sección.
                </p>
            </div>

            <div class="symbols-grid">

                <!-- SÍMBOLO 01: INICIO -->
                <article class="symbol-card">

                    <div class="symbol-number">SÍMBOLO 01</div>

                    <div class="symbol-visual">
                        <div class="uml-initial"></div>
                    </div>

                    <h3>Inicio</h3>

                    <p>
                        Es un círculo relleno que indica el punto
                        donde comienza el proceso.
                    </p>

                    <span class="symbol-tag">Punto inicial</span>

                </article>

                <!-- SÍMBOLO 02: ACTIVIDAD O ACCIÓN -->
                <article class="symbol-card">

                    <div class="symbol-number">SÍMBOLO 02</div>

                    <div class="symbol-visual">
                        <div class="uml-action">
                            Realizar tarea
                        </div>
                    </div>

                    <h3>Actividad o acción</h3>

                    <p>
                        Se representa con un rectángulo de esquinas
                        redondeadas y describe una tarea que se ejecuta.
                    </p>

                    <span class="symbol-tag">Acción del proceso</span>

                </article>

                <!-- SÍMBOLO 03: DECISIÓN -->
                <article class="symbol-card">

                    <div class="symbol-number">SÍMBOLO 03</div>

                    <div class="symbol-visual">
                        <div class="uml-decision"></div>
                    </div>

                    <h3>Decisión</h3>

                    <p>
                        Se representa mediante un rombo. Permite elegir
                        un camino según una condición, por ejemplo,
                        verdadero o falso.
                    </p>

                    <span class="symbol-tag">Evaluar una condición</span>

                </article>

                <!-- SÍMBOLO 04: FLUJO DE CONTROL -->
                <article class="symbol-card">

                    <div class="symbol-number">SÍMBOLO 04</div>

                    <div class="symbol-visual">
                        <div class="uml-flow">
                            <span></span>
                            <i class="fa-solid fa-arrow-down"></i>
                        </div>
                    </div>

                    <h3>Flujo de control</h3>

                    <p>
                        Es una flecha que conecta los elementos e indica
                        el orden en el que se realizan las acciones.
                    </p>

                    <span class="symbol-tag">Dirección del proceso</span>

                </article>

                <!-- SÍMBOLO 05: FINAL -->
                <article class="symbol-card">

                    <div class="symbol-number">SÍMBOLO 05</div>

                    <div class="symbol-visual">
                        <div class="uml-final">
                            <span></span>
                        </div>
                    </div>

                    <h3>Final</h3>

                    <p>
                        Se representa con un círculo exterior y un círculo
                        interior relleno. Indica que el proceso terminó.
                    </p>

                    <span class="symbol-tag">Fin del proceso</span>

                </article>

            </div>
        </section>

        <!-- EJEMPLO PRÁCTICO -->
        <section class="section example-section" id="ejemplo">

            <div class="section-heading">
                <span class="section-label">03 · EJEMPLO PRÁCTICO</span>
                <h2>Un proceso en el fútbol</h2>

                <p>
                    Acompañá a un futbolista que se prepara para ejecutar
                    un tiro libre. Observá cómo cada acción forma parte
                    de un proceso.
                </p>
            </div>

            <div class="example-layout">

                <div class="example-info">

                    <div class="example-badge">
                        <i class="fa-solid fa-futbol"></i>
                        Caso de ejemplo
                    </div>

                    <h3>Ejecutar un tiro libre</h3>

                    <p>
                        El futbolista se prepara, observa la posición
                        de la barrera y decide si puede ejecutar el tiro.
                        Si las condiciones no son adecuadas, vuelve a
                        acomodarse antes de intentarlo.
                    </p>

                    <div class="step-counter">
                        <span id="stepNumber">Paso 1 de 6</span>

                        <div class="progress-track">
                            <div class="progress-fill" id="progressFill"></div>
                        </div>
                    </div>

                    <div class="step-description" id="stepDescription" aria-live="polite">
                        El proceso comienza cuando el futbolista se dispone
                        a ejecutar el tiro libre.
                    </div>

                    <div class="simulation-controls">

                        <button class="btn btn-secondary" id="previousStep" type="button">
                            <i class="fa-solid fa-arrow-left"></i>
                            Anterior
                        </button>

                        <button class="btn btn-primary" id="nextStep" type="button">
                            Siguiente
                            <i class="fa-solid fa-arrow-right"></i>
                        </button>

                    </div>

                    <button class="reset-button" id="resetSimulation" type="button">
                        <i class="fa-solid fa-rotate-right"></i>
                        Reiniciar simulación
                    </button>

                </div>

                <div class="diagram-panel">

                    <div class="diagram-panel-header">
                        <div>
                            <span class="panel-label">DIAGRAMA UML</span>
                            <h3>Flujo del tiro libre</h3>
                        </div>

                        <div class="zoom-controls">

                            <button id="zoomOut" type="button" aria-label="Alejar diagrama">
                                <i class="fa-solid fa-minus"></i>
                            </button>

                            <button id="zoomReset" type="button" aria-label="Restablecer zoom">
                                <i class="fa-solid fa-expand"></i>
                            </button>

                            <button id="zoomIn" type="button" aria-label="Acercar diagrama">
                                <i class="fa-solid fa-plus"></i>
                            </button>

                        </div>
                    </div>

                    <div class="diagram-viewport" id="diagramViewport">

                        <div class="activity-diagram" id="activityDiagram">

                            <div class="diagram-node start-node" data-step="0">
                                <span class="start-dot"></span>
                                <span>Inicio</span>
                            </div>

                            <div class="diagram-arrow" data-step="0">
                                <i class="fa-solid fa-arrow-down"></i>
                            </div>

                            <div class="diagram-node action-node" data-step="1">
                                Prepararse para el tiro
                            </div>

                            <div class="diagram-arrow" data-step="1">
                                <i class="fa-solid fa-arrow-down"></i>
                            </div>

                            <div class="diagram-node action-node" data-step="2">
                                Observar la barrera
                            </div>

                            <div class="diagram-arrow" data-step="2">
                                <i class="fa-solid fa-arrow-down"></i>
                            </div>

                            <div class="diagram-node decision-node" data-step="3">
                                <span>¿Está bien ubicado?</span>
                            </div>

                            <div class="decision-branches" data-step="3">

                                <div class="branch branch-no">

                                    <span class="branch-label">No</span>

                                    <div class="branch-line"></div>

                                    <div class="diagram-node action-node">
                                        Ajustar la posición
                                    </div>

                                    <i class="fa-solid fa-arrow-down branch-arrow"></i>

                                    <span class="branch-return">
                                        Volver a observar
                                    </span>

                                </div>

                                <div class="branch branch-yes">

                                    <span class="branch-label">Sí</span>

                                    <div class="branch-line"></div>

                                    <div class="diagram-node action-node">
                                        Ejecutar el tiro
                                    </div>

                                    <i class="fa-solid fa-arrow-down branch-arrow"></i>

                                    <div class="diagram-node final-node">
                                        <span></span>
                                    </div>

                                    <span class="final-caption">Fin</span>

                                </div>

                            </div>

                        </div>
                    </div>

                    <div class="diagram-legend">
                        <span><i class="legend-dot"></i> Inicio</span>
                        <span><i class="legend-action"></i> Acción</span>
                        <span><i class="legend-decision"></i> Decisión</span>
                        <span><i class="legend-final"></i> Final</span>
                    </div>

                </div>

            </div>
        </section>

        <!-- CIERRE: SIN CUESTIONARIO -->
        <section class="closing-section" id="cierre">

            <div class="closing-icon">
                <i class="fa-solid fa-lightbulb"></i>
            </div>

            <span class="section-label">PARA RECORDAR</span>

            <h2>
                Un proceso se entiende mejor cuando podemos verlo.
            </h2>

            <p>
                Los diagramas de actividad UML permiten organizar acciones,
                representar decisiones y comprender el recorrido de un sistema.
                Reconocer sus símbolos es el primer paso para crear diagramas
                claros y útiles.
            </p>

            <a href="#inicio" class="btn btn-primary">
                Volver al inicio
                <i class="fa-solid fa-arrow-up"></i>
            </a>

        </section>

    </main>

    <!-- PIE DE PÁGINA -->
    <footer class="footer">

        <a href="#inicio" class="footer-logo">
            <i class="fa-solid fa-diagram-project"></i>
            UMLFlow
        </a>

        <p>Recurso educativo sobre diagramas de actividad UML.</p>

        <a href="#inicio" class="back-to-top" aria-label="Volver arriba">
            <i class="fa-solid fa-arrow-up"></i>
        </a>

    </footer>

    <script src="script.js" defer></script>

</body>
</html>
