import api from "../api";

export const deleteRole = async (id: number) => {
    return await api.delete(`/api/roles/${id}`);
}