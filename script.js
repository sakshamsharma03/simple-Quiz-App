const questions=[
    {
        question:"Which is the largest animal",
        answers:[
            {text:"shark",correct:false},
            {text:"Blue Whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false},
        ]
    },
    {
        question:"when 3 is divided by 3",
        answers:[
            {text:"0",correct:false},
            {text:"2",correct:false},
            {text:"3",correct:false},
            {text:"1",correct:true},
        ]
    },
    {
        question:"Capital of India",
        answers:[
            {text:"Mumbai",correct:false},
            {text:"Berlin",correct:false},
            {text:"New Delhi",correct:true},
            {text:"Islamabad",correct:false},
        ]
    },
    {
        question:"How many colors are there in indina flag?",
        answers:[
            {text:"1",correct:false},
            {text:"5",correct:false},
            {text:"2",correct:false},
            {text:"4",correct:true},
        ]
    },
    {
        question:"What company makes the Xperia model of smartphone?",
        answers:[
            {text:"Samsung",correct:false},
            {text:"Sony ",correct:false},
            {text:"Nokia",correct:true},
        ]
    },
    {
        question:"Where was the first example of paper money used?",
        answers:[
            {text:"China",correct:true},
            {text:"Turkey ",correct:false},
            {text:"Greece",correct:false},
        ]
    },
    {
        question:"If you were looking at Iguazu Falls, on what continent would you be?",
        answers:[
            {text:"Asia",correct:false},
            {text:"Africa ",correct:false},
            {text:"South America",correct:true},
        ]
    }
];

const questionElement=document.getElementById("question");
const answerButton=document.querySelector("#answer-buttons");
const nextButton=document.getElementById("nextbtn");

let currentQuestionIndex=0;
let score=0;

function startQuiz()
{
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion()
{
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let quesionNo=currentQuestionIndex+1;
    questionElement.innerHTML=quesionNo+". "+currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct)
        {
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState()
{
    nextButton.style.display="none";
    while(answerButton.firstChild)
    {
        answerButton.removeChild(answerButton.firstChild)
    }
}
function selectAnswer(e)
{
    const selectedbtn=e.target;
    const isCorrect =selectedbtn.dataset.correct==="true";
    if(isCorrect)
    {
        selectedbtn.classList.add("correct");
        score++;
    }
    else{
        selectedbtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button=>
        {
            if(button.dataset.correct==="true")
            {
                button.classList.add("correct");
            }
            button.disabled=true;
        });
        nextButton.style.display="block";
}

function showScore()
{
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}
function handleNextbutton()
{
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length)
    {
        showQuestion();
    }
    else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>
{
    if(currentQuestionIndex<questions.length)
    {
        handleNextbutton();
    }
    else 
    {
        startQuiz();
    }
})

startQuiz();