import axios from 'axios';
import API_URL from './APISettings';

export default class HeaderService{

    constructor(){}

    getNames() {
        const url = `${API_URL}/api/names/`;
        return axios.get(url).then(response => response.data);
    }
}
