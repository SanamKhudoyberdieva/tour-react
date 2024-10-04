import api from '../api';
import { AplicantionUpdateType } from '../../store/types/tour/order/update';

export const updateApplication = async (id: number, body:  AplicantionUpdateType) => {
    return await api.put(`/api/application/${id}`, body);
}