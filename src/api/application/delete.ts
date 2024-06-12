import api from '../api';

export const deleteApplication = async (id: number) => {
    return await api.delete(`/api/application/${id}`);
}