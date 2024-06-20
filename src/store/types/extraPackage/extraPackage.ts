import { ActionsType, NameDescType } from "..";

export interface ExtraPackageType extends NameDescType, ActionsType {
  id: number,
  position: number,
}