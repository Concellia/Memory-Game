var jsdom = require("jsdom");
var fs = require("fs")
var memory = require("../memory.test")
var createCardsArray = memory.createCardsArray
var cardsArray = memory.cardsArray
var shuffler = memory.shuffler
var eventListener = memory.eventListener
var cardsFlipping = memory.cardsFlipping

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
  it("should be able to shuffle the cards when passed an array of cards", function(){
    
  expect(shuffler(cardsArray)).toBeDefined()
  expect(shuffler(cardsArray)).not.toBe(cardsArray)
  })
  it("should be able to add an event listener to the the cards", function(){

    expect(eventListener()).toBeDefined()
    expect(eventListener()).toBe('an event listener has been added')

  })
})

    
 
