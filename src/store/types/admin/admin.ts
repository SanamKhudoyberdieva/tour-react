import { RoleType } from "../role/role";

export interface AdminType {
    created_at: string,
    deleted_at: string | null,
    id: number,
    is_active: boolean,
    last_visit: string,
    role: RoleType | null,
    role_id: number | null,
    updated_at: string | null,
    username: string,
    full_name: string,
    phone: string,
    is_deleted: string | null
}