import api from '../api';
import { TourCreateType } from '../../store/types';

export const createTour = async (obj: TourCreateType) => {
    return await api.post("/api/tour/", obj);
}
