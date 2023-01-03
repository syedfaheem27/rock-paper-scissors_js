const btn=document.querySelector('button');
const div_game=document.createElement('div');
const btn_rock=document.createElement('button');
const btn_paper=document.createElement('button');
const btn_scissor=document.createElement('button');
let score_user=0,score_comp=0;

btn.addEventListener('click', (e) => {
    console.log(e.target);
    btn.classList.add('click');
    Rock_Paper_Scissor();
    function Rock_Paper_Scissor() {
        div_game.classList.add('game');
        document.querySelector('body')
        .appendChild(div_game);
        btn_rock.textContent="Rock";
        btn_paper.textContent="Paper";
        btn_scissor.textContent="Scissor";
        btn_rock.setAttribute('data-id','1');
        btn_paper.setAttribute('data-id','2');
        btn_scissor.setAttribute('data-id','3');
        div_game.appendChild(btn_rock);
        div_game.appendChild(btn_paper);
        div_game.appendChild(btn_scissor);
        }
    });

    
