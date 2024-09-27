import axios from "axios";
import { API_URL } from "../config";
export const axiosApi = axios.create({
    baseURL: API_URL,
});

export const sendAndConfirmTransaction = async (data, config = {}) => {
    return await axiosApi
        .post('/engine/relayer-transaction', { ...data }, { ...config });
}