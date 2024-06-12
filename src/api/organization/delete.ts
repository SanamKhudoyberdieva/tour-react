import api from '../api';

export const deleteOrganization = async (id: number) => {
    return await api.delete(`/api/organization/${id}`);
}