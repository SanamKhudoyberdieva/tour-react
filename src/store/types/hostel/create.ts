import { NameDescType } from "..";

export interface HostelCreateType extends NameDescType {
  position: number,
  address_uz: string,
  address_ru: string,
  stars: number
}