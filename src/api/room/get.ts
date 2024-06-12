import api from '../api';

export const getRoom = async (id: number) => {
    return await api.get(`/api/rooms/${id}`);
}