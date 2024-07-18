import http from "../services/http";
import { API_KEY } from "../constants/constants";

export const fetchArticles = (period:number)=>{
    return http.get(`/${period}.json?api-key=${API_KEY}`)
}