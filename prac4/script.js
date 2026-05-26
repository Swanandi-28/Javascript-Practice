const quiz = [
    {
        question: "What does HTML stands for?",
        options:["Hyper Text Markup Language", "High Text Markup Language", "Hyper Text Machine Language", "High Text Machine Language"],
        answer: "Hyper Text Markup Language"
    },

    {
        question: "What does CSS stands for?",
        options:["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
        answer: "Cascading Style Sheets"
    },

    {
        question: "How to link css file in html?",
        options:["&lt;link rel='stylesheet' href='style.css'&gt;", "&lt;style src='style.css'&gt;", "&lt;stylesheet&gt;style.css&lt;/stylesheet&gt;", "&lt;link rel='stylesheet' href='style.css'&gt;"],
        answer: "&lt;link rel='stylesheet' href='style.css'&gt;"
    },
    
    {
        question: "What does JS stands for?",
        options:["JavaScript", "JavaSource", "JustScript", "JScript"],
        answer: "JavaScript"    
    },

    {
        question: "How to link js file in html?",
        options:["&lt;script src='script.js'&gt;&lt;/script&gt;", "&lt;js src='script.js'&gt;&lt;/js&gt;", "&lt;javascript src='script.js'&gt;&lt;/javascript&gt;", "&lt;link rel='script' href='script.js'&gt;"],
        answer: "&lt;script src='script.js'&gt;&lt;/script&gt;"
    }

]


let CurrentQuestion = 0;
let score = 0;

function loadQuestion() {
    let question= document.getElementById("question");
    let options = document.getElementById("options");

    question.innerHTML = quiz[CurrentQuestion].question;
    options.innerHTML =""; 

    quiz[CurrentQuestion].options.forEach(

        function(option){
            let button = document.createElement("button");
            button.innerHTML= option;
            options.appendChild(button);
            
            button.addEventListener("click", function(){
                let result = document.getElementById("result");

                if(option === quiz[CurrentQuestion].answer){
                    score++;
                document.getElementById("score").innerHTML = "Score:" + score;
                    result.innerHTML = "Correct!";
                    result.style.color = "green";
                }
                else{
                    result.innerHTML = "Wrong! The correct answer is: " + quiz[CurrentQuestion].answer;
                    result.style.color = "red";
                }

                setTimeout(function(){
                    CurrentQuestion++;

                if(CurrentQuestion < quiz.length){
                    loadQuestion();
                    result.innerHTML = "";
                }
                else{
                    alert("Quiz Completed! Your score is: " + score);
                }
            }, 1000);
            });
        });
}
loadQuestion();
