// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    nombreAmigo = document.getElementById("amigo").value.trim();
    if (!nombreAmigo) {
        alert("Por favor, inserte un nombre");
        return;
    }
    else if (amigos.includes(nombreAmigo)) {
        alert('Este nombre ya se encuentra en la lista');
        return;
    }
    else {
        amigos.push(nombreAmigo);
        document.getElementById("amigo").value = "";
        actualizarListaAmigos();
        return;
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
    if (amigos.length < 2) {
        document.getElementById("resultado").innerHTML = "";
        alert("Debe haber al menos 2 amigos para realizar el sorteo");
        return
    }
    let numeroAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoAleatorio = amigos[numeroAleatorio];
    lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos = [];
    document.getElementById("resultado").innerHTML = `El amigo sorteado es ${amigoAleatorio}`;

}