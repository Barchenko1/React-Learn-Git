import axios from 'axios';

const KEY = 'AIzaSyDR117vVJjpp2kt-dSlCuiyppPYg_mJA4E';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params : {
        part: 'snippet',
        maxResults: 25,
        key: KEY
    }
});