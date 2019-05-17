import axios from 'axios';

const api_key = "yRKizemTKBb75pLNr";
export default axios.create({
    baseURL : 'https://api.airvisual.com/v2/',
    params: {
        key: api_key
    }
})