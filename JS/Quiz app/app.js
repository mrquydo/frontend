const quizInfo = [
    {
        question: "Tôi đã học lạp trình được bao lâu?",
        a: "1 tháng",
        b: "2 tháng",
        c: "3 tháng",
        d: "4 tháng",
        correctAns: "c-ans",
    },
    {
        question: "HTML là viết tắt của cái gì?",
        a: "Học Tới Mệt Lả",
        b: "HyperText Markup Language",
        c: "How To Make Lachos",
        d: "Học Thôi Má La",
        correctAns: "b-ans",
    },
    {
        question: "Tôi đang học ngôn ngữ lập trình gì?",
        a: "JavaScript",
        b: "PHP",
        c: "Python",
        d: "C++",
        correctAns: "a-ans",
    },
    {
        question: "Tổng thống Mỹ là ai?",
        a: "Donal Trump",
        b: "Joe Biden",
        c: "Mr Quydo",
        d: "Sam",
        correctAns: "b-ans",
    },
    {
        question: "Iron man là nhân vật trong vũ trụ điện ảnh nào?",
        a: "DC",
        b: "VTV",
        c: "Disney",
        d: "Marvel",
        correctAns: "d-ans",
    },
];

const quiz = document.getElementById('quiz');
const answerEles = document.querySelectorAll('.answer');
const questionEle = document.querySelector('#question');
const aText = document.getElementById('a_text');
const bText = document.getElementById('b_text');
const cText = document.getElementById('c_text');
const dText = document.getElementById('d_text');
// const submit = document.getElementById('submit-ans');

let currentQuizIndex = 0;
let totalScore = 0;

function showQuiz(){

    removeSelected();

    let currentQuizInfo = quizInfo[currentQuizIndex];

    questionEle.innerHTML = currentQuizInfo.question;
    aText.innerHTML = currentQuizInfo.a;
    bText.innerHTML = currentQuizInfo.b;
    cText.innerHTML = currentQuizInfo.c;
    dText.innerHTML = currentQuizInfo.d;

}

function getSelected(){
    let selectedAns = undefined;
    answerEles.forEach((answerEle) => {
        if(answerEle.checked){
            selectedAns = answerEle.id
        }
    });
    return selectedAns;
}

function removeSelected(){
    let selectedAns = undefined;
    answerEles.forEach((answerEle) => {
        answerEle.checked = false;
    });
}

function submit(){
    let selectedAns = getSelected();

    if(selectedAns === quizInfo[currentQuizIndex].correctAns){
        totalScore++;
    }
    currentQuizIndex++;

    if(currentQuizIndex < quizInfo.length){
        showQuiz();
    }

    else{
        questionEle.innerHTML = "Số câu đúng :" + totalScore + '/' + quizInfo.length;
    }
}

showQuiz();