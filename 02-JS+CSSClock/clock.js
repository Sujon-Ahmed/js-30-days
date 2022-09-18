const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourdHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegree = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;
    
    const mins = now.getMinutes();
    const minsDegree = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    minHand.style.transform = `rotate(${minsDegree}deg)`;
    
    const hours = now.getHours();
    const hoursDegree = ((hours / 12) * 360) + ((mins / 60) * 30) + 90;
    hourdHand.style.transform = `rotate(${hoursDegree}deg)`;
    
    if (secondsDegree === 90) secondHand.style.transition = 'all 0s';
    else secondHand.style.transition = 'all 0.05s';
   
    if (minsDegree === 90) minHand.style.transition = 'all 0s';
    else minHand.style.transition = 'all 0.1s';

    // console.log('it\'s： ' + hours + ":" + mins + ":" + seconds);
}

setInterval(setDate, 1000);