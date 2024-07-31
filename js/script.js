const quiz = [
    {
        "question": [
            {
                questionHeading: "Lorem Ipsum: 1",
                question: "1) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
                instText: "Lorem ipsum dolor sit amet",
                options: {
                    A: "Excepteur sint occaecat",
                    B: "Labore et dolore magna",
                    C: "Reprehenderit in voluptate velit",
                    D: "Culpa qui officia deserunt"
                },
                correctAnswer: "B",
                feedback: {
                    finalCorrect: "That's Correct",
                    tryagainFeedback: "Incorrect Selection.",
                    incorrectFeedback: "That's Incorrect",
                    correctFeedback: "The correct answer is option B"
                }
            },
            {
                questionHeading: "Lorem Ipsum: 2",
                question: "2) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
                instText: "Lorem ipsum dolor sit amet",
                options: {
                    A: "Excepteur sint occaecat",
                    B: "Labore et dolore magna",
                    C: "Reprehenderit in voluptate velit",
                    D: "Culpa qui officia deserunt"
                },
                correctAnswer: "C",
                feedback: {
                    finalCorrect: "That's Correct",
                    tryagainFeedback: "Incorrect Selection.",
                    incorrectFeedback: "That's Incorrect",
                    correctFeedback: "The correct answer is option C"
                }
            },
            {
                questionHeading: "Lorem Ipsum: 2",
                question: "3) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
                instText: "Lorem ipsum dolor sit amet",
                options: {
                    A: "Excepteur sint occaecat",
                    B: "Labore et dolore magna",
                    C: "Reprehenderit in voluptate velit",
                    D: "Culpa qui officia deserunt"
                },
                correctAnswer: "C",
                feedback: {
                    finalCorrect: "That's Correct",
                    tryagainFeedback: "Incorrect Selection.",
                    incorrectFeedback: "That's Incorrect",
                    correctFeedback: "The correct answer is option C"
                }
            },
            {
                questionHeading: "Lorem Ipsum: 2",
                question: "4) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
                instText: "Lorem ipsum dolor sit amet",
                options: {
                    A: "Excepteur sint occaecat",
                    B: "Labore et dolore magna",
                    C: "Reprehenderit in voluptate velit",
                    D: "Culpa qui officia deserunt"
                },
                correctAnswer: "C",
                feedback: {
                    finalCorrect: "That's Correct",
                    tryagainFeedback: "Incorrect Selection.",
                    incorrectFeedback: "That's Incorrect",
                    correctFeedback: "The correct answer is option C"
                }
            },
            {
                questionHeading: "Lorem Ipsum: 2",
                question: "5) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
                instText: "Lorem ipsum dolor sit amet",
                options: {
                    A: "Excepteur sint occaecat",
                    B: "Labore et dolore magna",
                    C: "Reprehenderit in voluptate velit",
                    D: "Culpa qui officia deserunt"
                },
                correctAnswer: "C",
                feedback: {
                    finalCorrect: "That's Correct",
                    tryagainFeedback: "Incorrect Selection.",
                    incorrectFeedback: "That's Incorrect",
                    correctFeedback: "The correct answer is option C"
                }
            },
            {
                questionHeading: "Lorem Ipsum: 2",
                question: "6) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
                instText: "Lorem ipsum dolor sit amet",
                options: {
                    A: "Excepteur sint occaecat",
                    B: "Labore et dolore magna",
                    C: "Reprehenderit in voluptate velit",
                    D: "Culpa qui officia deserunt"
                },
                correctAnswer: "C",
                feedback: {
                    finalCorrect: "That's Correct",
                    tryagainFeedback: "Incorrect Selection.",
                    incorrectFeedback: "That's Incorrect",
                    correctFeedback: "The correct answer is option C"
                }
            }
        ],
        "totalTimer": 4,
        finalFeedback: {
            finalCorrect: "That's Correct",
            tryagainFeedback: "Incorrect Selection.",
            incorrectFeedback: "That's Incorrect",
            correctFeedback: "The correct answer is option B"
        }
    }
];

