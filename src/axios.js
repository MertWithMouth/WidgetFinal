import axios from 'axios';

const instance = axios.create({

    baseURL:'http://localhost:8888/restapi'
})
export default instance;