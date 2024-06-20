import { ActionsType } from "..";

export interface CityType extends ActionsType {
  id: number,
  name_uz: string,
  name_ru: string
}