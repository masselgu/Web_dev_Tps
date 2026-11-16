# TP 3 – Programmation JavaScript et manipulation du DOM

**Module :** Développement Web 1  
**Filière :** 1ère année cycle ingénieur – Génie Informatique (Cyber Sécurité, Cyber Défense et Système d'information)  
**Année universitaire :** 2026-2027  
**Auteur :** Mohamed Amine Asselgui

## Description

Ce projet regroupe les cinq exercices du TP 3. Il sert à s'entraîner à écrire des fonctions JavaScript, lire et vérifier des données saisies, sélectionner et modifier des éléments HTML, réagir aux événements de l'utilisateur, utiliser les objets avec `this` et créer des éléments dans une page.

## Structure du projet

Ce TP se trouve dans le dossier `Tp3` du dépôt `Web_dev_Tps` :

```
Web_dev_Tps/
└── Tp3/
    ├── index.html    # structure de la page (les 5 exercices)
    ├── script.js     # code JavaScript, relié avec <script src="script.js" defer>
    └── README.md
```

## Lancer le projet

1. Récupérer le dépôt avec `git clone https://github.com/masselgu/Web_dev_Tps.git`, puis aller dans le dossier `Tp3`.
2. Ouvrir `index.html` dans un navigateur (Firefox, Chrome…).
3. Ouvrir la console avec `F12` pour voir les affichages demandés (exercices 1 et 3).

Aucune installation n'est nécessaire : il n'y a que du HTML et du JavaScript.

## Contenu des exercices

### Exercice 1 – Variables, conversions et boîtes de dialogue
- Bouton « Commencer » qui appelle `demarrer()`.
- `prompt()` pour le prénom puis l'âge, avec arrêt si l'utilisateur clique sur Annuler.
- Refus d'une saisie vide ou non numérique, conversion avec `Number()`.
- Affichage dans la console du prénom, de l'âge et de leurs types (`typeof`).
- `alert()` avec le message « Bonjour Sara, vous aurez 21 ans l'année prochaine. », puis `confirm()` pour continuer.

### Exercice 2 – Conditions, boucles et fonctions
- Section « Outils de calcul » : champ pour un entier N, boutons « Calculer la somme » et « Afficher les nombres pairs », zone de résultat.
- `sommeEntiers(n)` : somme de 1 à n avec une boucle `for`.
- `nombresPairs(n)` : nombres pairs de 0 à n avec une boucle `while`.
- Vérification que N est un entier entre 1 et 100, sinon message d'erreur.
- Exemple pour N = 6 : `Somme : 21` et `Nombres pairs : 0 2 4 6`.

### Exercice 3 – Sélection et manipulation des éléments
- Sélection avec `getElementById()`, `getElementsByTagName()`, `getElementsByClassName()`, `querySelector()` et `querySelectorAll()`.
- Affichage du nombre de paragraphes dans la console.
- Au clic sur « Modifier la présentation » : nouveau titre, chapitres en bleu (boucle), chapitre important en gras, texte du bouton changé en « Présentation modifiée ».

### Exercice 4 – Événements, propriétés, méthodes et `this`
- `mettreEnEvidence(champ)` et `retablirStyle(champ)` : fond jaune clair au focus, style supprimé quand on quitte le champ.
- `afficherSaisie(champ)` : le prénom s'affiche en temps réel dans `apercu` (avec `textContent`).
- Survol du texte : affichage en rouge puis retour à la couleur initiale.
- `addEventListener()` sur « Sélectionner le texte » pour appeler `focus()` et `select()` sur le champ.

### Exercice 5 – Formulaire et objet JavaScript
- Formulaire d'inscription (`id="formInscription"`, `name="inscription"`) avec nom, profession (liste), sexe (boutons radio), langues (cases à cocher), boutons Inscrire et Effacer, zone de message et zone de récapitulatif.
- Accès au formulaire avec `document.forms["inscription"]` et au champ avec `formulaire.elements["nom"]`.
- Événement `submit` : `event.preventDefault()`, puis validation en JavaScript (nom d'au moins 3 caractères après `trim()`, profession choisie, sexe sélectionné, au moins une langue). La première erreur trouvée est affichée, et le curseur est placé dans le champ nom si celui-ci est incorrect.
- Si tout est valide : création d'un objet `inscription` avec `nom`, `profession`, `sexe`, `langues` et une méthode `presenter()` qui utilise `this`, puis affichage du résultat dans la page.
- Événement `reset` : les messages et le récapitulatif sont effacés et le formulaire revient à ses valeurs initiales.

Exemple de récapitulatif :

```
Nom : Sara
Profession : Ingénieur
Sexe : F
Langues : Arabe, Français
```

## Réponses aux questions du TP

- **Que représente `this` dans `onfocus="mettreEnEvidence(this)"` ?**  
  `this` représente l'élément HTML sur lequel l'événement a lieu, ici le champ `<input id="prenom">`. La fonction reçoit donc directement ce champ en paramètre (`champ`).

- **Que représente `this` dans `presenter()` quand elle est appelée par `inscription.presenter()` ?**  
  `this` représente l'objet qui appelle la méthode, c'est-à-dire l'objet `inscription`. C'est pour cela que `this.nom`, `this.profession`, etc. donnent les propriétés de cet objet.

## Dépôt

Code source : <https://github.com/masselgu/Web_dev_Tps/tree/main/Tp3>