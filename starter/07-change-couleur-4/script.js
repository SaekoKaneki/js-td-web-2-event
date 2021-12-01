/*
EXERCICE 6 : Change couleur (4) - v1
Quand on clique sur un des boutons radio, la couleur de fond de la page change dans la couleur choisie
Version 1  : une fonction par bouton radio
	À faire après pour préparer la version 2 : 
		(1) un alert dans une fonction pour voir à quoi correspond e.target
		(2) un alert dans chaque fonction pour voir à quoi correspond e.target.value
*/
(function (){
    const oChangecolor ={
        init(){
            const aInputs = document.querySelectorAll('input');
            const eBody = document.querySelector('body');
            const eSubmit = document.querySelector('#boutonCouleur')

            for (const eInput of aInputs) {
                eInput.addEventListener('click', (event) => {
                    eBody.style.backgroundColor = eInput.value;
                });
            }
            eSubmit.addEventListener('click', (event)=>{
                eBody.style.backgroundColor='#'+(Math.random()*0xFFFFFF<<0).toString(16);
            });
        }
    }
    oChangecolor.init();
})();




