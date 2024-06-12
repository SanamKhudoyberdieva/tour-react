import api from "../api";

export const getOrganizations = async () => {
    return await api.get("/api/organization");
}