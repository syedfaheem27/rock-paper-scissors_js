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