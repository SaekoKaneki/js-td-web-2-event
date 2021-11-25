/*
SOURCE : https://github.com/oc-courses/javascript-web/tree/gh-pages/chapitre_5/js
*/
/*
EXERCICE 5bis : Change couleur (2) - Colorie la page en fonction des touches pressées
- Change la couleur de fond du body lorsque l'utilisateur appuie sur une des touches
    R (rouge), J (jaune), V (vert) ou B (bleu),
    que ce soit en minuscules ou en majuscules
    et affiche le message 'Touche … non gérée' s'il presse une autre touche.
- Méthode : Cette fois, JS ne fait qu'appliquer une classe sur le body, c'est CSS qui se charge de le styler.
- PRESSÉ ? : tu peux repartir du code de la version précédente, il n'y a qu'une modification mineure à opérer.
*/

document.addEventListener('keypress', (event)=>{
    let eTouch =String.fromCharCode(event.charCode);
    eTouch = eTouch.toUpperCase();
    if (eTouch === 'B' || eTouch === 'b') {
        event.currentTarget.classList.add("blue");
        //document.querySelector('body').style.backgroundColor = Color;
    }else if (eTouch === 'R' || eTouch === 'r'){
        document.querySelector('body').style.backgroundColor = 'red';
    }else if (eTouch === 'Y' || eTouch === 'y'){
        document.querySelector('body').style.backgroundColor = 'yellow';
    }else if (eTouch === 'G' || eTouch === 'g'){
        document.querySelector('body').style.backgroundColor = 'green';
    }else{
        alert(`Touche ${eTouch} non gérée`);
    }
    console.log(eTouch);
});