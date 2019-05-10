//variables for all three choices//
const rockEle = document.getElementById("rock")
const scissorEle = document.getElementById("scissor")
const paperEle = document.getElementById("paper")

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
    console.log(compInput, userInput)
    
    //Switch to compare input and declare result//
    switch(userInput+compInput){
        case "rs":
        case "pr":
        case "sp":
            console.log("You won")
            break;
        case "rr":
        case "ss":
        case "pp":
            console.log("It's an Tie")
            break;
        case "rp":
        case "ps":
        case "sr":
            console.log("You lose")
            break;
    }
}



