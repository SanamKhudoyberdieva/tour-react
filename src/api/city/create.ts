import api from '../api';
import { CityCreateType } from '../../store/types';

export const createCity = async (obj: CityCreateType) => {
    return await api.post("/api/city/", obj);
}