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
        "negative": "Bon essai, mais la réponse attendue est "
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

const quiz = {
    intNoQuestion: 0,
    intNbQuestions: 3,
    intBonnesReponses: 0,

    refArrQuestions: document.querySelectorAll('.ctnQuestion'), // Chercher tous les éléments qui ont la classe .ctnQuestion
    refBoutonSubmit: document.querySelector('.boutonValider'), //Chercher le bouton pour faire la validation des réponses

    /**
     * Cache l'intro et affiche la premiere question
     */
    debuterQuiz: function () {
        console.log("hello world");
        console.log(this.refIntro);
        const refIntro = document.getElementById('ctnMain') //Variable qui sont les éléments ctnMain
        refIntro.classList.add('cacher'); // Ajouter la classe 'cacher' pour cacher tous les questions
        console.log(this.refArrQuestions[0]);

        this.refArrQuestions[0].classList.remove('cacher'); // Enlever la classe 'cacher' pour la première question (pour débuter)

    },
    // Fonction pour valider les réponses et rétroactions
    validerReponse: function (idReponse, ctnElement) {

        console.log("hello encore", idReponse);
        console.log(ctnElement);
        console.log(objJSON.bonnesReponses, objJSON.bonnesReponses[this.intNoQuestion]);

        //Désactivé les autres réponses une fois la bonne ou mauvaise réponse à été choisie.
        const arrBoutons = ctnElement.querySelectorAll('input[type=radio]');
        arrBoutons.forEach(function (bouton) {
            bouton.disabled = true;
        })

        //Cacher bouton valider mes réponses une fois un choix a été fait et puis afficher bouton pour passer à la question suivante.
        document.getElementById('validerReponse' + (this.intNoQuestion + 1)).classList.add('cacher');
        document.getElementById('questionSuivante' + (this.intNoQuestion + 1)).classList.remove('cacher');
        document.getElementById('questionSuivante' + (this.intNoQuestion + 1)).disabled = false;



        if (idReponse == objJSON.bonnesReponses[this.intNoQuestion]) {
            ctnElement.querySelector('.question__retroaction').innerHTML = objJSON.retroactions.positive;
            ctnElement.querySelector('.choixReponses').classList.add('bonneReponse');
            this.intBonnesReponses++;

        } else {
            ctnElement.querySelector('.question__retroaction').innerHTML = objJSON.retroactions.negative + objJSON.bonnesReponses[this.intNoQuestion][2] + " !";
            ctnElement.querySelector('.choixReponses').classList.add('mauvaiseReponse')
        }
       
        ctnElement.querySelector('.question__explication').innerHTML = objJSON.explications["Q" + (this.intNoQuestion + 1)];


    },

    /* NEED TO SHOW THE IMAGE OF THE CORRECT ANSWER AHHH
     kateundercoffler/images/question01-reponseB_642.jpg*/

    afficherQuestionSuivante: function () {
        this.refArrQuestions[this.intNoQuestion].classList.add('cacher');
        this.intNoQuestion++
        this.refArrQuestions[this.intNoQuestion].classList.remove('cacher');
    },

    // Fonction pour afficher les resultats aux utilisateurs

    /**
     *
     *
     */
    afficherResultats: function () {
        console.log("afficherResultats");

        this.refArrQuestions[this.intNoQuestion].classList.add('cacher');

        const refMain = document.querySelector('main');

        const tag = document.createElement("div");
        const content = '<div>Votre resultat final:</div><span>' + this.intBonnesReponses + '/3</span><svg class="pie" viewBox="0 0 32 32"><circle class="pie-filled-' + this.intBonnesReponses + '-of-3" r="16" cx="16" cy="16" /></svg> <button class="bouton" type="button" id="jouerEncore" name="jouerEncore">Jouer encore?</button>'
        tag.innerHTML = content;
        refMain.append(tag)

        document.getElementById('jouerEncore').addEventListener('click', function () {
            location.reload();
        })

    }
}

/* Écouteurs d'événements */
document.getElementById('demarrerQuiz')
    .addEventListener('click', function () {
        quiz.debuterQuiz()
    });
document.getElementById('validerReponse1')
    .addEventListener('click', function (e) {
        const refCtnQuestion = e.target.closest('.ctnQuestion');
        quiz.validerReponse(refCtnQuestion.querySelector('input[type=radio]:checked').id, refCtnQuestion);
    });
document.getElementById('validerReponse2')
    .addEventListener('click', function (e) {
        const refCtnQuestion = e.target.closest('.ctnQuestion');
        quiz.validerReponse(refCtnQuestion.querySelector('input[type=radio]:checked').id, refCtnQuestion);
    });
document.getElementById('validerReponse3')
    .addEventListener('click', function (e) {
        const refCtnQuestion = e.target.closest('.ctnQuestion');
        quiz.validerReponse(refCtnQuestion.querySelector('input[type=radio]:checked').id, refCtnQuestion);
    });

document.getElementById('questionSuivante1')
    .addEventListener('click', function (e) {
        quiz.afficherQuestionSuivante()
    });
document.getElementById('questionSuivante2')
    .addEventListener('click', function (e) {
        quiz.afficherQuestionSuivante()
    });
document.getElementById('questionSuivante3')
    .addEventListener('click', function (e) {
        e.preventDefault();
        quiz.afficherResultats()

    });

document.querySelectorAll('[type=radio').forEach(function (btnRadio) {
    btnRadio.addEventListener('click', function (e) {
        e.target.closest('.ctnQuestion').querySelector('.bouton').disabled = false;
    })
});

// 1. hide the current question section (using intNoQuestion and adding your class "cacher")
//2. increment intNoQuestion
//3. reveal the new question (using intNoQuestion and removing your class "cacher")


/* add a class on the question you just answered, and remove it from the next one
get the right question dynamically 
document.getElementByID("section_question" + intNoQuestion)
*/
