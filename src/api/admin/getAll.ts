import api from "../api";

export interface GetAdminsPropsType {
  organization_id: string;
  page: number;
  page_size: number;
  name: string;
}

export const getAdmins = async ({
  organization_id,
  name,
  page_size,
  page,
}: GetAdminsPropsType) => {
  return await api.get(
    `/api/admin?organization_id=${organization_id}&page=${page}&page_size=${page_size}&name=${name}`
  );
};
