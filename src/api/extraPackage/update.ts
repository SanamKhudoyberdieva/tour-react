import api from '../api';
import { ExtraPackageCreateType } from '../../store/types';

export const updateExtraPackage = async (id: number, body: ExtraPackageCreateType ) => {
    return await api.put(`/api/extra-package/${id}`, body);
}