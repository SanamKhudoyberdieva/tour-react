import { RoleItemsType } from '../../../store/types/role/items/create';
import api from '../../api';

export const createRoleItems = async (obj: RoleItemsType) => {
    return await api.post("/api/role-items", obj);
}