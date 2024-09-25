import { PaginationType } from "../..";
import { ApplicantionType } from "./application";

export interface ApplicantionPaginationType extends PaginationType {
    applications: ApplicantionType[];
}
  