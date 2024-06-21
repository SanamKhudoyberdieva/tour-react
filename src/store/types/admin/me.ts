import { AdminType } from "..";
export interface AdminMeType extends AdminType {
    admins: any;
    moduleItemKeys: string[],
}