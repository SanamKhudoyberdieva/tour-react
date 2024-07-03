import { ExtraPackageType } from "./extraPackage";

export interface ExtraPackageGetType {
  extra_package: ExtraPackageType | null;
  extra_package_id: number;
  id: number;
  price: number;
  tour_id: number;
}
