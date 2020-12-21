import {getZodiac} from "./table.js";

export function getUser(callback, args = ''){
    const xhttp = new XMLHttpRequest();


    xhttp.addEventListener('readystatechange', function() {
        if (this.readyState == 4 && this.status == 200) {
            const user = JSON.parse(this.responseText);
            const userWithZodiac = {...user.results[0], zodiac: getZodiac(user.results[0])};
            console.log(userWithZodiac);
            callback(userWithZodiac);
        }
    });


    xhttp.open('GET', `https://randomuser.me/api/${ args }`, true);
    xhttp.setRequestHeader('Access-Control-Allow-Origin', 'https://randomuser.me');
    xhttp.send();
}