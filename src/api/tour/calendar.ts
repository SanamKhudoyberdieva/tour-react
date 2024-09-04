import moment from "moment";
import api from "../api";

export const getTourCalendar = async (date: Date) => {
  return await api.get(`/api/tour/calendar?month=${moment(date).format("YYYY-MM")}`);
};
