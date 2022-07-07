function makeQuiz() {
    // Create a variable to hold the output.
    const output = [];

    // Use a forEach loop to loop through each of the questions.
    starWarsQuestions.forEach(
        (currentQuestion, questionNumber) => {

            // Create a variable to store the list of possible answers.
            const answers = [];

            // For each possible answer do the following. Create a radio button and set the value equal to its letter.
            for (letter in currentQuestion.answers) {

                // Add an HTML radio button
                answers.push(
                    `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
                );
            }

            // Add this question and its answers to the output.
            output.push(
                `<div class="question"> ${currentQuestion.question} </div><hr class="rule">
        <div class="answers"> ${answers.join('')} </div>`
        
            );
        }
    );

    // Combine our output list into one string of HTML and display it.
    quizHolder.innerHTML = output.join('');
}

function displayDiv() {
    var T = document.getElementById("results"),
        displayValue = "";
    if (T.style.display == "")
        displayValue = "block";

    T.style.display = displayValue;
}

function giveResults() {
    // Gather the answer containers from our quiz
    const answerHolders = quizHolder.querySelectorAll('.answers');

    // Create a counter for the correct answers.
    let numCorrect = 0;

    // Create a for loop.
    starWarsQuestions.forEach((currentQuestion, questionNumber) => {

        // Find the answer that the user has selected.
        const answerHolder = answerHolders[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerHolder.querySelector(selector) || {}).value;

        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
            // Add a correct answer to the counter
            numCorrect++;

            // Color the answers green.
            answerHolders[questionNumber].style.color = 'lightgreen';
        }
        
        else {
            // Color the answers red.
            answerHolders[questionNumber].style.color = 'red';
        }
    });

    // Display results to the user.
    if (numCorrect < 5) {
        resultsContainer.innerHTML = `Have you even seen Star Wars? You seem more like a Star Trek fan. You got ${numCorrect} out of ${starWarsQuestions.length} correct.`;
    } 
    
    else if (numCorrect >= 6 && numCorrect <= 10) {
        resultsContainer.innerHTML = `It wasn't perfect, but you have a decent knowledge of Star Wars. You got ${numCorrect} out of ${starWarsQuestions.length} correct.`;
    } 
    
    else if (numCorrect >= 11 && numCorrect <= 14) {
        resultsContainer.innerHTML = `Not bad for a Padawan learner. You might be ready for the Jedi trials now. You got ${numCorrect} out of ${starWarsQuestions.length} correct.`;
    } 
    
    else {
        resultsContainer.innerHTML = `With the knowledge you have, you might be more powerful than Master Yoda. May the force be with you! You got ${numCorrect} out of ${starWarsQuestions.length} correct.`;
    }
}

const quizHolder = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const starWarsQuestions = [{
        question: "Who are the only two characters who appear in every Star Wars movie?",
        answers: {
            a: "Luke Skywalker & Darth Vader",
            b: "Master Yoda & Obi-Wan Kenobi",
            c: "C3PO & R2-D2"
        },
        correctAnswer: "c"
    },
    {
        question: "Who played Princess Leia?",
        answers: {
            a: "Emma Watson",
            b: "Nicole Kidman",
            c: "Carrie Fisher"
        },
        correctAnswer: "c"
    },
    {
        question: "Who created Star Wars?",
        answers: {
            a: "Lucas Joyner",
            b: "George Clooney",
            c: "Steven Spielberg",
            d: "George Lucas"
        },
        correctAnswer: "d"
    },
    {
        question: "In what year was the first Star Wars film released?",
        answers: {
            a: "1997",
            b: "1977",
            c: "2000",
            d: "1999"
        },
        correctAnswer: "b"
    },
    {
        question: "How old was Yoda when he died?",
        answers: {
            a: "25",
            b: "799",
            c: "185",
            d: "900"
        },
        correctAnswer: "d"
    },
    {
        question: "Which movie is the one where Luke finds out Vader is his father?",
        answers: {
            a: "The Empire Strikes Back",
            b: "Attack of the Clones",
            c: "Return of the Jedi",
            d: "The Force Awakens"
        },
        correctAnswer: "a"
    },
    {
        question: "Who originally played Han Solo?",
        answers: {
            a: "John Wayne",
            b: "Jim Carrey",
            c: "Tom Cruise",
            d: "Harrison Ford"
        },
        correctAnswer: "d"
    },
    {
        question: "What is the cause of Yoda’s death?",
        answers: {
            a: "Old Age",
            b: "Drowning",
            c: "A lightsaber duel",
            d: "Sickness"
        },
        correctAnswer: "a"
    },
    {
        question: "Who is known as “the Chosen One”?",
        answers: {
            a: "Luke Skywalker",
            b: "Anakin Skywalker",
            c: "General Grievous",
            d: "Han Solo"
        },
        correctAnswer: "b"
    },
    {
        question: "Darth Vader's chestpiece has some writing on it. What language is it in, and what does it translate to?",
        answers: {
            a: 'English. It translates to, "He is the greatest of them all."',
            b: 'German. It translates to, "No one shall be greater than I."',
            c: 'Arabic. It translates to, "The Sith shall prevail."',
            d: 'Ancient Hebrew. It translates to, "His deeds will not be forgiven, until he merits."'
        },
        correctAnswer: "d"
    },
    {
        question: "Who killed Qui-Gon Jinn?",
        answers: {
            a: "Darth Tankeus",
            b: "Darth Sidious",
            c: "Darth Maul",
            d: "Darth Invisible"
        },
        correctAnswer: "c"
    },
    {
        question: "Who played Mace Windu?",
        answers: {
            a: "Stephen L. Houston",
            b: "Will Smith",
            c: "Denzel Washington",
            d: "Samuel L. Jackson"
        },
        correctAnswer: "d"
    },
    {
        question: "What kind of vehicle did Rey live in?",
        answers: {
            a: "A Star Destroyer",
            b: "A Republic Outpost",
            c: "An AT-AT",
            d: "A Mos Eisley Speeder"
        },
        correctAnswer: "c"
    },
    {
        question: "Where do Luke and Obi-Wan meet Han and Chewie?",
        answers: {
            a: "Mos Eisley",
            b: "Serberus",
            c: "Kamino",
            d: "They didn't meet."
        },
        correctAnswer: "a"
    },
    {
        question: "Who is the mentor of Luke Skywalker?",
        answers: {
            a: "Darth Vader",
            b: "Obi-Wan Kenobi",
            c: "Darth Anakin Landwalker",
            d: "Han Solo"
        },
        correctAnswer: "b"
    },
];

// Call the makeQuiz function.
makeQuiz();

// Show results on button click.
submitButton.addEventListener('click', giveResults);



