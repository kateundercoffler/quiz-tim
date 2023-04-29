/**
 * TIM - QUIZ
 * @author: Kate Undercoffler;
 **/

/* Données du quiz - À ADAPTER SELON LES CONTENUS DU QUIZ */
/* CONSTRUIRE le tableau des bonneRéponses avec les identifiants 
des input[type=radio] */
const objJSON = {
    "retroactions": {
        "positive": "Bravo, c'est une bonne réponse !",
        "negative": "Bon essai, mais la réponse attendue est !"
    },
    "explications": {
        "Q1": "Le CSR peut contrôler la surpopulation de chats, diminuer les nuisances causées par les comportements de chats fertiles et diminuer les chats qui sont euthanasiés.",
        "Q2": "Un coup d'oreille ou « ear tip » en anglais est un moyen que les gens faisant le CSR peuvent utiliser pour savoir si un chat a déjà participé dans le CSR et sinon, il peut être capturé humainement.",
        "Q3": "C'est important que le chat soit ramené dans un lieu familier car il connaît son environnement et il s'y est habitué. Sa communauté est comme sa maison !"
    },
    "bonnesReponses": [
        "Q1B",
        "Q2C",
        "Q3B"
    ],
    "messages": {
        "resultatsDebut": "Vous avez obtenu un résultat de",
        "note0": "Awh, bon essai. Vous auriez pu faire mieux, il y a beaucoup d'information sur le CSR en ligne, faites la recherche et essayez encore plus tard",
        "note33": "Pas trop pire, vous auriez pu faire mieux. Je vous suggère de googler le CSR.",
        "note66": "Wow, tellement bon, vous connaissez le CSR en général!",
        "note100": "Félicitations, vous êtes un CSR héro ! Avez-vous déjà aidé les chats à Québec?"
    }
};

/* Écouteurs d'événements */
document.addEventListener('load', function () {
    document.querySelector('body').classList.add('js');
    /* initier le quiz */
    quiz.debuterQuiz();

});
document.querySelectorAll('[type=radio').forEach(function (btnRadio) {
    btnRadio.addEventListener('click', function (e) {
        e.target.closest('.section-quiz').querySelector('.divBouton_bouton').disabled = false;
    })
});

console.log(document.querySelectorAll('input'))
console.log("salut");




/* Objet Quiz */
const quiz = {
    intNoQuestion: 0,
    intNbQuestions: 3,
    intBonnesReponses: 0,

    refIntro: document.querySelector('.main-section'),
    refArrQuestions: document.querySelectorAll('.section-quiz'),
    refBoutonSubmit: document.querySelector('.boutonValider'),

    debuterQuiz: function () {
        

    },
    validerReponse: function (idReponse) {

    },
    afficherResultats: function () {

    }
}