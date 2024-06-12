import api from '../api';
import { AuthAdminType } from '../../store/types';

export const authAdmin = async (obj: AuthAdminType) => {
    return await api.post("/api/admin/auth", obj);
}