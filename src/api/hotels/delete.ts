import api from '../api';

export const deleteHotel = async (id: number) => {
    return await api.delete(`/api/hotels/${id}`);
}