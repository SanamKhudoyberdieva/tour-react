import { AdminType, PaginationType } from "..";

export interface AdminListType extends PaginationType {
    admins: AdminType[];
}