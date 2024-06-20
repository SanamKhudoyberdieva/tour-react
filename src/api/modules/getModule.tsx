import api from '../api';

export const getModules = async () => {
    return await api.get("/api/modules");
}