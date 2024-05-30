/**
 * OBJET SIMPLIFIE
 * -------------------------------------------------------
 */

// exemple avec 1 params
let nom = "franck";
const objet = {nom}; // cle + propriete ex: {nom: nom}
console.log(objet);
console.log(objet.nom);

// exemple avec 2 params
let prenom = "Frank";
let nom2 = "Herbert";

const Personnage = {prenom, nom2};
console.log(Personnage);

// example avec les params d'une fonction
function afficherNom({nom2, prenom}) {
  console.log(prenom + " " + nom2);
}

afficherNom({nom2, prenom});

/**
 * AFFECTATION DESTRUCTUREE
 * -------------------------------------------------------
 */

// Version JSON Object
const httpOptions = {timeout: 2000, key1: "maclé", isCache: true};

const {timeout: myTimeout, isCache: myIsCache} = httpOptions;
console.log(myTimeout, myIsCache);

// Version Tableau
const httpOptions2 = [2000, true];
const [myTimeout2, myIsCache2] = httpOptions2;
console.log(myTimeout2, myIsCache2);

// Example Meteo
const {
  city_info: {name: maVille},
  current_condition: {date: maDate},
} = toulouse;

console.log(maVille, maDate);

function getBooks(size = 10, page = 1) {
  console.log(size, page);
}
getBooks(20);

const httpOptions3 = {timeout: 1000};
const {timeout, isCache = true} = httpOptions3;
console.log(timeout, isCache);
