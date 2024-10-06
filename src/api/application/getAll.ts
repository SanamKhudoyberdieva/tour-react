import api from "../api";

export interface GetApplicationPropsType {
    tour_id: string;
    tour_room_id: string;
    user_id: string;
    page: number;
    page_size: number;
  }

export const getApplications = async ({
    tour_id,
    tour_room_id,
    user_id,
    page_size,
    page,
    }: GetApplicationPropsType
) => {
    return await api.get(`/api/application?tour_id=${tour_id}&page=${page}&page_size=${page_size}&tour_room_id=${tour_room_id}&user_id=${user_id}`);
}