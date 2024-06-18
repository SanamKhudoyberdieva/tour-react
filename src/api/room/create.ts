import api from '../api';
import { RoomCreateType } from '../../store/types';

export const createRoom = async (obj: RoomCreateType) => {
    return await api.post("/api/rooms/", obj);
}