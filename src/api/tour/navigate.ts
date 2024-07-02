import { TourCreateNavigateType } from '../../store/types/tour/create-two/navigate';
import api from '../api';

export const createTourNavigate = async (id: number, obj: TourCreateNavigateType[]) => {
    return await api.post(`/api/tour/navigate/${id}`, obj);
}
