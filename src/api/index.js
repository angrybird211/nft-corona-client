import axios from "axios";

let baseURL = "https://nft-corona-server.vercel.app/";

const instance = axios.create({
    baseURL: baseURL
})

export default instance;