var auditWord = require('./word.js');
var randomizeWord = require('./randomPick.js');
var inquirer = require('inquirer');
var colors = require('colors')


var startGame = function() {
    gameover = false;
    found = false;
    guesses = [];
    tries = 10;
    var word = new randomizeWord();
    randomWord = word.wordSelect;
    console.log();
    console.log("\n=====================================".red);
    console.log("Welcome to DC Comics Themed Hangman".bgBlack.bold.red);
    console.log("=====================================".red);
    console.log("\nThe chosen category is:".green, currentCategory);
    console.log("\nTries remaining:".green, tries);
    currentWord = new auditWord(randomWord);
    currentWord.createBlanks();
    console.log("\n" + currentWord.render() + "\n");
    userPrompt();
};

var playAgain = function() {
    if (gameover) {
        if (tries < 1) {
            console.log("\nYou did not guess the word correctly. You lost.\n".red);
        } else {
            console.log("\nCongratulatons! You won.\n".rainbow);
        }
        inquirer.prompt([{
            type: "confirm",
            name: "again",
            message: "Would you like to play again?".blue
        }]).then(function(restart) {
            if (restart.again) {
                console.log("Great!");
                startGame();
            } else {
                console.log("\nThat's okay, come again when you feel like playing.\n".blue);
            }
        });
    }
};

var userPrompt = function() {
    currentWord.wordFound();
    if (tries < 1 || found) {
        gameover = true;
        playAgain();
    } else {
        inquirer.prompt([{
            name: "guess",
            message: "Type a letter to guess the word."
        }]).then(function(answers) {
            if (guesses.find(function(item) {
                    return item === answers.guess.toUpperCase();
                })) {
                console.log("\nYou already guessed that letter, silly. Try again.\n".red);
                userPrompt();
            } else {
                guesses.push(answers.guess.toUpperCase());
                console.log("\nYour Guesses: ".green + guesses);
                letFound = currentWord.check(answers.guess);
                console.log("\nTries remaining:".green, tries);
                console.log("\n" + currentWord.render() + "\n");
                userPrompt();
            }
        });
    }
};

startGame();