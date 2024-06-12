import api from '../api';

export const deleteTour = async (id: number) => {
    return await api.delete(`/api/tour/${id}`);
}