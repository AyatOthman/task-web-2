function initMap() {
    const myLatLng = { lat: 40.7128, lng: -74.0060 };
    const map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 15
    });
    const marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Our Location'
    });
}
function loadGoogleMaps() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
    script.defer = true;
    script.async = true;
    document.head.appendChild(script);
}
loadGoogleMaps();

