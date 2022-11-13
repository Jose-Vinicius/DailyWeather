const baseURL = 'https://api.open-meteo.com/v1/forecast?';
const weatherConfig = '&hourly=apparent_temperature&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=America%2FSao_Paulo' 

export async function getForecast(lat, long){
    const weatherURL = `${baseURL}latitude=${lat}&longitude=${long}${weatherConfig}`
    const response = await fetch(weatherURL);
    return await response.json();
}
