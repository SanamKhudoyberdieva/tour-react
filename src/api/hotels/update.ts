import api from '../api';
import { HostelCreateType } from '../../store/types/hostel/create';

export const updateHotel = async (id: number, body: HostelCreateType ) => {
    return await api.put(`/api/hotels/${id}`, body);
}