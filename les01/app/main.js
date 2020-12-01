import { slave, three, two } from './slave.js';
import Master222, { masterNum } from './master.js';


main(three);
main(masterNum);

function main(num = 0){
    console.log('main', num);
}

slave();


two();

const m = new Master222();

const five = function(text, num = 5){
    // let i = 0;
    for(;num--;){
        console.count(text);
        // i++
    }

    // let j = 0;
    // while(j < num){
    //     console.count(text);
    //     j++;
    // }
}

five('hello');

function choice(month = 1){
    // const months = ['', 'Январь', 'Февраль'];
    // return months[month];   

    let answ = '';
    switch(month){
        case 1:{
            answ = 'Январь';
            break;
        }
        case 2:{
            answ = 'Февраль';
            break;
        }
        case 3:
        case '3':
        case 'three':
        case 'три':
        case '11':
        case 66:{
            answ = 'Март';
            break;
        }
        default:{
            answ = 'Апреавгустоябрь';
            break;
        }
        case 12:{
            answ = 'Декабрь';
            break;
        }
        
    }

    return answ;
}

function whatMonthNum(name){
    const months = {
        Jan : () => console.log(1),
        Feb : () => console.log(2),
        Mar : () => console.log(3),
    };

    return months[name]();
}

function isSpeedOnHighWay(v = 100){
    let answ = '';
    switch(true){
        case v <= 30:{
            answ = 'to slow';
            break;
        }
        case v > 30 && v <=130:{
            answ = 'norm';
            break;
        }
        case v > 130 && v <= 150:{
            answ = 'bad, but ok';
            break;
        }
        case v > 150:{
            answ = 'Penalty';
            break;
        }
    }

    return answ;


}


console.log('choice', choice(12));
console.log('what month name', whatMonthNum('Feb'));
console.log('speed', isSpeedOnHighWay(145));


