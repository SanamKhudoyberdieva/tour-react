import { ActionsType, NameDescType } from "..";

export interface AirwayType extends NameDescType, ActionsType {
  id: number,
  position: number,
}