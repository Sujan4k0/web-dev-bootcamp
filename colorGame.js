/*
* Note: Much refactoring could be done to this code; I simply found it
* more valuable to move onto the Udemy course rather than take the time to
* refactor.
*/

// When a square is clicked, determine if it's correct or incorrect
// Follow through on appropriate action (Wrong = hide square, Correct = change
// all squares to correct color) + update message to correct or incorrect
function clickedSquare() {

    var h1 = document.querySelector("h1");
    var message = document.getElementById("message");
    var clickedColor = this.style.background;
    if (clickedColor === pickedColor) {

        h1.style.background = pickedColor;
        message.textContent = "Correct";
        resetButton.textContent = "Play Again?"
        changeColorsToCorrect();
    }
    else {

        message.textContent = "Try Again";
        this.style.background = "#232323";
    }
}

// Change the color of all squares to the correct color
function changeColorsToCorrect() {

    for (var i = 0; i < numberOfColors; i++) {
        squares[i].style.background = pickedColor;
    }
}

// Get a random RGB value (0 - 255)
function randomColor() {

    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + blue + ", " + green + ")";
}

// fill array with random RGB values
function getColors() {

    var colors = new Array(numberOfColors);
    for (var i = 0; i < colors.length; i++) {

        colors[i] = randomColor();
    }

    return colors;
}

// pick a random index to be the correct color
function pickCorrectColor() {

    return colors[Math.floor(Math.random() * (numberOfColors))];
}

// change the HTML title to be that of the RGB value we're guessing
function setColorInTitle() {

    // Randomly pick an index of the correct color and put its RGB value
    // in the title
    var colorInTitle = document.getElementById("correctColor");
    colorInTitle.textContent = pickedColor;
}

// fill the squares with the colors
function populateSquares() {

    // Get all the squares and give them a color and event handler
    var squares = document.querySelectorAll(".square");
    for (var i = 0; i < numberOfColors; i++) {

        squares[i].style.background = colors[i];
        squares[i].addEventListener("click", clickedSquare);
    }

    // hide the other 3 squares if we only have 3
    if (numberOfColors === 3) {

        for (var i = 3; i < 6; i++) {

            squares[i].style.background = "#232323";
        }
    }

    return squares;
}

// plays one instance of a game
function playAGame() {

    // reset header background to default
    var h1 = document.querySelector("h1").style.background = "steelBlue";

    colors = getColors(); // get an array of RGB values
    pickedColor = pickCorrectColor(); // get the correct RGB value
    setColorInTitle(); // change the title to be that of the correct value
    squares = populateSquares(); // color the squares accordingly
}

var colors; // array of RGB values
var pickedColor; // value we're guessing
var squares; // all HTML elements w/ class "square"
var numberOfColors = 6; // hard mode = 6, easy = 3

// Gross double code for hard and easy
var hardButton = document.getElementById("hard").addEventListener("click", function() {

    this.classList.add('selected');
    document.getElementById("easy").classList.remove('selected');
    numberOfColors = 6;
    playAGame();
});
var easyButton = document.getElementById("easy").addEventListener("click", function() {

    this.classList.add('selected');
    document.getElementById("hard").classList.remove('selected');
    numberOfColors = 3;
    playAGame();
});
var resetButton = document.getElementById("reset");
reset.addEventListener("click", playAGame);
playAGame(); // primer
