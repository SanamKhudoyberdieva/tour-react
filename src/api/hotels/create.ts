import api from '../api';
import { HostelCreateType } from '../../store/types/hostel/create';

export const createHotel = async (obj: HostelCreateType) => {
    return await api.post("/api/hotels/", obj);
}