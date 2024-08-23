import { ApplicantsCreateType } from '../../store/types/tour/order/applicantsCreate';
import api from '../api';

export const createApplicant = async (obj: ApplicantsCreateType) => {
    return await api.post("/api/application/", obj);
}