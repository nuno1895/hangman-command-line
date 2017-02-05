// Convert Word to Blanks

/**
 * Conversion of word to blanks
 */
var scrambleWord = function(letters) {
    this.blank = function() {
        return "_";
    };
    this.space = function() {
        return " ";
    };
};

module.exports = scrambleWord;