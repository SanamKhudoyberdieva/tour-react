import api from '../../api';

export const getRoleItems = async () => {
    return await api.get(`/api/role-items`);
}