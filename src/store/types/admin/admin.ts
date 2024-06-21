import { OrganizationType } from "..";
import { RoleType } from "../role/role";

export interface AdminType {
    id: number,
    organization: OrganizationType | null,
    organization_id: number | null,
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
    is_deleted: boolean,
    application_count: number
}