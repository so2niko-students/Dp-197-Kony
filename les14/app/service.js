export function getUser(callback){
    const xhttp = new XMLHttpRequest();

    xhttp.addEventListener('readystatechange', function() {
        console.log(this.readyState, this.status);
        if (this.readyState == 4 && this.status == 200) {
            console.timeEnd('req time');
            console.log('done', this);

            const user = JSON.parse(this.responseText);
            
            callback(user.results[0]);
        }
    });

    console.time('is async');
    xhttp.open("GET", "https://randomuser.me/api/", true);
    // C POST; R GET; U PUT/UPDATE; D DELETE

    console.timeEnd('is async');
    console.time('req time');
    xhttp.send();
}