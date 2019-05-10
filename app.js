//variables for all three choices//
const rockEle = document.getElementById("rock")
const scissorEle = document.getElementById("scissor")
const paperEle = document.getElementById("paper")

const choices = ["rock", "scissor", "paper"]

//logic to randomly selection (computer side)//
var computerSelection = () => {
    var selection = choices[Math.floor(Math.random() * choices.length)]
    console.log(selection)

}



