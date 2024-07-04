import api from "../api";

export const getTourRoom = async ({
  adults_count = "0",
  child_count = "0",
  child_with_parent = "0",
  date = "",
  night_count = "0",
  nutrition_type = "",
  page = "1",
  page_size = "10",
}: {
  adults_count?: string;
  child_count?: string;
  child_with_parent?: string;
  date?: string;
  night_count?: string;
  nutrition_type?: string;
  page?: string;
  page_size?: string;
}) => {
  return await api.get(
    `/api/tour/room?adults_count=${adults_count}&child_count=${child_count}&child_with_parent=${child_with_parent}&date=${date}&night_count=${night_count}&nutrition_type=${nutrition_type}&page=${page}&page_size=${page_size}`
  );
};
