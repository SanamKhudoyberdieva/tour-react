import { AdminCreateType } from "./create";

export interface AdminUpdateType extends AdminCreateType {
    password: string;
    id: number | null;
  }