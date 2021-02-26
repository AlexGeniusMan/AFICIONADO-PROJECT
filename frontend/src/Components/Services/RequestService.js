import axios from 'axios';
import API_URL from './APISettings';

export default class RequestService{

    constructor(){}
	
    sendRequest(request){
        const url = `${API_URL}/api/request/`;
        //return axios.post(url,request);
	return axios.post(url, {
	    data: request,
            responseType: 'json',
	    xsrfHeaderName: "X-CSRFToken",
	})
    }
}
