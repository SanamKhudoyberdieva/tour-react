import api from "../api";

export const getExtraPackages = async () => {
    return await api.get("/api/extra-package");
}