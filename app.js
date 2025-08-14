// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    nombreAmigo = document.getElementById("amigo").value;
    if (nombreAmigo == "") {
        alert("Por favor, inserte un nombre");
    }
    else {
        amigos.push(nombreAmigo);
        document.getElementById("amigo").value = "";
        actualizarListaAmigos();
    }
}

function actualizarListaAmigos() {
    lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        console.log(amigos[i]);
        let nuevoItem = document.createElement("li");
        nuevoItem.appendChild(document.createTextNode(amigos[i]));
        lista.appendChild(nuevoItem);
    }
}

function sortearAmigo() {
    if (amigos.length == 0) {
        document.getElementById("resultado").innerHTML = "";
        alert("No hay amigos agregados");
    }
    else {
        let numeroAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoAleatorio = amigos[numeroAleatorio];
        lista = document.getElementById("listaAmigos");
        lista.innerHTML = "";
        amigos = [];
        document.getElementById("resultado").innerHTML = `El amigo sorteado es ${amigoAleatorio}`;
    }
}