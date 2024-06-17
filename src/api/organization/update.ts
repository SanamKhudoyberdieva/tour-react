import api from '../api';
import { OrganizationCreateType } from '../../store/types';

export const updateOrganization = async (id: number, body: OrganizationCreateType) => {
    return await api.put(`/api/organization/${id}`, body);
}