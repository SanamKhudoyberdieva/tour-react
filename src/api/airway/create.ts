import api from '../api';
import { AirwayCreateType } from '../../store/types';

export const createAirway = async (obj: AirwayCreateType) => {
    return await api.post("/api/airways/", obj);
}