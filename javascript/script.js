const btn=document.querySelector('button');
const div_game=document.createElement('div');
const btn_rock=document.createElement('button');
const btn_paper=document.createElement('button');
const btn_scissor=document.createElement('button');
let score_user=0,score_comp=0;
const result=document.createElement('div');
const score=document.createElement('div');


btn.addEventListener('click', (e) => {
    btn.classList.add('click');
    Rock_Paper_Scissor();
    function Rock_Paper_Scissor() {
        div_game.classList.add('box');
        document.querySelector('body')
        .appendChild(div_game);
        btn_rock.textContent="Rock";
        btn_paper.textContent="Paper";
        btn_scissor.textContent="Scissor";
        btn_rock.dataset.id='0';
        btn_paper.dataset.id='1';
        btn_scissor.dataset.id='2';
        div_game.appendChild(btn_rock);
        div_game.appendChild(btn_paper);
        div_game.appendChild(btn_scissor); 
        }
    });   
    div_game.addEventListener('click',(e) => {
        if(!e.target.dataset.id) return;
        let user_choice=e.target.dataset.id,
        comp_choice=Math.floor(Math.random()*3);//0-rock,1-paper,2-scissor
        playRound(user_choice,comp_choice);
    });
    function playRound(u,c) {
        result.textContent=" ";
        score.textContent=" ";
        document.querySelector('body')
        .appendChild(result);
        document.querySelector('body')
        .appendChild(score);       
        if(u==0){
            if(c==0){
                result.textContent="Computer chooses rock and it's a tie.";
                score.textContent="User_score="+score_user + " and Computer_score="+score_comp;
            }
            else if(c==1){                
                result.textContent="Computer chooses paper and wins.";
                score_comp+=1;
                score.textContent="User_score="+score_user + " and Computer_score="+score_comp;              
            }
            else {
                result.textContent="Computer chooses scissor and loses.";
                score_user+=1;
                score.textContent="User_score="+score_user + " and Computer_score="+score_comp;
            }
        }
        else if(u==1){
            if(c==0){
                score_user+=1;
                result.textContent="Computer chooses rock and loses.";
                score.textContent="User_score="+score_user + " and Computer_score="+score_comp;
            }
            else if(c==1){                
                result.textContent="Computer chooses paper and it's a tie.";
                score.textContent="User_score="+score_user + " and Computer_score="+score_comp;              
            }
            else {
                result.textContent="Computer chooses scissor and wins.";
                score_comp+=1;
                score.textContent="User_score="+score_user + " and Computer_score="+score_comp;
            }

        }
        else {
            if(c==0){
                result.textContent="Computer chooses rock and wins.";
                score_comp+=1;
                score.textContent="User_score="+score_user + " and Computer_score="+score_comp;
            }
            else if(c==1){                
                result.textContent="Computer chooses paper and loses.";
                score_user+=1;
                score.textContent="User_score="+score_user + " and Computer_score="+score_comp;              
            }
            else {
                result.textContent="Computer chooses scissor and it's a tie.";
                score.textContent="User_score="+score_user + " and Computer_score="+score_comp;
            }
        }
    }  
    
