import api from "../api";

export const getAirways = async () => {
    return await api.get("/api/airways");
}