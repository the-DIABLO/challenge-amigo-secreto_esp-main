// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    // Validaciones
    if (nombre === "") {
        alert("⚠️ Por favor, ingresa un nombre válido.");
        return;
    }

    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {
        alert("⚠️ Solo se permiten letras y espacios. No uses números ni caracteres especiales.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("⚠️ Este nombre ya ha sido agregado.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("⚠️ La lista está vacía. Agrega nombres antes de sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    mostrarResultado(amigoSecreto);
}

function mostrarResultado(amigo) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigo}</strong> 🎉</li>`;
}
