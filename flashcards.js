var Basic = require("./basicCard.js");
var Cloze = require("./clozeCard.js");

var bTest = new Basic;
bTest.newCard("What is this?","A flashcard");

var cTest = new Cloze;
cTest.newCard("This is a flashcard.", "broken");


//basic properties: .front, .back
console.log(bTest.front);
console.log(bTest.back);

//cloze properties: .fulltext, .cloze, .partial
console.log(cTest.fulltext);
console.log(cTest.cloze);
console.log(cTest.partial);

var firstPresident = new Basic;
firstPresident.newCard("Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log(firstPresident.front); 

// "George Washington"
console.log(firstPresident.back); 

var firstPresidentCloze = new Cloze;
firstPresidentCloze.newCard("George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial);

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText);

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new Cloze;
brokenCloze.newCard("This doesn't work", "oops");