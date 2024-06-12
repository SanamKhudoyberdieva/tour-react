import { ActionsType } from '../../general/actions';

export interface RoleItemByIdType extends ActionsType {
    id: number,
    key: string,
    title: string,
    comment: string,
    is_active: true,
    is_deleted: false,
}