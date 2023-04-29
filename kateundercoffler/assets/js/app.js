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

/* Objet Quiz */
const quiz = {
    intNoQuestion: 0,
    intNbQuestions: 3,
    intBonnesReponses: 0,

    refArrQuestions: document.querySelectorAll('.ctnQuestion'),
    refBoutonSubmit: document.querySelector('.boutonValider'),

    debuterQuiz: function () {
        console.log("hello world");
        console.log(this.refIntro);
        const refIntro = document.getElementById('ctnMain')
        refIntro.classList.add('cacher');
        console.log(this.refArrQuestions[0]);

        this.refArrQuestions[0].classList.remove('cacher');

    },

    validerReponse: function (idReponse) {
        console.log("hello encore", idReponse);

        


    },
    afficherResultats: function () {

    }
}

/* Écouteurs d'événements */
document.getElementById('demarrerQuiz')
.addEventListener('click', function () {
    quiz.debuterQuiz()
});
document.getElementById('validerReponse1')
.addEventListener('click', function (e) {
    quiz.validerReponse(e.target.closest('.ctnQuestion').querySelector('input[type=radio]:checked').id)
});


document.querySelectorAll('[type=radio').forEach(function (btnRadio) {
    btnRadio.addEventListener('click', function (e) {
        e.target.closest('.ctnQuestion').querySelector('.bouton').disabled = false;
    })
});






