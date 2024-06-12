import api from '../api';

export const getHotel = async (id: number) => {
    return await api.get(`/api/hotels/${id}`);
}