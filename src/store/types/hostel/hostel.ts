import { ActionsType, NameDescType } from "..";

export interface HostelType extends NameDescType, ActionsType {
  id: number,
  position: number,
  stars: number
}