import { TourCreateExtraPackageCreateType } from '../../store/types/tour/create-two/extraPackage';
import api from '../api';

export const createTourExtraPackage = async (id: number, obj: TourCreateExtraPackageCreateType[]) => {
    return await api.post(`/api/tour/extra-package/${id}`, obj);
}
