import api from '../api';

export const uploadApplicaitonFile = async (file: FormData) => {
    return await api.post("/api/application/file/", file);
}