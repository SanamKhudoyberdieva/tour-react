import api from '../api';

export const getNew = async (id: number) => {
    return await api.get(`/api/news/${id}`);
}