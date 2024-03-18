const questions = [
    {
        question  : "Which animal species can live in extremes of both heat and cold, from −20 °F to 120 °F?",
        answer :[
            {text:"chuckwalla iguanas", correct:false},
            {text:"polar bear", correct:false},
            {text:"emperor penguin", correct:false},
            {text:"Bactrian camel", correct:true}
        ]
    },
    {
        question  : "The members of Lok Sabha hold office for a term of",
        answer :[
            {text:"4 Years", correct:false},
            {text:"5 Years", correct:true},
            {text:"6 Years", correct:false},
            {text:"3 Years", correct:false}
        ]
    },
    {
        question  : "The unit of current is",
        answer :[
            {text:"ohm", correct:false},
            {text:"watt", correct:false},
            {text:"ampere", correct:true},
            {text:"None of the above", correct:false}
        ]
    },
    {
        question  : "The tiniest animal with a backbone is a what?",
        answer :[
            {text:"bird", correct:false},
            {text:"fish", correct:false},
            {text:"frog", correct:true},
            {text:"lizard", correct:false}
        ]
    }
];

const qElement = document.querySelector('#question')
const ansBTN = document.querySelector('#answerBTN')


const next = document.querySelector('#next_BTN');

let  currentQuestionIndex =0;
let score =0;

function startQuiz(){

    
    currentQuestionIndex =0;
    score = 0;
    next.innerHTML = "Next"
    ShowQuestion();

}

function ShowQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    qElement.innerHTML = questionNo+ "."+currentQuestion.question;

    currentQuestion.answer.forEach(answer =>{
        const button = document.createElement("button");

        button.innerHTML = answer.text;
        button.classList.add("btn");
        ansBTN.appendChild(button)
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
    })
}

function resetState(){
    next.style.display = "none";
    while(ansBTN.firstChild){
        ansBTN.removeChild(ansBTN.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add('correct')
        score++;
    }
    else{
        selectedBtn.classList.add('incorrect');
    }
    Array.from(ansBTN.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    next.style.display = "block"
}

function showScore(){
    resetState();
    qElement.innerHTML = `You scored ${score} out of ${questions.length}`
    next.innerHTML = "play again";
    next.style.display = "none"
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        ShowQuestion();
    }
    else{
        showScore();
    }
}

next.addEventListener('click', ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

startQuiz();

