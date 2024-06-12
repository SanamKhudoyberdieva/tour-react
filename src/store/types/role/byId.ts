import { ActionsType } from "../general/actions";

export interface RoleByIdType extends ActionsType{
    comment: string,
    id: number,
    is_active: boolean,
    is_deleted: boolean,
    key: string,
    title: string,
    module_item_keys: string[]
}