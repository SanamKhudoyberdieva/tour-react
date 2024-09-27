import { TourType } from '../../store/types';
import api from '../api';

export const updateTour = async (id: number, body: TourType) => {
    return await api.put(`/api/tour/${id}`, body);
}