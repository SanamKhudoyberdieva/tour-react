import api from "../api";

export const getRoles = async () => {
  return await api.get(`/api/roles`);
};
