import axios from "axios";
const BASE_URL = "http://localhost:4000"



function createHeaders() {
    const auth = JSON.parse(localStorage.getItem('my-wallet'));
    const config = {
        headers: {
            Authorization: `Bearer ${auth.token}`
        }
    };

    return config;
}


function postSignUp(body) {
    const promise = axios.post(`${BASE_URL}/auth/sign-up`, body);
    return promise

}

function postSignIn(body) {
    const promise = axios.post(`${BASE_URL}/auth/login`, body);
    return promise
}





export { postSignUp, postSignIn, createHeaders}