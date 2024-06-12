import api from '../api';

export const getSetting = async (id: number) => {
    return await api.get(`/api/settings/${id}`);
}