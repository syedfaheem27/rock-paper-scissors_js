function getComputerChoice() {
    let num=Math.floor(Math.random()*100);
    if(num==99){
        for(let i=0;num==99;i++){
            num=Math.floor(Math.random()*100);
        }
    }
    if(num>=0&&num<33){
        return "ROCK";
    }
    else if(num>=33&&num<66){
        return "PAPER";
    }
    else {
        return "SCISSOR" ;
    }
}
function getUserChoice() {
    let str=prompt("Rock,Paper or Scissor-Enter your choice.");
    let str_user=str.toUpperCase();
    return str_user;
}
function playRound(playerSelection,computerSelection){
    if(computerSelection=="ROCK"&&playerSelection=="ROCK"){         //return 'c' if computer wins,'u' if user wins and 't' for the tie
        console.log("Player's choice = " + playerSelection);
        console.log("Computer's choice = " + computerSelection);
        console.log("It's a tie as both selections are ROCK");
        return 't';
    }
    else if (computerSelection=="ROCK"&&playerSelection=="SCISSOR"){
        console.log("Player's choice = " + playerSelection);
        console.log("Computer's choice = " + computerSelection);
        console.log("Computer wins. Rock breaks SCISSOR");
        return 'c';
    }
    else if(computerSelection=="ROCK"&&playerSelection=="PAPER"){
        console.log("Player's choice = " + playerSelection);
        console.log("Computer's choice = " + computerSelection);
        console.log("You win. PAPER wraps ROCK");
        return 'u';
    }
    else if(computerSelection=="PAPER"&&playerSelection=="ROCK"){
        console.log("Player's choice = " + playerSelection);
        console.log("Computer's choice = " + computerSelection);
        console.log("Computer wins. PAPER wraps ROCK");
        return 'c';
    }
    else if(computerSelection=="PAPER"&&playerSelection=="PAPER"){
        console.log("Player's choice = " + playerSelection);
        console.log("Computer's choice = " + computerSelection);
        console.log("It's a tie as both selections are PAPER");
        return 't';
    }
    else if (computerSelection=="PAPER"&&playerSelection=="SCISSOR"){
        console.log("Player's choice = " + playerSelection);
        console.log("Computer's choice = " + computerSelection);
        console.log("You win. SCISSOR cuts PAPER");
        return 'u';
    }
    else if(computerSelection=="SCISSOR"&&playerSelection=="ROCK"){
        console.log("Player's choice = " + playerSelection);
        console.log("Computer's choice = " + computerSelection);
        console.log("You win. ROCK breaks SCISSOR");
        return 'u';
    }
    else if(computerSelection=="SCISSOR"&&playerSelection=="PAPER"){
        console.log("Player's choice = " + playerSelection);
        console.log("Computer's choice = " + computerSelection);
        console.log("Computer wins. SCISSOR cuts PAPER");
        return 'c';
    }
    else {
        console.log("Player's choice = " + playerSelection);
        console.log("Computer's choice = " + computerSelection);
        console.log("It's a tie as both slections are SCISSOR");
        return 't';
    }
}
    
let playerChoice=getUserChoice();
    let computerChoice=getComputerChoice();
    playRound(playerChoice,computerChoice);