import api from '../api';

export const deleteSetting = async (id: number) => {
    return await api.delete(`/api/settings/${id}`);
}