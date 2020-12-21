import { getUser } from './service.js';
import {checkCompatibility, getCompatibility} from './table.js';

const zodiacSymbols = {
    'Овен': '♈',
    'Телец': '♉',
    'Близнецы': '♊',
    'Рак': '♋',
    'Лев': '♌',
    'Дева': '♍',
    'Весы': '♎',
    'Скорпион': '♏',
    'Стрелец': '♐',
    'Козерог': '♑',
    'Водолей': '♒',
    'Рыбы': '♓'
}

getUser(setUser, '?gender=female');
getUser(setUser, '?gender=male');

function setUser(user){
    users.push(user);
    if(users.length == 2){
        ratingWrapper.style.display = 'block';
        resultBlock.innerHTML = '';
        users.forEach(({ picture, zodiac }, i) => {
            images[i].src = picture.large;
            userZodiac[i].innerHTML = zodiacSymbols[zodiac];
        });
        console.log(getCompatibility(users));
    }
}

const users = [];
const images = [...document.querySelectorAll('.images img')];
const userZodiac = [...document.querySelectorAll('.zodiac')]

newCouple.addEventListener('click', ()=>{
    users.length = 0;
    getUser(setUser, '?gender=female');
    getUser(setUser, '?gender=male');
});
document.querySelectorAll('input[type=radio]').forEach((elem) => {
    elem.addEventListener('change', (event)=>{
        ratingWrapper.style.display = 'none';
        resultBlock.innerHTML = checkCompatibility(users, event.target.value)
        event.target.checked = false;
    })
})
