import api from '../api';

export const getApplication = async (id: number) => {
    return await api.get(`/api/application/${id}`);
}