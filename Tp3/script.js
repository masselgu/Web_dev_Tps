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


const titre = document.getElementById("titre");

const section = document.getElementById("sectionChapitre");

const paragraphes = section.getElementsByTagName("p");

const chapitres = document.getElementsByClassName("chapitre");

const chapitreImportant =
    document.querySelector(".chapitre.important");

const tousLesChapitres =
    document.querySelectorAll("p.chapitre");

console.log("Nombre de paragraphes sélectionnés :",
    tousLesChapitres.length);

document.getElementById("btnPresentation")
    .addEventListener("click", function() {

        titre.textContent = "JavaScript : une page interactive";

        for (let i = 0; i < chapitres.length; i++) {

            chapitres[i].style.color = "blue";
        }

        chapitreImportant.style.fontWeight = "bold";

        this.textContent = "Présentation modifiée";

    });


function mettreEnEvidence(champ) {

    champ.style.backgroundColor = "lightyellow";
}


function retablirStyle(champ) {

    champ.style.backgroundColor = "";
}


function afficherSaisie(champ) {

    document.getElementById("apercu").textContent =
        champ.value;
}


function afficherRouge(element) {

    element.style.color = "red";
}


function retablirCouleur(element) {

    element.style.color = "";
}


document.getElementById("btnSelection")
    .addEventListener("click", function() {

        const champ = document.getElementById("prenom");

        champ.focus();

        champ.select();

    });



const formulaire = document.forms["inscription"];

const champNom = formulaire.elements["nom"];

formulaire.addEventListener("submit", function(event) {

    event.preventDefault();

    const nom = champNom.value.trim();

    const profession = formulaire.elements["profession"].value;

    const sexeSelectionne =
        formulaire.querySelector('input[name="sexe"]:checked');

    const langues =
        formulaire.querySelectorAll('input[name="langue"]');

    if (nom.length < 3) {

        document.getElementById("message").textContent =
            "Erreur : le nom doit contenir au moins 3 caractères.";

        champNom.focus();

        return;
    }

    if (profession === "") {

        document.getElementById("message").textContent =
            "Erreur : veuillez choisir une profession.";

        return;
    }

    if (sexeSelectionne === null) {

        document.getElementById("message").textContent =
            "Erreur : veuillez sélectionner un sexe.";

        return;
    }

    const languesChoisies = [];

    for (let i = 0; i < langues.length; i++) {

        if (langues[i].checked) {

            languesChoisies.push(langues[i].value);
        }
    }


    if (languesChoisies.length === 0) {

        document.getElementById("message").textContent =
            "Erreur : veuillez choisir au moins une langue.";

        return;
    }

    const inscription = {

        nom: nom,

        profession: profession,

        sexe: sexeSelectionne.value,

        langues: languesChoisies.join(", "),

        presenter: function() {

            return "Nom : " + this.nom +
                "\nProfession : " + this.profession +
                "\nSexe : " + this.sexe +
                "\nLangues : " + this.langues;
        }
    };

    document.getElementById("message").textContent =
        "Inscription réussie !";

    document.getElementById("recapitulatif").textContent =
        inscription.presenter();

});

formulaire.addEventListener("reset", function() {

    document.getElementById("message").textContent = "";

    document.getElementById("recapitulatif").textContent = "";

});
