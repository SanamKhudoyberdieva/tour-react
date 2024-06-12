import api from "../api";

export const getHotels = async () => {
    return await api.get("/api/hotels");
}