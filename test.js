// OBJET SIMPLIFIE
let nom = "franck";
const objet = {nom};
console.log(objet);

function afficherNom({nom2, prenom}) {
  console.log(prenom + " " + nom2);
}

let prenom = "Frank";
let nom2 = "Herbert";
const Personnage = {prenom, nom2};
console.log(Personnage);

afficherNom({nom2, prenom});

const httpOptions = {timeout: 2000, key1: "maclé", isCache: true};

const {timeout: httpTimeout, isCache: httpCache} = httpOptions;
console.log(httpTimeout, httpCache);

const httpOptions2 = [2000, true];
const [httpTimeout2, httpCache2] = httpOptions2;
console.log(httpTimeout2, httpCache2);

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
