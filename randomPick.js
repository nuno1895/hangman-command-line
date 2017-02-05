// Choose Random Word

/**
 * Available words
 */
var wordArray = [
    ['SUPERMAN','BATMAN','WONDER WOMAN','THE FLASH','AQUAMAN','CYBORG','BATGIRL','ROBIN','NIGHTWING','BLACK CANARY','HAWKGIRL','GREEN ARROW','SUPERGIRL'],
    ['JOKER','LUX LUTHOR','DARKSEID','SINESTRO','BRAINIAC','BLACK ADAM','DEATHSTROKE','VANDAL SAVAGE','PROFESSOR ZOOM','DOOMSDAY','CATWOMAN','BIZZARO','HARLEY QUINN']
];

/**
 * Select a Category
 */
var randomCategory = function() {
    if (randomizeWord.categorySelect === wordArray[0]) {
        currentCategory = "Hero";
    } else if (randomizeWord.chosenCategory === wordArray[1]) {
        currentCategory = "Villain";
    }
};

/**
 * Choose a random word based on category
 */
var randomizeWord = function(categorySelect, wordSelect) {
    this.categorySelect = wordArray[Math.floor(Math.random() * wordArray.length)];
    this.wordSelect = this.categorySelect[Math.floor(Math.random() * this.categorySelect.length)];
    if (this.categorySelect === wordArray[0]) {
        currentCategory = "Hero";
    } else if (this.categorySelect === wordArray[1]) {
        currentCategory = "Villain";
    }
};

module.exports = randomizeWord;