import api from '../api';

export const getOrganization = async (id: number) => {
    return await api.get(`/api/organization/${id}`);
}