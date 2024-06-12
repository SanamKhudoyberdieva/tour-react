import api from '../api';

export const getTour = async (id: number) => {
    return await api.get(`/api/tour/${id}`);
}