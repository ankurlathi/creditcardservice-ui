import axios from 'axios';

const CREDITCARD_API_BASE_URL = "http://localhost:8080/api/v1/creditcards";

class CreditCardService {

    getCards(){
        return axios.get(CREDITCARD_API_BASE_URL);
    }

    createCard(card){
        return axios.post(CREDITCARD_API_BASE_URL, card);
    }
}

export default new CreditCardService()

