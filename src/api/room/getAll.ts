import api from "../api";

export const getRooms = async () => {
    return await api.get("/api/rooms");
}