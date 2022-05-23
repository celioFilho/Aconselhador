function traduzirTexto() {
    const textoParaTraduzir = getTextoParaTraduzir();
    const url = `https://api.funtranslations.com/translate/minion.json?text=${textoParaTraduzir}`;
    fetch(url).then(response => response.json())
        .then(json => setTextoTraduzido(json.contents.translated));
}

function getTextoParaTraduzir() {
    return document.getElementById("texto-traducao").value;
}

function setTextoTraduzido(textoTraduzido) {
    document.getElementById("texto-traduzido").innerText = textoTraduzido; 
}