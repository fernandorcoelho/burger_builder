import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-69b5d.firebaseio.com/'
});

export default instance;