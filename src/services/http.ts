import axios, { AxiosRequestConfig } from "axios";
import { API_URL } from "../constants/constants";

declare module 'axios' {
    export interface AxiosInstance {
      request<T = any> (config: AxiosRequestConfig): Promise<T>;
      get: <T>(url: string, config?: AxiosRequestConfig) => Promise<T>;
      delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
      head<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
      post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
      put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
      patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
    }
  }

const instance = axios.create({
    baseURL: API_URL,
});

instance.interceptors.response.use((response)=>{
    if(response.statusText === "OK") return response.data;
    Promise.reject();
}, (error)=>{   
    Promise.reject(error);
})

const http = {
    get: <T=any>(url: string, config?: AxiosRequestConfig) => instance.get<T>(url, config)
}

export default http;
