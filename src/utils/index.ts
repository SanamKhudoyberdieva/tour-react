import moment from "moment";

export const formateDate = (date: string | null) => {
  if (!date) return "";
  return moment(date).format("DD.MM.YYYY");
};

export function getName(item: any, lang: string = "ru") {
  if (!item) return "";
  if (lang == "ru") return item.name_ru;
  return item["name_" + lang] || item.name_ru;
}

export const formatDateToISOString = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toISOString();
};

export const formatDateToInputValue = (dateString: string): string => {
  const date = new Date(dateString);
  const pad = (n: number) => n.toString().padStart(2, "0");

  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1);
  const day = pad(date.getDate());
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());

  return `${day}.${month}.${year} (${hours}:${minutes})`;
};
