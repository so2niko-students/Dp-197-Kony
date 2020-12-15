class Cookie{
    static set(cname, cvalue, exdays){
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        const expires = `expires=${d.toUTCString()}`;
        document.cookie = `${cname}=${cvalue};${expires};path=/`;
    }

    static get(cname) {
        const name = `${cname}=`;
        const c = document.cookie
                    .split(/\;\s?/)
                    .find(el => el.startsWith(name));

        return c?.slice(name.length) || '';
    }

    static del(cname){
        document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
}

// camelCase
// PascalCase

function intro(){
    const name = Cookie.get('name');

    if(name.length > 0){
        document.title = `Hello, ${ name }`;
    }
}

intro();

document.querySelector('.btn-name').addEventListener('click', () => {
    const inpName = document.querySelector('.inp-name');
    const name = inpName.value;
    inpName.value = '';

    Cookie.set('name', name, 100);
});

setInterval(() => {
    const t = document.title;
    document.title = t.slice(1) + t.slice(0, 1);
}, 100);