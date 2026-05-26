import axios from "axios";

export const omdbAxios = axios.create({baseURL : "https://www.omdbapi.com" , timeout : 10000})