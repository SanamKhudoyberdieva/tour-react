import api from "../api";

export const getApplications = async () => {
    return await api.get("/api/application");
}