const diffCount = document.querySelector(".count");
const area = document.querySelectorAll('[class^="area-"]');
const container = document.querySelector(".container")
const chances = document.querySelector(".chances");
// const close = document.getElementById("close")
const popup = document.querySelector(".popup")
const img = document.querySelector("img")

// popupQuiz
const quizPopup = document.getElementById("quizPopup")
const score = document.getElementById('score')

// quiz.forEach((list) => {
//     console.log(list.question)
//     console.log(list.totalTimer)
// })

let count = 6;
let matchesFind = 0;
let isCorrect = 0;
let totalQuestions = quiz[0].question.length;
let currentQuestion = 0;
let totalScore = 0;

let timerInterval;
let remainingTime;
let isPaused = false;
let correctAnswer;
let timerCompleted = false;


function resizeMap() {
    var img = document.getElementById('myImage');
    var map = document.querySelector('map[name="map"]');
    var areas = map.getElementsByTagName('area');

    var originalWidth = img.naturalWidth;
    var originalHeight = img.naturalHeight;
    var currentWidth = img.width;
    var currentHeight = img.height;

    for (var i = 0; i < areas.length; i++) {
      var originalCoords = areas[i].getAttribute('data-original-coords').split(',');
      var scaledCoords = originalCoords.map(function(coord, index) {
        if (index % 2 === 0) {
          return Math.round(coord * (currentWidth / originalWidth));
        } else {
          return Math.round(coord * (currentHeight / originalHeight));
        }
      });

      areas[i].coords = scaledCoords.join(',');
    }
  }

  // Store the original coordinates in a data attribute for reference
  document.addEventListener('DOMContentLoaded', function() {
    var areas = document.querySelectorAll('map[name="map"] area');
    areas.forEach(function(area) {
      area.setAttribute('data-original-coords', area.coords);
    });

    // Call the function initially
    resizeMap();
    
    // Call the function on window resize
    window.addEventListener('resize', resizeMap);
  });

area.forEach(ele => {
    ele.addEventListener("click", function (event) {
        onClickArea(event)
    });
})

document.querySelector("img").addEventListener("click", function () {
    // chancesTotal--;
    playAudio('incorrect.mp3')
})



function onClickArea(event) {

    let currentElement = event.target;


    let clsName = currentElement.className;
    let dataShape = currentElement.getAttribute("data-shape")

    const selector = `[data-shape="${dataShape}"]`;

    // Select all elements with the dynamic data attribute
    const elements = document.querySelectorAll(selector);

    console.log(dataShape);

    if (!currentElement.classList.contains('visited')) {
        playAudio('correct.mp3');
        count--;
        matchesFind++;
        var x = event.clientX - container.offsetLeft;
        var y = event.clientY - container.offsetTop;
        const image = document.createElement("img")
        image.src = "images/visited.png"
        image.style.position = 'absolute'
        image.style.width = '20px'
        image.style.height = '20px'
        container.appendChild(image)
        image.style.left = x + 'px';
        image.style.top = y + 'px';
        loadQuiz(currentQuestion);
        currentQuestion++;
        if (count == 0) {
            popup.style.display = "flex";
            img.style.pointerEvents = 'none'
        }
        diffCount.innerText = `${count} Left`;
    }


    elements.forEach(clss => {
        clss.classList.add('visited')
    })

}

function playAudio(audio) {
    const audioSrc = `audios/${audio}`;

    const mainAudio = new Audio(audioSrc);

    mainAudio.play();

}



function startTimer(durationInMinutes) {
    if (isPaused) {
        isPaused = false;
        timerInterval = setInterval(updateTimer, 1000);
        return;
    }

    remainingTime = durationInMinutes * 60;
    const timerContainer = document.getElementById('time');
    timerContainer.textContent = formatTime(remainingTime);

    clearInterval(timerInterval);
    timerCompleted = false;
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    if (remainingTime <= 0) {
        clearInterval(timerInterval);
        timerCompleted = true;
        setTimeout(() => checkLastQuestion('timer'))
        console.log("tiemr")
        // document.getElementById('completion-status').textContent = 'Timer completed!';
        return;
    }

    remainingTime--;
    const timerContainer = document.getElementById('time');
    timerContainer.textContent = formatTime(remainingTime);
}

