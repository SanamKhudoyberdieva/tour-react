import moment from "moment";
import api from "../api";

export const getTourCalendar = async (date: string = moment().format("YYYY-MM")) => {
  return await api.get(`/api/tour/calendar?month=${date}`);
};
