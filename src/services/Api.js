import axios from "axios";

const api = axios.create({
    baseURL:"https://superheroapi.com/api.php/2508841819291006"
});

export default api;