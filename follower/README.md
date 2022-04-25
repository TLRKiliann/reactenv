#1 : Je peux voir un élément avec id="break-label" qui contient une chaîne (par exemple, "Break Length").

#2 : Je peux voir un élément avec id="session-label" qui contient une chaîne de caractères (par exemple, "Session Length").

#3 : Je peux voir deux éléments cliquables avec des ID correspondants : id="break-decrement" et id="session-decrement".

#4 : Je peux voir deux éléments cliquables avec les ID correspondants : id="break-increment" et id="session-increment".

#5 : Je peux voir un élément avec un id="break-length" correspondant, qui par défaut (au chargement) affiche une valeur de 5.

#6 : Je peux voir un élément avec un id="session-length" correspondant, qui par défaut affiche une valeur de 25.





#7 : Je peux voir un élément avec un id="timer-label" correspondant, qui contient une chaîne indiquant qu'une session est initialisée (par exemple, "Session").




#8 : Je peux voir un élément avec un id="time-left" correspondant. REMARQUE : qu'elle soit en pause ou en cours d'exécution, la valeur de ce champ doit toujours être affichée au format mm:ss (c'est-à-dire 25:00).






#9 : Je peux voir un élément cliquable avec un id="start_stop" correspondant.



#10 : Je peux voir un élément cliquable avec un id="reset" correspondant.

#11 : Lorsque je clique sur l'élément avec l'id="reset", toute minuterie en cours doit être arrêtée, la valeur dans id="break-length" doit revenir à 5, la valeur dans id="session-length" doit revenir à 25, et l'élément avec id="time-left" doit revenir à son état par défaut.

#12 : Lorsque je clique sur l'élément avec l'id de break-decrement, la valeur dans l'id="break-length" diminue de 1 et je peux voir la valeur mise à jour.

#13 : Lorsque je clique sur l'élément ayant l'id de break-increment, la valeur dans id="break-length" est incrémentée de 1 et je peux voir la valeur mise à jour.

#14 : Lorsque je clique sur l'élément ayant l'id de session-decrement, la valeur de id="session-length" est diminuée de 1 et je peux voir la valeur mise à jour.

#15 : Lorsque je clique sur l'élément ayant l'identifiant session-increment, la valeur de l'élément id="session-length" est incrémentée de 1 et je peux voir la valeur mise à jour.

#16 : Je ne devrais pas pouvoir définir une longueur de session ou de pause à <= 0.

#17 : Je ne devrais pas être en mesure de définir une longueur de session ou de pause à > 60.

#18 : Lorsque je clique pour la première fois sur l'élément id="start_stop", le minuteur doit commencer à fonctionner à partir de la valeur actuellement affichée dans id="session-length", même si cette valeur a été incrémentée ou décrémentée par rapport à la valeur initiale de 25.

#19 : Si le minuteur est en cours d'exécution, l'élément avec l'id de time-left doit afficher le temps restant au format mm:ss (en décrémentant d'une valeur de 1 et en mettant à jour l'affichage toutes les 1000 ms).

#20 : Si le minuteur est en cours d'exécution et que je clique sur l'élément avec l'id="start_stop", le compte à rebours devrait se mettre en pause.

#21 : Si le minuteur est en pause et que je clique sur l'élément avec id="start_stop", le compte à rebours doit reprendre à partir du point où il a été mis en pause.

#22 : Lorsqu'un compte à rebours de session atteint zéro (REMARQUE : le minuteur DOIT atteindre 00:00), et qu'un nouveau compte à rebours commence, l'élément avec l'id de timer-label doit afficher une chaîne indiquant qu'une pause a commencé.

#23 : Lorsque le compte à rebours de la session atteint zéro (REMARQUE : la minuterie DOIT atteindre 00:00), un nouveau compte à rebours de pause doit commencer, avec un décompte à partir de la valeur actuellement affichée dans l'élément id="break-length".

#24 : Lorsqu'un compte à rebours de pause atteint zéro (REMARQUE : le minuteur DOIT atteindre 00:00), et qu'un nouveau compte à rebours commence, l'élément avec l'id de timer-label doit afficher une chaîne indiquant qu'une session a commencé.

#25 : Lorsque le compte à rebours d'une pause atteint zéro (REMARQUE : la minuterie DOIT atteindre 00:00), un nouveau compte à rebours de session doit commencer, en décomptant à partir de la valeur actuellement affichée dans l'élément id="session-length".

#26 : Lorsqu'un compte à rebours atteint zéro (REMARQUE : le minuteur DOIT atteindre 00:00), un son indiquant que le temps est écoulé doit être diffusé. Il doit utiliser une balise HTML5 audio et avoir un élément id="beep" correspondant.

#27 : L'élément audio avec id="beep" doit durer 1 seconde ou plus.

#28 : l'élément audio avec l'id="beep" doit s'arrêter de jouer et être rembobiné au début lorsque l'élément avec l'id="reset" est cliqué.
