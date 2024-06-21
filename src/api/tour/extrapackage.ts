import api from '../api';
import { TourCreateExtraPackageType } from '../../store/types/tour/extraPackageTour';

export const createTourExtraPackage = async (id: number, obj: TourCreateExtraPackageType[]) => {
    return await api.post(`/api/tour/extra-package/${id}`, obj);
}
