let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#User-score");
const compScorePara = document.querySelector("#Comp-score");
// hamaisha jis number tk random ki range rakhni hai is sa big number ka sath multiply karna ho ga
const genCompChoice = () => {
  let options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];

  // rock, paper, scissors
};
 const drawGame = () => {
  msg.innerText = "Game was draw. Play again.";
  msg.style.backgroundColor = "yellow";
 };
 
 const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
      userScore++;
      userScorePara.innerText = userScore;
      msg.innerText = `You win! Your ${compChoice} beats ${userChoice}`;
      msg.style.backgroundColor = "green";
    } else {
      compScore++;
      compScorePara.innerText = compScore;
      msg.innerText = `You lose! ${userChoice} beats Your ${compChoice}`;
      msg.style.backgroundColor = "red";
    }
 }

const playGame = (userChoice) => {
  const compChoice = genCompChoice();
  // console.log("user choice = ", userChoice);

  //Generate computer choice -> modular

  // console.log("comp choice = ", compChoice);

  if (userChoice === compChoice){
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if(userChoice === "rock") {
      // scissors, paper
     userWin = compChoice === "paper" ? false : true;
    } else if(userChoice === "paper") {
     userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log("choice was clicked", userChoice);
    playGame(userChoice);
  });
});
