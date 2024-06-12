import { ActionsType } from "../general/actions";

export interface RoleType extends ActionsType{
    comment: string,
    id: number,
    is_active: boolean,
    is_deleted: boolean,
    key: string,
    title: string,
}