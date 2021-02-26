import axios from 'axios';
import API_URL from './APISettings';

export default class MembershipsService{

    constructor(){}

    getMemberships() {
        const url = `${API_URL}/api/memberships/`;
        return axios.get(url).then(response => response.data);
    }
    getMembershipsByURL(link){
        const url = `${API_URL}${link}`;
        return axios.get(url).then(response => response.data);
    }
    getMembership(id) {
        const url = `${API_URL}/api/memberships/${id}`;
        return axios.get(url).then(response => response.data);
    }
}
