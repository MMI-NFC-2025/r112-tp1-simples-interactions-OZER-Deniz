// Changer la couleur du texte

const rouge = document.querySelector('#a-mettre-en-rouge');
rouge.style.color = 'red';

// Réagir à un click : mettre le bouton en rouge quand on clique dessus
const btnEnRouge = document.querySelector('#en-rouge-suite-a-click');
if (btnEnRouge) {
    btnEnRouge.addEventListener('click', (evt) => {
        // evt.target est le bouton cliqué
        evt.target.style.color = 'red';
    });
}

// Trouver tous les H2 et ajouter un listener qui met le H2 en rouge au clic
const h2List = document.querySelectorAll('h2');
if (h2List && h2List.length > 0) {
    h2List.forEach((h2) => {
        h2.style.cursor = 'pointer';
        h2.addEventListener('click', (evt) => {
            evt.target.style.color = 'red';
        });
    });
}