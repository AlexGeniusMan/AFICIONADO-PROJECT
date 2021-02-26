import axios from 'axios';
import API_URL from './APISettings';

export default class SlidesService{

    constructor(){}

    getSlides() {
        const url = `${API_URL}/api/slides/`;
        return axios.get(url).then(response => response.data);
    }
}
