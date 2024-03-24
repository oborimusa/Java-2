


var attempts = 0;
    var maxAttempts = 4;
    var computerNumber;

    function startGame() {
      var username = document.getElementById('username').value;
      var cohort = document.getElementById('cohort').value;

      if (username.trim() === "" || cohort.trim() === "") {
        alert("Please fill in all fields.");
        return;
      }

      document.getElementById('loginForm').style.display = "none";
      document.getElementById('game').style.display = "block";
    }

    function checkGuess() {
      var username = document.getElementById('username').value;
      var cohort = document.getElementById('cohort').value;
      var userGuess = parseInt(document.getElementById('userGuess').value);
      var resultMessage = document.getElementById('result');
      var luckyNumber = document.getElementById('luckyNumber');

      if (attempts === 0) {
        var min = 20;
        var max = 40;
        computerNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      }

      if (attempts < maxAttempts) {
        attempts++;
        if (userGuess >= 20 && userGuess <= 40) {
          if (userGuess === computerNumber) {
            resultMessage.textContent = "Congratulations, " + username + " from Cohort " + cohort + "! You have won!";
          } else {
            resultMessage.textContent = "Sorry, " + username + " from Cohort " + cohort + ", try again.";
          }
        } else {
          resultMessage.textContent = "Please enter a number between 20 and 40.";
        }
      } else {
        resultMessage.textContent = "Sorry, " + username + " from Cohort " + cohort + ", you've reached the maximum number of attempts. Better luck next time!";
        document.getElementById('userGuess').disabled = true;
        document.querySelector('button').disabled = true;
        luckyNumber.textContent = "The lucky number was: " + computerNumber;
        luckyNumber.style.display = "block";
      }
    }