import api from "../api";

export const getCities = async () => {
    return await api.get("/api/city");
}