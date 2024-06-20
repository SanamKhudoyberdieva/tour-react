import api from "../api"

export const getRoleById = async (id: number) => {
  return await api.get(`/api/roles/${id}`)
}