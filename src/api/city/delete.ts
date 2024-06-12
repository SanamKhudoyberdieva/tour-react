import api from '../api';

export const deleteCity = async (id: number) => {
    return await api.delete(`/api/city/${id}`);
}