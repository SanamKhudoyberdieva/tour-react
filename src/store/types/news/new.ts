import { ActionsType, NameDescType } from "..";

export interface NewsType extends NameDescType, ActionsType {
  id: number,
  position: number,
  image: string,
}