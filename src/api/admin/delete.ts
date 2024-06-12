import api from "../api";

export const deleteAdmin = async (id: number) => {
    return await api.delete(`/api/admin/${id}`);
}