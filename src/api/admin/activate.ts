import api from "../api";

export const activateAdmin = async (id: number) => {
    return await api.put(`/api/admin/activate/${id}`);
}