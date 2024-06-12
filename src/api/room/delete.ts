import api from '../api';

export const deleteRoom = async (id: number) => {
    return await api.delete(`/api/rooms/${id}`);
}