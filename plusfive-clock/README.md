Example:
https://codepen.io/freeCodeCamp/full/XpKrrW

+ User Story #1 : Je peux voir un élément avec id="break-label" qui contient une chaîne (par exemple, "Break Length").

+ User Story #2 : Je peux voir un élément avec id="session-label" qui contient une chaîne (par exemple "Session Length").

+ User Story #3 : Je peux voir deux éléments cliquables avec des IDs correspondants : id="break-decrement" et id="session-decrement".

+ User Story #4 : Je peux voir deux éléments cliquables avec les IDs correspondants : id="break-increment" et id="session-increment".

+ User Story #5 : Je peux voir un élément avec un id="break-length" correspondant, qui par défaut (au chargement) affiche une valeur de 5.

+ User Story #6 : Je peux voir un élément avec un id="session-length" correspondant, qui par défaut affiche une valeur de 25.


FUNC
User Story #7 : Je peux voir un élément avec un id="timer-label" correspondant, qui contient une chaîne indiquant qu'une session est initialisée (par exemple "Session").

User Story #8 : Je peux voir un élément avec un id="time-left" correspondant. REMARQUE : en pause ou en cours d'exécution, la valeur de ce champ doit toujours être affichée au format mm:ss (c'est-à-dire 25:00).



+ User Story #9 : Je peux voir un élément cliquable avec un id="start_stop" correspondant.

+ User Story #10 : Je peux voir un élément cliquable avec un id="reset" correspondant.


FUNC
User Story #11 : Lorsque je clique sur l'élément avec l'id="reset", toute minuterie en cours doit être arrêtée, la valeur dans id="break-length" doit revenir à 5, la valeur dans id="session-length" doit revenir à 25, et l'élément avec id="time-left" doit revenir à son état par défaut.



Facile ???
User Story #12 : Lorsque je clique sur l'élément avec l'id de break-decrement, la valeur dans id="break-length" diminue d'une valeur de 1, et je peux voir la valeur mise à jour.

User Story #13 : Lorsque je clique sur l'élément avec l'id de break-increment, la valeur dans id="break-length" augmente d'une valeur de 1, et je peux voir la valeur mise à jour.

User Story #14 : Lorsque je clique sur l'élément avec l'id de session-decrement, la valeur dans id="session-length" diminue d'une valeur de 1, et je peux voir la valeur mise à jour.

User Story #15 : Lorsque je clique sur l'élément avec l'id de session-increment, la valeur dans id="session-length" augmente d'une valeur de 1, et je peux voir la valeur mise à jour.



User Story #16 : Je ne devrais pas pouvoir définir une longueur de session ou de pause à <= 0.

User Story #17 : Je ne devrais pas pouvoir définir une longueur de session ou de pause à > 60.



User Story #18 : Lorsque je clique pour la première fois sur l'élément avec id="start_stop", le minuteur devrait commencer à fonctionner à partir de la valeur actuellement affichée dans id="session-length", même si la valeur a été incrémentée ou décrémentée à partir de la valeur originale de 25.

User Story #19 : Si le minuteur est en cours d'exécution, l'élément avec l'id de time-left devrait afficher le temps restant au format mm:ss (en décrémentant d'une valeur de 1 et en mettant à jour l'affichage toutes les 1000ms).

User Story #20 : Si le minuteur est en cours d'exécution et que je clique sur l'élément avec l'id="start_stop", le compte à rebours devrait faire une pause.

User Story #21 : Si le minuteur est en pause et que je clique sur l'élément avec id="start_stop", le compte à rebours doit reprendre à partir du point où il a été mis en pause.




User Story #22 : Quand un compte à rebours de session atteint zéro (NOTE : le minuteur DOIT atteindre 00:00), et qu'un nouveau compte à rebours commence, l'élément avec l'id de timer-label devrait afficher une chaîne indiquant qu'une pause a commencé.

User Story #23 : Lorsqu'un compte à rebours de session atteint zéro (REMARQUE : la minuterie DOIT atteindre 00:00), un nouveau compte à rebours de pause doit commencer, en décomptant à partir de la valeur actuellement affichée dans l'élément id="break-length".

User Story #24 : Lorsqu'un compte à rebours de pause atteint zéro (NOTE : la minuterie DOIT atteindre 00:00), et qu'un nouveau compte à rebours commence, l'élément avec l'id de timer-label devrait afficher une chaîne indiquant qu'une session a commencé.

User Story #25 : Quand le compte à rebours d'une pause atteint zéro (NOTE : la minuterie DOIT atteindre 00:00), un nouveau compte à rebours de session devrait commencer, en décomptant à partir de la valeur actuellement affichée dans l'élément id="session-length".

User Story #26 : Lorsqu'un compte à rebours atteint zéro (REMARQUE : le minuteur DOIT atteindre 00:00), un son indiquant que le temps est écoulé doit être diffusé. Il doit utiliser une balise HTML5 audio et avoir un élément id="beep" correspondant.



Histoire d'utilisateur #27 : L'élément audio avec id="beep" doit durer 1 seconde ou plus.

User Story #28 : L'élément audio avec id="beep" doit arrêter de jouer et être rembobiné au début lorsque l'élément avec id="reset" est cliqué.


Test:
https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js