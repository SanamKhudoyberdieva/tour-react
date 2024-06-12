import api from "../api";

export const deactivateAdmin = async (id: number) => {
    return await api.put(`/api/admin/deactivate/${id}`);
}