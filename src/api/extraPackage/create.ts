import api from '../api';
import { ExtraPackageCreateType } from '../../store/types';

export const createExtraPackage = async (obj: ExtraPackageCreateType) => {
    return await api.post("/api/extra-package/", obj);
}