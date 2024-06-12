import { ActionsType } from '../../general/actions';
import { ModuleItemType } from '../../moduleItem/moduleItem';
import { RoleType } from '../role';

export interface RoleItemType extends ActionsType {
    id: number,
    role: RoleType | null,
    role_id: number,
    key: string,
    module_item: ModuleItemType | null,
}