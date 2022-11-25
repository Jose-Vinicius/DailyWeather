const baseURL = 'https://api.geoapify.com/v1/geocode/'
const searchAPI = 'search';
const searchConfig = '&limit=1&type=city';
const reverseAPI = 'reverse';
const APIkey = import.meta.env.VITE_GEOLOCATION_KEY;
const endURL = '&format=json&apiKey=';
const requestOptions = {
    method: 'GET'
}

export async function getGeolocation(cityName){
    const geolocationSearchURL = `${baseURL}${searchAPI}?text=${cityName}${searchConfig}${endURL}${APIkey}`
    const response = await fetch(geolocationSearchURL, requestOptions);
    return await response.json();
}

export async function getReverseGeolocation(coords){
    const geolocationReverseURL = `${baseURL}${reverseAPI}?lat=${coords.lat}&lon=${coords.lon}${endURL}${APIkey}`
    const response = await fetch(geolocationReverseURL, requestOptions);
    return await response.json();
}