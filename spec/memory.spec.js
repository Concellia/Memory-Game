var jsdom = require("jsdom");
var fs = require("fs")
var memory = require("../memory.test")
var createCardsArray = memory.createCardsArray
var cardsArray = memory.cardsArray
var shuffler = memory.shuffler
var cardMatch = memory.cardMatch
var cardNotMatched = memory.cardNotMatched

describe("memory game", function(){
  beforeEach(function(){
    const index = fs.readFileSync("./memory.html", "utf-8")
    const {JSDOM} = jsdom
    const { document } = (new JSDOM(index)).window;
    global.document = document;
  })
  it("should make an array from the card class", function() {
    expect(document.getElementsByClassName("card").length).toEqual(16)
    expect(createCardsArray("card")).toEqual(jasmine.any(Array))
  });
  it("should be able to shuffle the cards when passed an array of cards and return a different array of cards", function(){
    
  expect(shuffler(cardsArray)).not.toBe(cardsArray)
  })
  it("should be able remove the event listener if the cards matched and return true", function(){
    
    expect(cardMatch(cardsArray[0],cardsArray[1])).toBe(false)
    expect(cardMatch(cardsArray[0],cardsArray[8])).toBe(true)
     
  })
  it("should be able to flip the card back and hide the image if it does not match",function(){
    expect(cardNotMatched(cardsArray[0],cardsArray[1])).toBe(true)
    expect(cardNotMatched(cardsArray[0],cardsArray[8])).toBe(false)
  })
})

    
 
