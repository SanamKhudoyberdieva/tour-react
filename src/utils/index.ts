import moment from "moment"

export const formateDate = (date: string| null) => {
    if(!date) return ""
    return moment(date).format('DD.MM.YYYY')
}

export function getName(item: any, lang: string = "ru") {
    if (!item) return "";
    if (lang == "ru") return item.name_ru;
    return item["name_" + lang] || item.name_ru;
}

export const formatDateToISOString = (date: string) => {
    const parsedDate = new Date(date);
    return parsedDate.toISOString();
};

export const formatDateToLocalDateTime = (date: string) => {
    if (!date) return "";
    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) return "";
    const localISOTime = parsedDate.toISOString().slice(0, 16);
    return localISOTime;
  };