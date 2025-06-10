import {API_URL} from "./config.ts";
import axios from "axios";

export const loginApi = (data: { email: string; password: string }) => {
    return axios.post(`${API_URL}/auth/login`, data, { withCredentials: true });
}

export const registerApi = (data: { email: string; password: string }) => {
    return axios.post(`${API_URL}/auth/register`, data, { withCredentials: true });
}