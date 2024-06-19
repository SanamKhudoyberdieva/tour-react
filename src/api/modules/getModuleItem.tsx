import api from "../api";

export const getModuleItems = async (id?: number) => {
  return await api.get(`/api/modules-items${id ? `?moduleId=${id}` : ""}`);
};
