import api from '../api';

export const getExtraPackage = async (id: number) => {
    return await api.get(`/api/extra-package/${id}`);
}