import api from '../api';

export const deleteExtraPackage = async (id: number) => {
    return await api.delete(`/api/extra-package/${id}`);
}