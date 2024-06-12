import api from '../api';
import { AirwayCreateType } from '../../store/types';

export const updateAirway = async (id: number, body: AirwayCreateType ) => {
    return await api.put(`/api/airways/${id}`, body);
}