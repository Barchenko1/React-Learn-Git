import axios from "axios";

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 1y0xgAm7BJC5gssHVRqwQzanAvxRaxdUR9htWxReOpU'
    },
})