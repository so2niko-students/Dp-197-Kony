export function anima(obj){
    obj.point = (obj.point + 1) % obj.str.length;

    console.clear();
    console.log(obj.str[obj.point]);
}

