$('document').ready(function() {
  $('#start-button').on('click', beginGame);
  function beginGame() {
    $('#start-screen').toggleClass('visually-hidden');
    $('#entire-game').toggleClass('visually-hidden');
    $('#start-screen').on('click', function() {
      $('#show-equation').animate({fontSize: '50px'}, 2000);
    });
  }

  var currentQuestion;
  var interval;
  var timeLeft = 10;
  var score = 0;
  var highScore = 0;
  
  var updateTimeLeft = function (amount) {
    timeLeft += amount;
    $('#show-seconds').text("Time left: " + timeLeft);
    if (score > highScore) highScore = score;
    document.getElementById('high-score').innerHTML = "High Score: " + highScore;
  };

  var updateScore = function (amount) {
    score += amount;
    $('#current-score').text("Current score: " + score);
  };
  
  var startGame = function () {
    if (!interval) {
      if (timeLeft === 0) {
        updateTimeLeft(10);
        updateScore(-score);
        $('#show-seconds').css('color', 'black');
      }
      interval = setInterval(function () {
        updateTimeLeft(-1);
        if (timeLeft <= 3) {
          $('#show-seconds').css('color', 'red');
        } else if (timeLeft < 8) {
          $('#show-seconds').css('color', 'yellow');
        }
        if (timeLeft === 0) {
          clearInterval(interval);
          interval = undefined;
        }
      }, 1000);  
      
    }

    

    var slider = document.getElementById("number-limit");
    var output = document.getElementById("limit-number");
    output.innerHTML = slider.value;

    slider.oninput = function() {
    output.innerHTML = this.value;  
    }
  }; 

  var randomNumberGenerator = function (size) {
    return Math.ceil(Math.random() * size);
  };
  
  var questionGenerator = function () {
    var question = {};
    var num1 = randomNumberGenerator(10);
    var num2 = randomNumberGenerator(10);
    
    question.answer = num1 + num2;
    question.equation = String(num1) + " + " + String(num2);

    if($("#addition").prop('checked')){
      question.answer = num1 + num2;
      question.equation = String(num1) + " + " + String(num2);
    }
  
  if($("#subtraction").prop('checked')){
      question.answer = num1 - num2;
      question.equation = String(num1) + " - " + String(num2);
    }
  
  if($("#multiplication").prop('checked')){
      question.answer = num1 * num2;
      question.equation = String(num1) + " * " + String(num2);
    }
  
  if($("#division").prop('checked')){
    for(i=2; i<=10; i++){
      dividend=num1%i;
      if(dividend===0){
        num2=i;
        break;
      } else {
        num1 = randomNumberGenerator(100);
        i=2;
        }
      }
      question.answer = num1 / num2;
      question.equation = String(num1) + " / " + String(num2);
    }      
    return question;
  };
  
  var renderNewQuestion = function () {
    currentQuestion = questionGenerator();
    $('#show-equation').text(currentQuestion.equation);  
  };
  
  var checkAnswer = function (userInput, answer) {
    if (userInput === answer) {
      renderNewQuestion();
      $('#begin-game').val('');
      updateTimeLeft(+1);
      updateScore(+1);
    }
  };
  
  $('#begin-game').on('click', function () {
    startGame();
  });
  $('#begin-game').on('keyup', function () {
    checkAnswer(Number($(this).val()), currentQuestion.answer);
    renderNewQuestion();
  });
  renderNewQuestion();
  
});