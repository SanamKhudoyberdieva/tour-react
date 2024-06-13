import api from '../api';

export const createNews = async (obj: FormData) => {
    return await api.post("/api/news", obj);
}