function pauseTimer() {
    clearInterval(timerInterval);
    isPaused = true;
}

function isTimerCompleted() {
    return timerCompleted;
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

let totalTimer = quiz[0].totalTimer;
startTimer(totalTimer);




function loadQuiz(indx) {
    pauseTimer();
    console.log(indx)
    let curQuestion = quiz[0].question[indx].options;
    let html = ' ';
    html += `<p class="question" tabindex="0">${quiz[0].question[indx].question}</p>`
    for (const key in curQuestion) {
        if (curQuestion.hasOwnProperty(key)) {
            html += `<div class ="option">
           <input type="radio" name="options" value="${key}" id="opt${key}" class="optionbtn">  
           <label for="opt${key}">${curQuestion[key]}</label>
           </div>`
        }
    }
    html += `<button id='submit' disabled>Submit</button><div id="feedback"></div>`;
    quizPopup.style.display = 'flex';
    quizPopup.innerHTML = `<div class="wrap">${html}<button id="close">&times;</button></div>`;
    const radioButtons = document.querySelectorAll('input[name="options"]');
    radioButtons.forEach(radio => {
        radio.addEventListener('change', function () {
            enableDisableBtn(radio, indx)
        });
    });
}

function enableDisableBtn(radio, indx) {
    const submitButton = document.getElementById('submit');
    const radioButtons = document.querySelectorAll('input[name="options"]');
    const isSelected = Array.from(radioButtons).some(radio => radio.checked);
    submitButton.disabled = !isSelected;
    submitButton.classList.toggle('disabled', !isSelected);
    submitButton.addEventListener('click', function () {
        showCorrectIncorrect(radio.value, indx)
    })
}

console.log(quiz[0].question[0].feedback)

function showCorrectIncorrect(val, indx) {
    let correctAnswer = quiz[0].question[indx].correctAnswer
    let feedback = quiz[0].question[indx].feedback
    const radioButtons = document.querySelectorAll('input[name="options"]');
    let divFeedback = document.getElementById("feedback")
    document.getElementById('submit').disabled = true;
    radioButtons.forEach((btns) => {
        btns.disabled = true;
    })
    let html = "";
    console.log(feedback.finalCorrect)
    if (correctAnswer == val) {
        html += `<h2 tabindex="0" class="correct">${feedback.finalCorrect}</h2>`
        ++isCorrect;
    } else {
        html += `<h2 tabindex="0" class="incorrect">${feedback.incorrectFeedback}</h2>`
    }
    divFeedback.innerHTML = `<div class="text-container">${html}</div>`
    document.getElementById("close").style.display = 'flex';
    document.getElementById("close").addEventListener("click", closePopup)
    calculateScore();
}

function closePopup() {
    quizPopup.style.display = 'none';
    startTimer();
    checkLastQuestion('submit')
}

function calculateScore() {
    let curScore = Math.floor((isCorrect / totalQuestions) * 100);
    score.textContent = `${curScore}%`;
    totalScore = curScore;
}

function checkLastQuestion(val) {
    // console.log(val)
    let html = '';
    if (currentQuestion == totalQuestions && val == 'submit') {
        html += '<h4>Congratulations! You have successfully completed the matching activity</h4>'
        html += `<p>Your Score: ${totalScore}%</p>`
        html += `<p>Matches Find: ${(matchesFind)}</p>`
        setTimeout(() => showFinalfeedback(html))
    } else if (val == 'timer') {
        html += '<h4>Time Up! You have not completed the matching activity</h4>'
        html += `<p>Your Score: ${totalScore}%</p>`
        html += `<p>Matches Find: ${matchesFind}</p>`
        setTimeout(() => showFinalfeedback(html))
    }
}

function showFinalfeedback(txt) {
    pauseTimer();
    popup.style.display = 'flex';
    popup.innerHTML = `<div class="wrap">${txt}<button id="popClose">&times;</button></div>`;
    img.style.pointerEvents = 'none'
    document.getElementById("popClose").addEventListener("click", function () {
        popup.style.display = 'none'
    });
}