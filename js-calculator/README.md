# JS-Calculator

---

# 1 : Ma calculatrice doit contenir un élément cliquable contenant un = (signe égal) avec un id="equals" correspondant.

---

# 2 : Ma calculatrice doit contenir 10 éléments cliquables contenant chacun un chiffre de 0 à 9, avec les ID correspondants suivants : id="zéro", id="un", id="deux", id="trois", id="quatre", id="cinq", id="six", id="sept", id="huit" et id="neuf".

---

# 3 : Ma calculatrice doit contenir 4 éléments cliquables contenant chacun l'un des 4 opérateurs mathématiques primaires avec les ID correspondants suivants : id="add", id="subtract", id="multiply", id="divide".

---

# 4 : Ma calculatrice devrait contenir un élément cliquable contenant un symbole . (point décimal) avec un id="decimal" correspondant.

---

# 5 : Ma calculatrice devrait contenir un élément cliquable avec un id="clear".

---

# 6 : Ma calculatrice devrait contenir un élément pour afficher les valeurs avec un id="display" correspondant.

---

# 7 : A tout moment, appuyer sur le bouton clear efface les valeurs d'entrée et de sortie, et ramène la calculatrice à son état initialisé ; 0 devrait être affiché dans l'élément avec l'id="display".

---

# 8 : Lorsque je saisis des nombres, je devrais être capable de voir ma saisie dans l'élément avec l'id de display.

---

## 9 : Dans n'importe quel ordre, je devrais pouvoir ajouter, soustraire, multiplier et diviser une chaîne de nombres de n'importe quelle longueur, et lorsque j'appuie sur =, le résultat correct devrait être affiché dans l'élément avec l'id d'affichage.

---

## 10 : Lorsque je saisis des nombres, ma calculatrice ne devrait pas permettre qu'un nombre commence par plusieurs zéros.

---

## 11 : Lorsque l'on clique sur l'élément décimal, un . devrait être ajouté à la valeur actuellement affichée ; deux . dans un même nombre ne devraient pas être acceptés.

---

## 12 : Je devrais être capable d'effectuer n'importe quelle opération (+, -, *, /) sur des nombres contenant des points décimaux.

---

## 13 : Si 2 opérateurs ou plus sont entrés consécutivement, l'opération effectuée devrait être le dernier opérateur entré (à l'exception du signe négatif (-)). Par exemple, si 5 + * 7 = est saisi, le résultat doit être 35 (c'est-à-dire 5 * 7) ; si 5 * - 5 = est saisi, le résultat doit être -25 (c'est-à-dire 5 * (-5)).

---

## 14 : Appuyer sur un opérateur immédiatement après = devrait lancer un nouveau calcul qui opère sur le résultat de l'évaluation précédente.

---

## 15 : Ma calculatrice devrait avoir plusieurs décimales de précision quand il s'agit d'arrondir (notez qu'il n'y a pas de norme exacte, mais vous devriez être en mesure de traiter des calculs comme 2 / 7 avec une précision raisonnable à au moins 4 décimales).

Note sur la logique de la calculatrice : Il convient de noter qu'il existe deux grandes écoles de pensée sur la logique d'entrée des calculatrices : la logique d'exécution immédiate et la logique de formule. Notre exemple utilise la logique des formules et observe la priorité de l'ordre des opérations, ce qui n'est pas le cas de l'exécution immédiate. L'une ou l'autre est acceptable, mais veuillez noter que selon votre choix, votre calculatrice peut donner des résultats différents des nôtres pour certaines équations (voir l'exemple ci-dessous). Tant que vos calculs peuvent être vérifiés par une autre calculatrice de production, veuillez ne pas considérer cela comme un bug.

EXEMPLE : 3 + 5 x 6 - 2 / 4 = 1.

    Logique d'exécution immédiate : 11.5
    Logique de formule/expression : 32.5

Vous pouvez construire votre projet en utilisant ce modèle CodePen et en cliquant sur Enregistrer pour créer votre propre stylo. Vous pouvez également utiliser ce lien CDN pour exécuter les tests dans l'environnement de votre choix : https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js.

Une fois que vous avez terminé, soumettez l'URL de votre projet fonctionnel avec tous ses tests réussis.

Traduit avec www.DeepL.com/Translator (version gratuite)