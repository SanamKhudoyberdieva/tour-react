import api from '../api';

export const deleteAirway = async (id: number) => {
    return await api.delete(`/api/airways/${id}`);
}