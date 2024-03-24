

const presidents = {
    "Nnamdi Azikiwe": 1904,
    "Shehu Shagari": 1925,
    "Olusegun Obasanjo": 1937,
    "Umaru Musa Yar'Adua": 1951,
    "Goodluck Jonathan": 1957,
    "Muhammadu Buhari": 1942
  };
  
  const quizForm = document.getElementById('quizForm');
  const quizQuestions = document.getElementById('quizQuestions');
  let score = 0;
  let failedQuestions = [];
  
  function validateYear(year) {
    return /^1\d{3}$/.test(year);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const cohortNumber = document.getElementById('cohortNumber').value;
    const passcode = document.getElementById('passcode').value;
  
    for (const [president, birthYear] of Object.entries(presidents)) {
        let answer = prompt(`What is the birth year of ${president}?`);
  
        if (!validateYear(answer)) {
            alert("You have entered the wrong format. Please enter the year in YYYY format starting with 1.");
            return;
        }
  
        answer = parseInt(answer);
        if (answer === birthYear) {
            score += 10;
        } else {
            failedQuestions.push({ president, birthYear });
        }
    }
  
    const percentageScore = (score / (Object.keys(presidents).length * 10)) * 100;
  
    // Generate HTML output
    let htmlOutput = `<h2>Quiz Result</h2>
    <p>Username: ${username}</p>
    <p>Cohort Number: ${cohortNumber}</p>
    <p>Password: ${passcode}</p>
    <p>Score: ${percentageScore}%</p>
    <h3>Failed Questions</h3>
    <ul>`;
  
    failedQuestions.forEach(question => {
        htmlOutput += `<li>${question.president} - Birth Year: ${question.birthYear}</li>`;
    });
  
    htmlOutput += '</ul>';
  
    // Display the result
    quizQuestions.innerHTML = htmlOutput;
  }
  
  quizForm.addEventListener('submit', handleSubmit);
  