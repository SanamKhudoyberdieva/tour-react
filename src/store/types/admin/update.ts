import { AdminCreateType } from "..";

export interface AdminUpdateType extends AdminCreateType {
  id: number | null;
}