
let userScore= 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () =>{
    const options = ["rock","paper","scissor"];
  const randInx =  Math.floor(Math.random() * 3);
 return options[randInx];
    
}

const drawGame = () =>{
    console.log("game was draw!")
    msg.innerHTML ="Game Was Draw! Play Again";
    msg.style.backgroundColor = "rgb(0, 30, 49)";
};
const showWinner =(userWin , compChoice,userChoice)=>{
   if(userWin === true){
      userScore++;
      userScorePara.innerHTML =userScore;
       msg.innerHTML = `You Win! Your ${userChoice} beats ${compChoice}`;
       msg.style.backgroundColor = "green";
       
   }
   else{
       compScore++;
       compScorePara.innerHTML = compScore;
       msg.innerHTML = `You Lost. ${compChoice} beats ${userChoice}`;
       msg.style.backgroundColor = "red";
   }
};

const playGame = (userChoice)=>{
    console.log("user choice = ",userChoice);
   //  Generate conmputer choice 
   const compChoice = genCompChoice();
   console.log("computer choice=",compChoice);

   if(userChoice === compChoice){
       //draw game
       drawGame();
   }
   else{
       let userWin = true ;
       if(userChoice === "rock"){
           //comp choice will be scissors / paper
           userWin = compChoice === "paper" ? false : true;
       }
       else if(userChoice === "paper"){
            //comp choice will be scissors / rock
           userWin = compChoice === "scissor" ? false : true;
       }
       else{
            //comp choice will be rock / paper
            userWin = compChoice === "rock" ? false :  true;
       }
       showWinner(userWin, compChoice, userChoice);
   }
};

//  this for user choice
choices.forEach((choice)=>{
   //  console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id")
       // console.log("choice was clicked",userChoice);
       playGame(userChoice);
    });
});
