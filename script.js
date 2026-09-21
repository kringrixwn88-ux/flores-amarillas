// =====================================
// PÉTALOS DE FLORES
// =====================================

function crearPetalo() {

    const petalo = document.createElement("div");

    petalo.classList.add("petalo");

    const flores = [
        "🌼",
        "🌻",
        "🌸",
        "✿"
    ];

    petalo.innerHTML =
        flores[Math.floor(Math.random() * flores.length)];

    petalo.style.left =
        Math.random() * 100 + "vw";

    petalo.style.fontSize =
        (Math.random() * 15 + 15) + "px";

    const duracion =
        Math.random() * 6 + 6;

    petalo.style.animationDuration =
        duracion + "s";

    document.getElementById("petalos")
        .appendChild(petalo);

    setTimeout(() => {
        petalo.remove();
    }, duracion * 1000);
}


// Crear pétalos continuamente

setInterval(crearPetalo, 700);


// =====================================
// CORAZONES FLOTANDO
// =====================================

function crearCorazon() {

    const corazon = document.createElement("div");

    corazon.classList.add("corazon");

    corazon.innerHTML =
        Math.random() > .5 ? "♡" : "♥";

    corazon.style.left =
        Math.random() * 100 + "vw";

    const duracion =
        Math.random() * 7 + 7;

    corazon.style.animationDuration =
        duracion + "s";

    document.getElementById("corazones")
        .appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, duracion * 1000);
}


setInterval(crearCorazon, 1500);


// =====================================
// ABRIR MENSAJE FINAL
// =====================================

function abrirMensaje() {

    const mensaje =
        document.getElementById("mensajeFinal");

    mensaje.classList.add("mostrar");

    // Cambiar texto del botón

    const boton =
        document.querySelector("button");

    boton.innerHTML =
        "🌻 Te quiero mucho 💛";

    // Crear explosión de flores

    for (let i = 0; i < 15; i++) {

        setTimeout(() => {
            crearPetalo();
        }, i * 100);

    }

    // Desplazar hacia el mensaje
    setTimeout(() => {

        mensaje.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 300);
}