/* 
SOURCE : https://github.com/leny/becode-js-corrections
*/
/*
EXERCICE 6 : Change couleur (3)
- 1°) Étape 1 :
	Au clic sur le bouton, récupère la valeur de l'input et utilise-la comme couleur de fond de la page.
	Conseil : utilise ici une fonction nommée, ce sera plus pratique pour la suite
*/

// ÉTAPE 1 : on ne gère que le clic
const eColor = document.querySelector('#colorChoice');
const eBody = document.querySelector('body');
const eButton = document.querySelector('#colorBtn');

eButton.addEventListener('click',(event)=>{
    eBody.style.backgroundColor = eColor.value;
});