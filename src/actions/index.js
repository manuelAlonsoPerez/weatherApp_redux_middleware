import axios from 'axios';

const API_KEY = 'b12b74032c9b869b51e17e67bba42387';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&APPID=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){

    const url = `${ROOT_URL}&q=${city},us`;
    // axios Returns a promise
    const request = axios.get(url);

    return{
        type: FETCH_WEATHER, 
        // We are returning the promis as the payload 
        payload: request
    };
}