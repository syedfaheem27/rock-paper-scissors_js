function Rock_Paper_Scissor() {
    const div_game=document.createElement('div');
    div_game.classList.add('game');
    const btn_rock=document.createElement('button');
    const btn_paper=document.createElement('button');
    const btn_scissor=document.createElement('button');
    document.querySelector('body')
    .appendChild(div_game);
    btn_rock.textContent="Rock";
    btn_paper.textContent="Paper";
    btn_scissor.textContent="Scissor";
    div_game.appendChild(btn_rock);
    div_game.appendChild(btn_paper);
    div_game.appendChild(btn_scissor);

}
const btn=document.querySelector('button');
console.log(btn);
btn.addEventListener('click', (e) => {
    console.log(e.target);
    btn.classList.add('click');
    Rock_Paper_Scissor();
    
})