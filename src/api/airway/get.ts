import api from '../api';

export const getAirway = async (id: number) => {
    return await api.get(`/api/airways/${id}`);
}