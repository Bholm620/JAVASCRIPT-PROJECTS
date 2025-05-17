myFunction = function () {
    return "This is my function";
}

//This variable keeps track of whose turn it is.
let activePlayer = 'X';
//This array stores an array of m,oves
let selectedSquares = [];

//This function is for placing an X or O in a square
function placeXOorO(squareNumber) {
    //this condition ensures a square hasn't been selected
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //this variable retrieves the html element that was clicked
        let select = document.getElementById(squareNumber);
        //this checks who's turn it is
        if (activePlayer === 'X') {
            select.style.backgroundImage = 'url("images/x.png")';
        } else {
            select.style.backgroundImage = 'url("images/o.png")';
        }
        //squareNumber adn active player are concentrated together and added to array
        selectedSquares.push(squareNumber + activePlayer);
        checkWinConditions();
        if (activePlayer === 'X') {
            activePlayer = 'O';
        } else {
            activePlayer = 'X';
        }

        //placement sound
        audio('./media/place.mp3');
        if (activePlayer === 'O') {
            disableClick();
            setTimeout(function () { computersTurn(); }, 1000);
        }
        return true;
    }
    //this function results in random square cpu hit
    function computersTurn() {
        //boolean
        let success = false;
        let pickASquare;
        while (!success) {
            pickASquare = String(Math.floor(Math.random() * 9));
            if (placeXOorO(pickASquare)) {
                placeXOorO(pickASquare);
                success = true;
            }
        }
    }

    //this function parses the selectsquare array to search for a win condition
    function checkWinConditions() {
        if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }
        else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
        else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }
        else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }
        else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }
        else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
        else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
        else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }
        else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }
        else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
        else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
        else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }
        else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }
        else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
        else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }
        else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }
        else if (selectedSquares.length >= 9) {
            audio('./media/tie.mp3');
            setTimeout(function () { resetGame(); }, 500);
        }

        function arrayIncludes(squareA, squareB, squareC) {
            const a = selectedSquares.includes(squareA);
            const b = selectedSquares.includes(squareB);
            const c = selectedSquares.includes(squareC);
            if (a === true && b === true && c === true) { return true; }

        }
    }
}

function disableCLick() {
    //this makes our bodymunclickable
    body.style.pointerEvents = 'none';
    setTimeout(function() { body.style.pointerEvents = 'auto';}, 1000);

}

function audio(audioURL) {
    let audio = new Audio(audioURL);
    audio.play();
}
