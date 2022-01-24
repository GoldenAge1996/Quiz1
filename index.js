const quizData = [
    {
        question: "What language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "Javascript",
        correct: "d",
    },
    {
        question: "Which of the following is not a web browser?",
        a: "Chrome",
        b: "UC browser",
        c: "Fire Fox",
        d: "Facebook",
        correct: "d",
    },
    {
        question: "Which of the following is a serach engine?",
        a: "Chrome",
        b: "UC browser",
        c: "Fire Fox",
        d: "Google",
        correct: "d",
    },
    {
        question: "What year was Javascript Launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "Would you like to learn Programming?",
        a: "Yes",
        b: "No",
        correct: "a",
    },
];

const quiz = document.getElementById("quiz")
const content = document.querySelector(".content")
const answerEls = document.querySelectorAll(".answer")
const aText = document.getElementById("atext")
const bText = document.getElementById("btext")
const cText = document.getElementById("ctext")
const dText = document.getElementById("dtext")
const btn = document.getElementById("submit")

let currentData = 0

let score = 0

loadQuiz()

function loadQuiz(){

    clearContent()
const realData = quizData[currentData]
    content.innerText = realData.question
    aText.innerText = realData.a
    bText.innerText = realData.b
    cText.innerText = realData.c
    dText.innerText = realData.d
}

function clearContent(){
    answerEls.forEach(answerEl => {
        answerEl.checked = false
    })
}

function getanswer(){
    let answer
    answerEls.forEach(answerEl =>{
        if(answerEl.checked){
            answer = answerEl.id
        }
        
    })
  
    return answer
}

btn.addEventListener("click", ()=>{
    const answer = getanswer()
    if(answer){
        if(answer === quizData[currentData].correct){
            score++
        }
        currentData++
    }if(currentData < quizData.length){
        loadQuiz()
    }else{
        quiz.innerHTML = `
        <h2> You have answered ${score}/ ${quizData.length} correctly</h2>

        <button onclick = "location.reload()">Reload</button>
        
        `
    }

})