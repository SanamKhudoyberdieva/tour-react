import { RoleType } from "../role/role";

export interface AdminType {
    id: number,
    organization: null,
    organization_id: null,
    username: string,
    full_name: string,
    phone: string,
    role: RoleType | null,
    role_id: number | null,
    created_at: string | null,
    updated_at: string | null,
    last_visit: string,
    is_active: boolean,
    deleted_at: string | null,
    is_deleted: string | null,
    application_count: number
}