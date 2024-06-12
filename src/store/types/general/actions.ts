import { AdminType } from "../admin/admin";

export interface ActionsType {
    created: AdminType | null,
    created_at: string,
    updated: AdminType | null,
    updated_at: null | string,
}