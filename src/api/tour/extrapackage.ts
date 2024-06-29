import { TourCreateExtraPackageType } from '../../store/types/tour/create-two/extraPackage';
import api from '../api';

export const createTourExtraPackage = async (id: number, obj: TourCreateExtraPackageType) => {
    return await api.post(`/api/tour/extra-package/${id}`, obj);
}
