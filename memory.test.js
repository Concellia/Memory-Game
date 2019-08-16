var jsdom = require("jsdom");
var fs = require("fs")
const index = fs.readFileSync("./memory.html", "utf-8")
    const {JSDOM} = jsdom
    const { document } = (new JSDOM(index)).window;
    global.document = document;
//variable decleration
var cardsArray = createCardsArray("card")
var card1;
var card2;
var match = [];
var hasflip = false;
//The function takes the class name and create an array of the classes
function createCardsArray(className){
    var arr = document.getElementsByClassName(className);
    var cards = [...arr]
    return cards
}

function cardsFlipping(){    
    this.classList.add("show")
    if(!hasflip){
        hasflip = true;
        card1 = this;}
    else{
        hasflip = false;
        card2 = this;
        if(card1.dataset.name === card2.dataset.name){
            card1.removeEventListener("click", cardsFlipping)
            card2.removeEventListener("click", cardsFlipping)
            match.push(card1)
            setTimeout(()=>{
                if(match.length === 8){
                    if(alert("Congratulations you won!!!: Click ok to play again")){
                    }else{
                    window.location.reload();}}
                    },1000)}
                else{
                    setTimeout(()=>{
                    card1.classList.remove("show")
                    card2.classList.remove("show")
                    },1000)}}}
//Add event listener each time a card is clicked.
function eventListener(){
    
    for(let i = 0; i<cardsArray.length; i++){
        cardsArray[i].addEventListener("click", cardsFlipping)};
        return "an event listener has been added";
}
eventListener()


//Shuffles the cards
function shuffler(cardsArray){
    let a;
    let arr3 = [];
    cardsArray.forEach(function(arr){
    a = Math.floor(Math.random()*16)
    arr.style.order = a
    arr3.push(arr)
    })

 return arr3
};

//Set the timer for the game
function timer(){
    var times = 60;
var timer =  setInterval(function(){
    if(times == 0){
        clearInterval(timer)
    if(alert("Time up, you lost!! ")){
        }
    else{
        window.location.reload();
        };}
             times--;
             document.getElementById("time-passed").innerHTML = times
            },1000)
}
timer()

//start the game
// function start(){
// shuffler(cardsArray)}


exports.createCardsArray = createCardsArray
exports.shuffler = shuffler
exports.cardsArray = cardsArray
exports.cardsFlipping = cardsFlipping
exports.eventListener = eventListener