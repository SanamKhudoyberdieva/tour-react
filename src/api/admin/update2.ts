import api from '../api';
import { AdminCreateType } from '../../store/types';

export const updateAdmin = async (id: number, body: AdminCreateType) => {
    return await api.put(`/api/admin/${id}`, body);
}