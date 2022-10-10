const yestBtn = document.querySelector('#yesBtn');

yestBtn.addEventListener('click',function () {
    alert('Espero que sea cierto que estes abrigada o me molesto:) y le grito a tu mami que te abriges xd. Señoraaaa su hijaa no se quiere abrigarrr!')
});
const noBtn = document.querySelector('#noBtn');
noBtn.addEventListener('mouseover',function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})