import { ActionsType, NameDescType } from "..";

export interface HostelType extends NameDescType, ActionsType {
  id: number,
  position: number,
  address_uz: string,
  address_ru: string,
  stars: number
}