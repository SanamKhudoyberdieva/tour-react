import { AdminShortType } from "../admin/admin";

export interface ActionsType {
    created: AdminShortType | null,
    created_at: string,
    updated: AdminShortType | null,
    updated_at: null | string,
}