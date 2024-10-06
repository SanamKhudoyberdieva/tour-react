import { AdminShortType } from "../admin/admin";
import { CityType } from "../city/city";

export interface HotelTourUpdateType {
  id: number;
  name_uz: string;
  name_ru: string;
  city: CityType;
  address_uz: string;
  address_ru: string;
  stars: number;
  description_uz: string;
  description_ru: string;
  position: number;
  created: AdminShortType;
  created_at: string;
  updated: AdminShortType;
  updated_at: null;
}