export interface AdminCreateType {
    is_active: boolean,
    password: string,
    role_id: number | null,
    username: string,
    full_name: string,
    phone: string,
}