/* 
SOURCE : https://github.com/leny/becode-js-corrections
*/
/*
EXERCICE 4 : Change couleur (1)
Au clic sur un des boutons, colorie la page dans la couleur choisie par l'utilisateur.
*/

document.querySelector('#red').addEventListener('click', (event)=>{
    document.documentElement.style.backgroundColor = 'red';
})
document.querySelector('#green').addEventListener('click', (event)=>{
    document.documentElement.style.backgroundColor = 'green';
})
document.querySelector('#blue').addEventListener('click', (event)=>{
    document.documentElement.style.backgroundColor = 'blue';
})
document.querySelector('#yellow').addEventListener('click', (event)=>{
    document.documentElement.style.backgroundColor = 'yellow';
});



