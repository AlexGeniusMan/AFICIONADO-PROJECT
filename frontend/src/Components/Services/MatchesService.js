import axios from 'axios';
import API_URL from './APISettings';

export default class MatchesService{

    constructor(){}

    getMatches() {
        const url = `${API_URL}/api/matches/`;
        return axios.get(url).then(response => response.data);
    }
    getMatchesByURL(link){
        const url = `${API_URL}${link}`;
        return axios.get(url).then(response => response.data);
    }
    getMatch(id) {
        const url = `${API_URL}/api/matches/${id}`;
        return axios.get(url).then(response => response.data);
    }
}
