import api from '../api';
import { OrganizationCreateType } from '../../store/types';

export const createOrganization = async (obj: OrganizationCreateType) => {
    return await api.post("/api/organization/", obj);
}
