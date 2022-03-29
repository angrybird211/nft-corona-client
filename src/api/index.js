import axios from "axios";

let baseURL = "https://nft-corona-server.herokuapp.com/";

const instance = axios.create({
    baseURL: baseURL
})

export default instance;