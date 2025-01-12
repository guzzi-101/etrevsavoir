const verbs = [
    { verb: 'aller', auxiliary: 'être' },
    { verb: 'avoir', auxiliary: 'avoir' },
    { verb: 'être', auxiliary: 'avoir' },
    { verb: 'venir', auxiliary: 'être' },
    { verb: 'manger', auxiliary: 'avoir' },
    { verb: 'partir', auxiliary: 'être' },
    { verb: 'prendre', auxiliary: 'avoir' },
    { verb: 'rester', auxiliary: 'être' },
    { verb: 'tomber', auxiliary: 'être' },
    { verb: 'voir', auxiliary: 'avoir' },
    { verb: 'se réveiller', auxiliary: 'être' },
{ verb: 'se réveiller', auxiliary: 'être' },
{ verb: 'se laver', auxiliary: 'être' },
{ verb: 'se brosser', auxiliary: 'être' },
{ verb: 'se coucher', auxiliary: 'être' },
{ verb: 'se lever', auxiliary: 'être' },
{ verb: 'se déshabiller', auxiliary: 'être' },
{ verb: 'se maquiller', auxiliary: 'être' },
{ verb: 'se coiffer', auxiliary: 'être' },
{ verb: 'se regarder', auxiliary: 'être' },
{ verb: 'se voir', auxiliary: 'être' },
{ verb: 'se sentir', auxiliary: 'être' },
{ verb: 'se rappeler', auxiliary: 'être' },
{ verb: 'se souvenir', auxiliary: 'être' },
{ verb: 'se promener', auxiliary: 'être' },
{ verb: 'se méfier', auxiliary: 'être' },
{ verb: 'aborder', auxiliary: 'être' },
{ verb: 'accourir', auxiliary: 'être' },
{ verb: 'accéder', auxiliary: 'être' },
{ verb: 'advenir', auxiliary: 'être' },
{ verb: 'apparaître', auxiliary: 'être' },
{ verb: 'arriver', auxiliary: 'être' },
{ verb: 'ascendre', auxiliary: 'être' },
{ verb: 'avancer', auxiliary: 'être' },
{ verb: 'déboucher', auxiliary: 'être' },
{ verb: 'décéder', auxiliary: 'être' },
{ verb: 'décliner', auxiliary: 'être' },
{ verb: 'dégénérer', auxiliary: 'être' },
{ verb: 'dégringoler', auxiliary: 'être' },
{ verb: 'descendre', auxiliary: 'être' },
{ verb: 'devenir', auxiliary: 'être' },
{ verb: 'éclore', auxiliary: 'être' },
{ verb: 'émerger', auxiliary: 'être' },
{ verb: 'entrer', auxiliary: 'être' },
{ verb: 'évoluer', auxiliary: 'être' },
{ verb: 'expirer', auxiliary: 'être' },
{ verb: 'filer', auxiliary: 'être' },
{ verb: 'fuir', auxiliary: 'être' },
{ verb: 'intervenir', auxiliary: 'être' },
{ verb: 'mourir', auxiliary: 'être' },
{ verb: 'monter', auxiliary: 'être' },
{ verb: 'naître', auxiliary: 'être' },
{ verb: 'parvenir', auxiliary: 'être' },
{ verb: 'passer', auxiliary: 'être' },
{ verb: 'péricliter', auxiliary: 'être' },
{ verb: 'repartir', auxiliary: 'être' },
{ verb: 'rester', auxiliary: 'être' },
{ verb: 'resurgir', auxiliary: 'être' },
{ verb: 'revenir', auxiliary: 'être' },
{ verb: 'retomber', auxiliary: 'être' },
{ verb: 'redescendre', auxiliary: 'être' },
{ verb: 'remonter', auxiliary: 'être' },
{ verb: 'rentrer', auxiliary: 'être' },
{ verb: 'retourner', auxiliary: 'être' },
{ verb: 'sortir', auxiliary: 'être' },
{ verb: 'surgir', auxiliary: 'être' },
{ verb: 'survenir', auxiliary: 'être' },
{ verb: 'venir', auxiliary: 'être' },
{ verb: 'tomber', auxiliary: 'être' },
{ verb: 'transparaître', auxiliary: 'être' },
{ verb: 'vaciller', auxiliary: 'être' },
{ verb: 'vivre', auxiliary: 'être' },
{ verb: 'voler', auxiliary: 'être' },
{ verb: 'bouger', auxiliary: 'avoir' },
{ verb: 'changer', auxiliary: 'avoir' },
{ verb: 'chanter', auxiliary: 'avoir' },
{ verb: 'chercher', auxiliary: 'avoir' },
{ verb: 'choisir', auxiliary: 'avoir' },
{ verb: 'commencer', auxiliary: 'avoir' },
{ verb: 'comprendre', auxiliary: 'avoir' },
{ verb: 'connaître', auxiliary: 'avoir' },
{ verb: 'continuer', auxiliary: 'avoir' },
{ verb: 'courir', auxiliary: 'avoir' },
{ verb: 'couvrir', auxiliary: 'avoir' },
{ verb: 'craindre', auxiliary: 'avoir' },
{ verb: 'croire', auxiliary: 'avoir' },
{ verb: 'crier', auxiliary: 'avoir' },
{ verb: 'danser', auxiliary: 'avoir' },
{ verb: 'décider', auxiliary: 'avoir' },
{ verb: 'demander', auxiliary: 'avoir' },
{ verb: 'déménager', auxiliary: 'avoir' },
{ verb: 'détester', auxiliary: 'avoir' },
{ verb: 'devoir', auxiliary: 'avoir' },
{ verb: 'dire', auxiliary: 'avoir' },
{ verb: 'disparaître', auxiliary: 'avoir' },
{ verb: 'donner', auxiliary: 'avoir' },
{ verb: 'dormir', auxiliary: 'avoir' },
{ verb: 'écouter', auxiliary: 'avoir' },
{ verb: 'écrire', auxiliary: 'avoir' },
{ verb: 'embrasser', auxiliary: 'avoir' },
{ verb: 'emmener', auxiliary: 'avoir' },
{ verb: 'emporter', auxiliary: 'avoir' },
{ verb: 'encourager', auxiliary: 'avoir' },
{ verb: 'enlever', auxiliary: 'avoir' },
{ verb: 'envoyer', auxiliary: 'avoir' },
{ verb: 'espérer', auxiliary: 'avoir' },
{ verb: 'essayer', auxiliary: 'avoir' },
{ verb: 'éteindre', auxiliary: 'avoir' },
{ verb: 'étudier', auxiliary: 'avoir' },
{ verb: 'faire', auxiliary: 'avoir' },
{ verb: 'falloir', auxiliary: 'avoir' },
{ verb: 'fermer', auxiliary: 'avoir' },
{ verb: 'finir', auxiliary: 'avoir' },
{ verb: 'fuir', auxiliary: 'avoir' },
{ verb: 'gagner', auxiliary: 'avoir' },
{ verb: 'garder', auxiliary: 'avoir' },
{ verb: 'glisser', auxiliary: 'avoir' },
{ verb: 'goûter', auxiliary: 'avoir' },
{ verb: 'habiter', auxiliary: 'avoir' },
{ verb: 'hésiter', auxiliary: 'avoir' },
{ verb: 'ignorer', auxiliary: 'avoir' },
{ verb: 'interdire', auxiliary: 'avoir' },
{ verb: 'inviter', auxiliary: 'avoir' },
{ verb: 'jouer', auxiliary: 'avoir' },
{ verb: 'jurer', auxiliary: 'avoir' },
{ verb: 'laver', auxiliary: 'avoir' },
{ verb: 'lire', auxiliary: 'avoir' },
{ verb: 'louer', auxiliary: 'avoir' },
{ verb: 'manger', auxiliary: 'avoir' },
{ verb: 'marcher', auxiliary: 'avoir' },
{ verb: 'mentir', auxiliary: 'avoir' },
{ verb: 'mettre', auxiliary: 'avoir' },
{ verb: 'montrer', auxiliary: 'avoir' },
{ verb: 'nager', auxiliary: 'avoir' },
{ verb: 'nettoyer', auxiliary: 'avoir' },
{ verb: 'obéir', auxiliary: 'avoir' },
{ verb: 'offrir', auxiliary: 'avoir' },
{ verb: 'ouvrir', auxiliary: 'avoir' },
{ verb: 'paraître', auxiliary: 'avoir' },
{ verb: 'parler', auxiliary: 'avoir' },
{ verb: 'partir', auxiliary: 'être' },
{ verb: 'penser', auxiliary: 'avoir' },
{ verb: 'perdre', auxiliary: 'avoir' },
{ verb: 'permettre', auxiliary: 'avoir' },
{ verb: 'plaire', auxiliary: 'avoir' },
{ verb: 'pleurer', auxiliary: 'avoir' },
{ verb: 'pouvoir', auxiliary: 'avoir' },
{ verb: 'prendre', auxiliary: 'avoir' },
{ verb: 'préparer', auxiliary: 'avoir' },
{ verb: 'présenter', auxiliary: 'avoir' },
{ verb: 'promettre', auxiliary: 'avoir' },
{ verb: 'protéger', auxiliary: 'avoir' },
{ verb: 'raconter', auxiliary: 'avoir' },
{ verb: 'ranger', auxiliary: 'avoir' },
{ verb: 'réfléchir', auxiliary: 'avoir' },
{ verb: 'refuser', auxiliary: 'avoir' },
{ verb: 'regarder', auxiliary: 'avoir' },
{ verb: 'rencontrer', auxiliary: 'avoir' },
{ verb: 'rendre', auxiliary: 'avoir' },
{ verb: 'réparer', auxiliary: 'avoir' },
{ verb: 'répondre', auxiliary: 'avoir' },
{ verb: 'réserver', auxiliary: 'avoir' },
{ verb: 'respecter', auxiliary: 'avoir' },
{ verb: 'retenir', auxiliary: 'avoir' },
{ verb: 'réussir', auxiliary: 'avoir' },
{ verb: 'rire', auxiliary: 'avoir' },
{ verb: 'rouler', auxiliary: 'avoir' },
{ verb: 'sauter', auxiliary: 'avoir' },
{ verb: 'savoir', auxiliary: 'avoir' },
{ verb: 'sembler', auxiliary: 'avoir' },
{ verb: 'sentir', auxiliary: 'avoir' },
{ verb: 'servir', auxiliary: 'avoir' },
{ verb: 'suivre', auxiliary: 'avoir' },
{ verb: 'tenir', auxiliary: 'avoir' },
{ verb: 'toucher', auxiliary: 'avoir' },
{ verb: 'travailler', auxiliary: 'avoir' },
{ verb: 'trouver', auxiliary: 'avoir' },
{ verb: 'utiliser', auxiliary: 'avoir' },
{ verb: 'voir', auxiliary: 'avoir' },
{ verb: 'vouloir', auxiliary: 'avoir' },
{ verb: 'voyager', auxiliary: 'avoir' },
{ verb: 'se détendre', auxiliary: 'être' },
{ verb: 'se fatiguer', auxiliary: 'être' },
{ verb: 'se concentrer', auxiliary: 'être' },
{ verb: 'se méfier', auxiliary: 'être' },
{ verb: 'aborder', auxiliary: 'être' },
{ verb: 'accourir', auxiliary: 'être' },
{ verb: 'accéder', auxiliary: 'être' },
{ verb: 'advenir', auxiliary: 'être' },
{ verb: 'apparaître', auxiliary: 'être' },
{ verb: 'arriver', auxiliary: 'être' },
{ verb: 'ascendre', auxiliary: 'être' },
{ verb: 'avancer', auxiliary: 'être' },
{ verb: 'déboucher', auxiliary: 'être' },
{ verb: 'décéder', auxiliary: 'être' },
{ verb: 'décliner', auxiliary: 'être' },
{ verb: 'dégénérer', auxiliary: 'être' },
{ verb: 'dégringoler', auxiliary: 'être' },
{ verb: 'descendre', auxiliary: 'être' },
{ verb: 'devenir', auxiliary: 'être' },
{ verb: 'éclore', auxiliary: 'être' },
{ verb: 'émerger', auxiliary: 'être' }

];

