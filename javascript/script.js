const btn=document.querySelector('button');
console.log(btn);
btn.addEventListener('click', (e) => {
    console.log(e.target);
    btn.classList.add('click');
})