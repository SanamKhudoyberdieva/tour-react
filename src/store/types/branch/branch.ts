import { ActionsType, NameDescType } from "..";

export interface BranchType extends NameDescType, ActionsType {
  id: number,
}