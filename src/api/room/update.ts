import api from '../api';
import { RoomCreateType } from '../../store/types';

export const updateRoom = async (id: number, body: RoomCreateType ) => {
    return await api.put(`/api/rooms/${id}`, body);
}