import { ExtraPackageType } from "./extraPackage";

export interface TourExtraPackageFull {
  id: number;
  tour_id: number;
  extra_package: ExtraPackageType;
  extra_package_id: number;
  price: number;
}