function insertData(type = 'text'){
    const inText = dom.inp.value;
    const methods = {
        text : 'innerText',
        html : 'innerHTML',
        out : 'outerHTML'
    };

    const access = methods[type];

    dom.box[access] = inText;

    console.clear();
    console.log(dom);
}

document.querySelector('.btn-inText').addEventListener('click', () => insertData());
document.querySelector('.btn-inHTML').addEventListener('click', () => insertData('html'));
document.querySelector('.btn-outHTML').addEventListener('click', () => insertData('out'));

const dom = {
    inp : document.querySelector('.inp-str'),
    box : document.querySelector('.box')
};

// dom.box.insertAdjacentHTML('afterend', )
//afterend
//afterbegin
//beforeend
//beforebegin

function insertAdjacentHTML(parent = document.body, type = 'afterbegin', htmlText){
    const tempParent = document.createElement('div');
    tempParent.innerHTML = htmlText;
    const element = tempParent.firstChild;

    switch(type){
        case 'beforeend' : {
            parent.appendChild(element);
            break;
        }
        case 'beforebegin' : {
            parent.parentElement.insertBefore(element, parent);
            break;
        }
        case 'afterbegin' : {
            if(parent.hasChildNodes()){
                parent.insertBefore(element, parent.firstChild);
            }else{
                parent.appendChild(element);
            }
            break;
        }
        case 'afterend' : {
            parent.after(element);
            break;
        }
    }
}