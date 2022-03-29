import axios from "axios";

let baseURL = "https://startling-custard-e5a6f6.netlify.app/";

const instance = axios.create({
    baseURL: baseURL
})

export default instance;