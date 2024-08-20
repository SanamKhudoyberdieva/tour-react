import { AplicantCreateType } from "./applicant";
import { ApplicantCreateExtraPackageType } from "./extraPackage";

export interface ApplicantsCreateType {
  applicants: AplicantCreateType[];
  comment: string;
  extra_packages: ApplicantCreateExtraPackageType[];
  phone: string;
  place_count: number;
  second_phone: string;
  total: number;
  total_commission: number;
  tour_id: number;
  tour_room_id: number;
}
