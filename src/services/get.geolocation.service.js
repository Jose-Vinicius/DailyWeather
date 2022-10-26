const baseURL = 'https://geocoding-api.open-meteo.com/v1/search?';
const geolocationConfig = '&language=pt&count=1';

export async function getGeolocation(cityName){
    const geolocationURL = `${baseURL}name=${cityName}${geolocationConfig}`;
    const response = await fetch(geolocationURL);
    return await response.json();
}