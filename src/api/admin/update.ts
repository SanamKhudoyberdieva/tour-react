import api from '../api';
import { AdminUpdateType } from '../../store/types';

export const updateAdmins = async (body: AdminUpdateType) => {
    const params = new URLSearchParams();

    if (body.full_name) params.append('full_name', body.full_name);
    if (body.password) params.append('password', body.password);
    if (body.username) params.append('username', body.username);
    if (body.is_active !== undefined) params.append('is_active', String(body.is_active));
    if (body.role_id) params.append('role_id', String(body.role_id));
    if (body.phone) params.append('phone', body.phone);
    if (body.organization_id) params.append('organization_id', String(body.organization_id)); 

    return await api.put(`/api/admin/${body.id}?${params.toString()}`);
};