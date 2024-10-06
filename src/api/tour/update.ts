import { TourType } from '../../store/types';
import { TourUpdateType } from '../../store/types/tour/update';
import api from '../api';

export const updateTour = async (id: number, body: TourUpdateType) => {
    return await api.put(`/api/tour/${id}`, body);
}