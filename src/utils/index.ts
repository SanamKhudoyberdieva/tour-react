import moment from "moment"

export const formateDate = (date: string| null) => {
    if(!date) return ""
    return moment(date).format('DD.MM.YYYY')
}