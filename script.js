
const quizQuestions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Rome"],
      correctAnswer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars"
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "Cu", "Fe"],
      correctAnswer: "Au"
    },{
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Charles Dickens", "Mark Twain", "Jane Austen"],
        correctAnswer: "William Shakespeare"
        },
        {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAnswer: "Pacific Ocean"
        },
        {
        question: "What is the speed of light?",
        options: ["300,000 km/s", "150,000 km/s", "1,000,000 km/s", "500,000 km/s"],
        correctAnswer: "300,000 km/s"
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  let timeLeft = 10;
  let timerInterval;

  function startQuiz() {
    document.getElementById("start-button").style.display = "none";
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 30;

    startTimer();
    showQuestion();
  }

  function showQuestion() {
    const question = quizQuestions[currentQuestionIndex];
    document.getElementById("question-text").textContent = question.question;

    const answerButtons = document.getElementById("answer-buttons");
    answerButtons.innerHTML = "";

    question.options.forEach(option => {
      const button = document.createElement("button");
      button.textContent = option;
      button.onclick = () => checkAnswer(option);
      answerButtons.appendChild(button);
    });
  }

  function checkAnswer(answer) {
    const correct = quizQuestions[currentQuestionIndex].correctAnswer;

    if (answer === correct) {
      score++;
      alert("Correct!");
    } else {
      alert("Wrong!");
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
      showQuestion();
    } else {
      endQuiz();
    }
  }

  function startTimer() {
    const timerDisplay = document.getElementById("timer");
    timerDisplay.textContent = `Time left: ${timeLeft}s`;

    timerInterval = setInterval(() => {
      timeLeft--;
      timerDisplay.textContent = `Time left: ${timeLeft}s`;

      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        endQuiz();
      }
    }, 1000); 
  }

  function endQuiz() {
    clearInterval(timerInterval);
    document.getElementById("question-text").textContent = `Quiz Over! Your score is ${score}/${quizQuestions.length}`;
    document.getElementById("answer-buttons").innerHTML = "";

    const startButton = document.getElementById("start-button");
    startButton.textContent = "Restart Quiz";
    startButton.style.display = "inline-block";
  }
   Document.getElementById("start-button").onclick = startQuiz;
  document.getElementById("start-button").style.display = "inline-block";

  