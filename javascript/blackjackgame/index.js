
let firstCard 
let secondCard 
let randomNo
let sum
let cards = []
let isAlive = true
let hasBlackjack = false

let message = ""
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")






function getRandomNo() {
        randomNo = Math.floor(Math.random() * 13) + 1
        if(randomNo > 10)
        return 10
        else if(randomNo === 1)
        return 11
        else
        return randomNo
    }    

/////// randerCard
function randerCard(){
    cardsEl.textContent = "Cards: " + " "
    for(let i=0; i<cards.length; i++)
    cardsEl.textContent += cards[i] + " "

    sumEl.textContent = "Sum: " + sum
    if (sum < 21){
    message = "Do you want to draw another card? "
    }
    else if (sum === 21){
    message = "Wohoo! You have won the Blackjack!"
    hasBlackjack = true
    }
    else{
    message = "Oops! You are out of the game!"
    isAlive = false
    }
    messageEl.textContent = message
}
////////////////////////////////////////////////////
//////// start game
function startGame() {
    isAlive  = true
    
    firstCard = getRandomNo()
    secondCard = getRandomNo()
 cards = [firstCard , secondCard]
 sum = firstCard + secondCard
  randerCard()
        
        
    
  }



  /////////////////////////////////////////////////////
 //////////// new card
 function newCard(){
    if(isAlive === true && hasBlackjack == false){
        let card = getRandomNo()
        sum += card
        cards.push(card)
        randerCard()
    }
 }