import { NewsType, PaginationType } from "..";

export interface NewsListType extends PaginationType {
  news: NewsType[];
}