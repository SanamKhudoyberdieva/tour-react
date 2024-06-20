import api from '../api';
import { RoleCreateType } from '../../store/types/role/craete';

export const createRole = async (obj: RoleCreateType) => {
    return await api.post("/api/roles", obj);
}