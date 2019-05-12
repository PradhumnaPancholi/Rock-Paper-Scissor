//variables for all three choices//
const rockEle = document.getElementById("rock")
const scissorEle = document.getElementById("scissor")
const paperEle = document.getElementById("paper")

const result = document.getElementById("result")
const rethrowBtn = document.querySelector(".rethrow")

const choices = ["r", "s", "p"]
let compInput = ""
let userInput = ""

//logic to randomly selection (computer side)//
var computersSelection = () => {
    var selection = choices[Math.floor(Math.random() * choices.length)]
    compInput = selection

}

//function for user's input choice//
rockEle.addEventListener("click", function(event) {
    userInput = event.target.value
    getResult()
})

scissorEle.addEventListener("click", function(event) {
    userInput = event.target.value
    getResult()
})

paperEle.addEventListener("click", function(event) {
    userInput = event.target.value
    getResult()
})

//function to compare inputs and get result//
var getResult = () => {
    computersSelection()
    
    //Switch to compare input and declare result//
    switch(userInput+compInput){
        case "rs":
        case "pr":
        case "sp":
            result.textContent = "You won!!!"
            break;
        case "rr":
        case "ss":
        case "pp":
            result.textContent = "It's an Tie"
            rethrowBtn.classList.remove("hide")
            rockEle.classList.add("hide")
            scissorEle.classList.add("hide")
            paperEle.classList.add("hide")
            break;
        case "rp":
        case "ps":
        case "sr":
            result.textContent = "Sorry, You lost"
            break;            
    }

}



