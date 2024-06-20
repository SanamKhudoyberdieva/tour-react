import { ActionsType, NameDescType } from "..";

export interface RoomType extends NameDescType, ActionsType {
  id: number,
  position: number,
  count: number
}