import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID a01658052241767ebafb80e243fe6d53b02d7ff5404420a6651b97db3036c085"
    }
})
