document.querySelector('.btn-get-loc').addEventListener('click', () => {
    fetch('https://api.ipify.org')
        .then(r => r.text())
        .then(d => fetch(`https://ipwhois.app/json/${d}`))
        .then(r => r.json())
        .then(d => {
            initMap(d);
            console.log(d);
        });
});

function initMap({ latitude, longitude }) {
    const loc = { lat: +latitude, lng: +longitude };
    const map = new google.maps.Map(document.getElementById("map"), {
        center: loc,
        zoom: 18,
    });
    const marker = new google.maps.Marker({
        position: loc,
        map: map,
      });
}