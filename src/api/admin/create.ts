import api from '../api';
import { AdminCreateType } from '../../store/types';

export const createAdmin = async (obj: AdminCreateType) => {
    return await api.post("/api/admin", obj);
}