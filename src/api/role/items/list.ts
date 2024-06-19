import { RoleItemsList } from '../../../store/types/role/items/list';
import api from '../../api';

export const putRoleItemsList = async (obj: RoleItemsList) => {
    return await api.put("/api/role-items/list", obj);
}