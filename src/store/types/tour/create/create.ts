import { NameDescType } from "../..";
import { TourCreateAirwaysType } from "./airways";
import { TourCreateExtraPackageType } from "./extraPackage";

export interface TourCreateType extends NameDescType {
  airways: TourCreateAirwaysType[];
  baby_price: number;
  child_price: number;
  city_from_id: number;
  extra_packages: TourCreateExtraPackageType[];
  from: string;
  hotels: [
    {
      from: string;
      hotel_id: number;
      nutrition_type: string;
      position: number;
      price: number;
      to: string;
    }
  ];
  navigate: [
    {
      description_ru: string;
      description_uz: string;
      from: string;
      name_ru: string;
      name_uz: string;
      position: number;
      to: string;
    }
  ];
  night_count: number;
  place_by_request: boolean;
  position: number;
  rooms: [
    {
      count: number;
      gender: number;
      price: number;
      room_id: number;
    }
  ];
  tarif_type: string;
  to: string;
  visa_price: number;
}
