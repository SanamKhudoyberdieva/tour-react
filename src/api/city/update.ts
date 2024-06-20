import api from '../api';
import { CityCreateType } from '../../store/types';

export const updateCity = async (id: number, body: CityCreateType ) => {
    return await api.put(`/api/city/${id}`, body);
}