import api from "../api";

export const getTours = async () => {
    return await api.get("/api/tour");
}