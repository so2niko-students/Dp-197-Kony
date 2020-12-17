import { getUser } from './service.js';

getUser(setUser);
getUser(setUser);

function setUser(user){
    users.push(user);
    console.log(users);

    // images[0].src = user.picture.large;

    users.forEach(({ picture }, i) => images[i].src = picture.large);
}

const users = [];
const images = [...document.querySelectorAll('.images img')];