import axios from 'axios';
import API_URL from './APISettings';

export default class TournamentsService{

    constructor(){}

    getTournaments() {
        const url = `${API_URL}/api/tournaments/`;
        return axios.get(url).then(response => response.data);
    }
    getTournamentsByURL(link){
        const url = `${API_URL}${link}`;
        return axios.get(url).then(response => response.data);
    }
    getTournament(id) {
        const url = `${API_URL}/api/tournaments/${id}`;
        return axios.get(url).then(response => response.data);
    }
}
