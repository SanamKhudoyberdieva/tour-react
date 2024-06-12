import api from '../api';

export const getCity = async (id: number) => {
    return await api.get(`/api/city/${id}`);
}