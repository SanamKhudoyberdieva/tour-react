import api from '../api';

export const deleteNews = async (id: number) => {
    return await api.delete(`/api/news/${id}`);
}