// Convert Word to Blanks
var scrambleWord= require('./letter.js');

/**
 * Check word against userChoice
 */
var auditWord = function(word, inputChoice) {
    this.word = word;
    this.letters = [];
    this.splitWord = word.split('');
    this.inputChoice = inputChoice;
    this.createBlanks = function() {
        for (var i = 0; i < this.word.length; i++) {
            var newLet = new scrambleWord(this.word[i]);
            if (this.word[i].valueOf() !== " ") {
                this.letters.push(newLet.blank());
            } else {
                this.letters.push(newLet.space());
            }
        }
    };
    this.check = function(guessedLetter) {
        var lower = guessedLetter.toLowerCase();
        var upper = guessedLetter.toUpperCase();
        for (var i = 0; i < this.letters.length; i++) {
            if (this.word[i].valueOf() === lower || this.word[i].valueOf() === upper) {
                this.letters[i] = this.word[i].valueOf();
            }
        }
        var j = (this.word.indexOf(lower));
        if (j === -1) {
            tries--;
        }
    };
    this.wordFound = function() {
        if (this.letters.join('') === this.word) {
            found = true;
        } else {
        }
    };
    this.render = function() {
        return this.letters.join(' ');
    };
};

module.exports = auditWord;