let currentQuestionIndex = 0;
let score = 0;
let totalQuestions = 0;
let shuffledVerbs = [];

const questionElement = document.getElementById('question');
const responseElement = document.getElementById('response');
const scoreElement = document.getElementById('score');

document.getElementById('etre-btn').addEventListener('click', () => checkAnswer('être'));
document.getElementById('avoir-btn').addEventListener('click', () => checkAnswer('avoir'));

function startQuiz() {
    score = 0;
    totalQuestions = 0;
    shuffledVerbs = shuffleArray([...verbs]);
    currentQuestionIndex = 0;
    nextQuestion();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function nextQuestion() {
    responseElement.textContent = '';
    responseElement.className = '';
    if (currentQuestionIndex >= shuffledVerbs.length) {
        currentQuestionIndex = 0; // Reset if all questions have been used
        shuffledVerbs = shuffleArray([...verbs]);
    }
    currentQuestion = shuffledVerbs[currentQuestionIndex];
    questionElement.textContent = `Which auxiliary verb is used with "${currentQuestion.verb}"?`;
    currentQuestionIndex++;
    totalQuestions++;
    updateScore();
}

function checkAnswer(answer) {
    if (answer === currentQuestion.auxiliary) {
        responseElement.textContent = `Correct! The correct answer is ${currentQuestion.auxiliary}.`;
        responseElement.className = 'correct';
        score++;
    } else {
        responseElement.textContent = `Incorrect! The correct answer is ${currentQuestion.auxiliary}.`;
        responseElement.className = 'incorrect';
    }
    updateScore();
    setTimeout(nextQuestion, 2000);
}

function updateScore() {
    const percentage = ((score / totalQuestions) * 100).toFixed(2);
    scoreElement.textContent = `Score: ${score}/${totalQuestions} (${percentage}%)`;
}

startQuiz();
