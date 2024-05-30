# Parametre par Defaut

un objet qui contient un nom d'attribut identique à sa variable

```javascript
function afficherNom({nom, prenom}) {
  console.log(prenom + " " + nom);
}
let prenom = "Frank";
let nom = "Herbert";
afficherNom({nom, prenom}); // -> Frank Herbert
```

> Note: au lieu d'écrire const objet = { nom: nom }

# AFFECTATION DESTRUCTUREE

Il y a maintenant un raccourci pour affecter des variables à partir
d’objets ou de tableau

```javascript
const httpOptions = {timeout: 2000, isCache: true};
const {timeout: httpTimeout, isCache: httpCache} = httpOptions;
console.log(httpTimeout, httpCache);
```

en utilisant l'objet simplifié on pourrait écrire:

```javascript
const httpOptions = {timeout: 2000, isCache: true};
const {timeout, isCache} = httpOptions;
console.log(timeout, isCache);
```

ça marche aussi avec des objets imbriqués:

```javascript
const httpOptions = {timeout: 2000, cache: {age: 2}};
const {
  cache: {age},
} = httpOptions;
```

> Note: on a maintenant une variable nommée age avec la valeur 2

la même écriture est possible avec des tableaux

```javascript
const timeouts = [1000, 2000, 3000];
const [shortTimeout, mediumTimeout] = timeouts;
```

Note: on a maintenant une variable appelée shortTimeout avec la valeur 1000
et une variable nommée mediumTimeout avec la valeur 2000
Paramètres optionnels et valeur par défaut
déclarer des paramètres optionnels dès la déclaration de la fonction
function getBooks(size = 10, page = 1) {
// ...
server.get(size, page);
}
Ce mécanisme de valeur par défaut ne s’applique pas qu’aux
paramètres de fonction, mais aussi aux valeurs de variables
const { timeout = 1000 } = httpOptions;
Note: la variable timeout vaut 1000 par défaut
