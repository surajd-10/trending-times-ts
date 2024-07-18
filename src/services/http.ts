import axios, { AxiosRequestConfig } from "axios";
import { API_URL } from "../constants/constants";

const instance = axios.create({
    baseURL: API_URL,
});

const http = {
    get: (url: string, config?: AxiosRequestConfig) => instance.get(url, config)
}

export default http;
