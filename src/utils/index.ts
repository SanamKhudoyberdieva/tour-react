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