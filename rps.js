const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBand_div = document.querySelector(".Score-Band");
const result_div = document.querySelector(".Result");
const rock_div = document.getElementById("R");
const paper_div = document.getElementById("P");
const scissor_div = document.getElementById("S");


function getComputerChoice() {
  const choices = ['R', 'P', 'S'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}






