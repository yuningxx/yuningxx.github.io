
var score = 0;

function startQuiz() {
    score = 0;
    startQuiz1();
}

function startQuiz1() {
    let menu = document.getElementById("start-menu");
    let quiz1 = document.getElementById("quiz1");
    menu.classList.toggle("hidden");
    quiz1.classList.toggle("hidden");
    
}

function submitQ1(answer) {
    if (answer == "D.C.") {
        score++;
    }
    startQuiz2();
}

function startQuiz2() {
    let quiz1 = document.getElementById("quiz1");
    let quiz2 = document.getElementById("quiz2");
    quiz1.classList.toggle("hidden");
    quiz2.classList.toggle("hidden");
    
}

function submitQ2(answer) {
    if (answer == "Alaska") {
        score++;
    }
    startQuiz3();
}

function startQuiz3() {
    let quiz2 = document.getElementById("quiz2");
    let quiz3 = document.getElementById("quiz3");
    quiz2.classList.toggle("hidden");
    quiz3.classList.toggle("hidden");
    
}

function submitQ3(answer) {
    if (answer == "Berkeley") {
        score++;
    }
    startQuiz4();
}

function startQuiz4() {
    let quiz3 = document.getElementById("quiz3");
    let quiz4 = document.getElementById("quiz4");
    quiz3.classList.toggle("hidden");
    quiz4.classList.toggle("hidden");
    
}

function submitQ4(answer) {
    if (answer == "Berkeley") {
        score++;
    }
    startQuiz5();
}

function startQuiz5() {
    let quiz4 = document.getElementById("quiz4");
    let quiz5 = document.getElementById("quiz5");
    quiz4.classList.toggle("hidden");
    quiz5.classList.toggle("hidden");
    
}

function submitQ5(answer) {
    if (answer == "Seattle") {
        score++;
    }
    startQuiz6();
}

function startQuiz6() {
    let quiz6 = document.getElementById("quiz6");
    let quiz5 = document.getElementById("quiz5");
    quiz6.classList.toggle("hidden");
    quiz5.classList.toggle("hidden");
    
}

function submitQ6(answer) {
    if (answer == "Berkeley") {
        score++;
    }
    startQuiz7();
}

function startQuiz7() {
    let quiz6 = document.getElementById("quiz6");
    let quiz7 = document.getElementById("quiz7");
    quiz6.classList.toggle("hidden");
    quiz7.classList.toggle("hidden");
    
}

function submitQ7(answer) {
    if (answer == "California") {
        score++;
    }
    finishQuiz();
}

function finishQuiz() {
    let quiz7 = document.getElementById("quiz7");
    let finish_page = document.getElementById("finish");
    quiz7.classList.toggle("hidden");
    finish_page.classList.toggle("hidden");
    document.getElementById("final-score").innerHTML = score;
}

function restartQuiz() {
    let finish_page = document.getElementById("finish");
    let menu_page = document.getElementById("start-menu");
    finish_page.classList.toggle("hidden");
    menu_page.classList.toggle("hidden");
    
}
