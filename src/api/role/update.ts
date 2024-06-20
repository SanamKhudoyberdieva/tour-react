import { RoleCreateType } from '../../store/types/role/craete';
import api from '../api';

export const updateRole = async (id: number, body: RoleCreateType) => {
    return await api.put(`/api/roles/${id}`, body);
}