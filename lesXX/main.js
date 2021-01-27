function getLocation(){
    fetch('https://api.ipify.org')
        .then(r => r.text())
        .then(d => fetch(`https://ipwhois.app/json/${d}`))
        .then(r => r.json())
        .then(d => {
            initMap(d);
            console.log(d);
        });
        //http://ip-api.com/json/24.48.0.1
}


function initMap({ latitude, longitude }) {
    const mapHtml = document.querySelector("#map");
    const loc = { lat: +latitude, lng: +longitude };
    //https://cache.ip-api.com/35.046,48.4735,10
    const map = new google.maps.Map(mapHtml, {
        center: loc,
        zoom: 15,
    });
    const marker = new google.maps.Marker({
        position: loc,
        map: map,
    });

    mapHtml.classList.remove('hide');
}

getLocation();