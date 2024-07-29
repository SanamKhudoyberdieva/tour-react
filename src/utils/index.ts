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

export function formatDateToInputValue(date: string) {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const hours = String(d.getHours()).padStart(2, "0");
  const minutes = String(d.getMinutes()).padStart(2, "0");
  return `${year}-${month}-${day}T${hours}:${minutes}`;
}
