function demarrer() {

    const prenom = prompt("Entrez votre prénom :");

    if (prenom === null) {
        return;
    }

    if (prenom.trim() === "") {
        alert("Le prénom ne doit pas être vide.");
        return;
    }

    const ageSaisi = prompt("Entrez votre âge :");

    if (ageSaisi === null || ageSaisi.trim() === "") {
        alert("L'âge est obligatoire.");
        return;
    }

    const age = Number(ageSaisi);

    if (!Number.isFinite(age)) {
        alert("Veuillez saisir un âge numérique valide.");
        return;
    }

    console.log("Prénom :", prenom);
    console.log("Type du prénom :", typeof prenom);

    console.log("Âge :", age);
    console.log("Type de l'âge :", typeof age);

    alert("Bonjour " + prenom + ", vous aurez " +
        (age + 1) + " ans l'année prochaine.");

    const continuer = confirm("Souhaitez-vous continuer ?");

    console.log("Réponse :", continuer);
}


function sommeEntiers(n) {

    let somme = 0;

    for (let i = 1; i <= n; i++) {
        somme = somme + i;
    }

    return somme;
}


function nombresPairs(n) {

    let resultat = "";
    let i = 0;

    while (i <= n) {

        resultat += i + " ";

        i += 2;
    }

    return resultat;
}


function lireNombre() {

    const n = Number(document.getElementById("nombre").value);

    if (
        document.getElementById("nombre").value.trim() === "" ||
        n % 1 !== 0 ||
        n < 1 ||
        n > 100
    ) {

        document.getElementById("resultatCalcul").textContent =
            "Erreur : N doit être un entier compris entre 1 et 100.";

        return null;
    }

    return n;
}



function calculerSomme() {

    const n = lireNombre();

    if (n === null) {
        return;
    }

    document.getElementById("resultatCalcul").textContent =
        "Somme : " + sommeEntiers(n);
}



function afficherPairs() {

    const n = lireNombre();

    if (n === null) {
        return;
    }

    document.getElementById("resultatCalcul").textContent =
        "Nombres pairs : " + nombresPairs(n);
}


