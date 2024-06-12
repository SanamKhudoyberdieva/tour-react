import api from "../api";

export const getAdminById = async (id: number) => {
    return await api.get(`/api/admin/${id}`);
}