import getWeather from './getWeather'
import mapboxgl from 'mapbox-gl'
const getLocal = (currentCity) => {

    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${currentCity}&key=f48f16d196e84d05832dfa7b13827512`)
        .then((response) => response.json())
        .then((response) => {
            const getDate = new Date().toLocaleString('en-US', {
                timeZone: response.results[0].annotations.timezone.name
            });
            document.getElementById('date').innerText = `${new Date(getDate).toLocaleString({ weekday: 'long', day: 'numeric' })}`

            if (response.results[0].components.city === undefined) {
                document.getElementById('countryCity').innerText = `${response.results[0].components.country}, ${response.results[0].components.country}`;

            } else {
                document.getElementById('countryCity').innerText = `${response.results[0].components.city}, ${response.results[0].components.country}`;

            }
            let mapLatitude = response.results[0].geometry.lat;
            let mapLongitude = response.results[0].geometry.lng;
            document.getElementById('lat').innerText = `Latitude: ${parseFloat(mapLatitude.toFixed(2))}`;
            document.getElementById('long').innerText = `Longitude: ${parseFloat(mapLongitude.toFixed(2))}`;

            mapboxgl.accessToken = 'pk.eyJ1IjoiZWxpc3NlcyIsImEiOiJja2F3dmQ0cHowMDZqMnNxb29hNTRoODFyIn0.Gtay3YqgbLgUPL_bT8Evig';
            const map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [mapLongitude, mapLatitude],
                zoom: 9
            });
            return getWeather(currentCity);


        })
}


export default getLocal;