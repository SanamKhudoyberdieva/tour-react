import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { TourCalendarType } from "../../../store/types/tour/calendar";
import { useTranslation } from "react-i18next";

const DateSelector = ({
  calendar,
  handleFilterChange,
  handleGetCalendar,
  selectedDate,
  setSelectedDate,
}: {
  selectedDate: Date | null;
  setSelectedDate: Dispatch<SetStateAction<Date | null>>;
  setCalendar: Dispatch<SetStateAction<TourCalendarType[] | []>>;
  handleGetCalendar: (date: Date) => Promise<void>;
  handleFilterChange: (
    e:
      | ChangeEvent<HTMLInputElement | HTMLSelectElement>
      | { target: { name: string; value: string | Date | null } },
  ) => void;
  calendar: TourCalendarType[];
}) => {
  const { t } = useTranslation();
  const calendarMoments = calendar.map((date) => moment(date.date));

  const isDateSelectable = (date: moment.MomentInput) => {
    return calendarMoments.some((flyingDate) => flyingDate.isSame(date, "day"));
  };

  const filterDates = (date: moment.MomentInput) => {
    return isDateSelectable(date);
  };

  const getBackgroundColor = (date: Date): string => {
    const tourDate = calendar.find((flyingDate) =>
      moment(flyingDate.date).isSame(date, "day"),
    );

    if (tourDate) {
      if (tourDate.total_place === 0) {
        return "red";
      } else if (tourDate.total_place < 5) {
        return "lightcoral";
      } else if (tourDate.total_place < 10) {
        return "yellow";
      } else {
        return "lightgreen";
      }
    }
    return "transparent";
  };

  // Apply the background color
  const customDayClass = (date: Date): string => {
    const backgroundColor = getBackgroundColor(date);
    return `custom-day ${backgroundColor}`;
  };

  const handleDateChange = (date: Date | null) => {
    if (!date) return;
    setSelectedDate(date);
    handleFilterChange({
      target: { name: "date", value: moment(date).format("YYYY-MM-DD") },
    });
  };

  const handleMonthchange = (date: Date) => {
    if (!date) return;
    handleGetCalendar(date);
  };

  useEffect(() => {
    const date = new Date();
    handleGetCalendar(date);
  }, []);

  return (
    <DatePicker
      selected={selectedDate}
      onChange={(date) => handleDateChange(date)}
      filterDate={filterDates}
      placeholderText={t('select-a-flying-date')}
      dateFormat="yyyy-MM-dd"
      dayClassName={customDayClass}
      className="form-control w-100"
      id="date-picker"
      onMonthChange={handleMonthchange}
    />
  );
};

export default DateSelector;
