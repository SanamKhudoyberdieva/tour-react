import { AplicantCreateType } from "./applicant";
import { ApplicantCreateExtraPackageType } from "./extraPackage";

export interface ApplicantsCreateType {
  applicants: AplicantCreateType[];
  comment: string;
  extra_packages: ApplicantCreateExtraPackageType[];
  place_count: number;
  total: number;
  total_commission: number;
  tour_id: number;
  tour_room_id: number;
}
