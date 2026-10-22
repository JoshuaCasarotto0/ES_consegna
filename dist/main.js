"use strict";
let contaInsufficienti = 0;
let contaSufficienti = 0;
let contaBuoni = 0;
let contaOttimi = 0;
function registra() {
    // Lettura degli input
    let nome = document.getElementById("nome").value.trim();
    let testo = document.getElementById("voto").value;
    let voto = Number(testo);
    let messaggio = document.getElementById("messaggio");
    if (messaggio == null) {
        return;
    }
    messaggio.textContent = "";
    // Controllo del nome
    if (nome == "") {
        messaggio.textContent = "Inserisci il nome dell'alunno";
        return;
    }
    // Controllo del voto
    if (testo == "") {
        messaggio.textContent = "Il voto deve essere un numero da 1 a 10";
        return;
    }
    if (Number.isNaN(voto)) {
        messaggio.textContent = "Il voto deve essere un numero";
        return;
    }
    if (!Number.isInteger(voto) || voto < 1 || voto > 10) {
        messaggio.textContent = "Il voto deve essere un numero intero da 1 a 10";
        return;
    }
    // Assegnazione del giudizio
    let giudizio = "";
    if (voto <= 5) {
        giudizio = "Insufficiente";
    }
    else if (voto == 6) {
        giudizio = "Sufficiente";
    }
    else if (voto == 7 || voto == 8) {
        giudizio = "Buono";
    }
    else {
        giudizio = "Ottimo";
    }
    // Modifica dell'immagine
    let immagine = document.getElementById("immagine");
    if (giudizio == "Insufficiente") {
        immagine.src = "images/rosso.svg";
    }
    else if (giudizio == "Sufficiente") {
        immagine.src = "images/giallo.svg";
    }
    else if (giudizio == "Buono") {
        immagine.src = "images/verde.svg";
    }
    else {
        immagine.src = "images/stella.svg";
    }
    // Aggiunta all'elenco
    let elenco = document.getElementById("elenco");
    if (elenco) {
        let elemento = document.createElement("li");
        elemento.textContent = nome + " - " + voto + " (" + giudizio + ")";
        elemento.className = giudizio.toLowerCase();
        elenco.appendChild(elemento);
    }
    // Aggiornamento della tabella
    if (giudizio == "Insufficiente") {
        contaInsufficienti++;
        let cella = document.getElementById("conta-insufficiente");
        if (cella) {
            cella.textContent = String(contaInsufficienti);
        }
    }
    else if (giudizio == "Sufficiente") {
        contaSufficienti++;
        let cella = document.getElementById("conta-sufficiente");
        if (cella) {
            cella.textContent = String(contaSufficienti);
        }
    }
    else if (giudizio == "Buono") {
        contaBuoni++;
        let cella = document.getElementById("conta-buono");
        if (cella) {
            cella.textContent = String(contaBuoni);
        }
    }
    else {
        contaOttimi++;
        let cella = document.getElementById("conta-ottimo");
        if (cella) {
            cella.textContent = String(contaOttimi);
        }
    }
}
//# sourceMappingURL=main.js.map