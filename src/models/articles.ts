import http from "../services/http";
import { API_KEY } from "../constants/constants";
import { IArticleResource } from "../views/home/index.types";

export const fetchArticles = (period:number)=>{
    return http.get<IArticleResource>(`/${period}.json?api-key=${API_KEY}`)
}