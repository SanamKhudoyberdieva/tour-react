import { AirwayType } from "./airway";

export interface TourAirwayFullType {
  id: number;
  city_from: { id: number; name_uz: string; name_ru: string } | null;
  city_to: { id: number; name_uz: string; name_ru: string } | null;
  position: number;
  from: string;
  to: string;
  airway: AirwayType | null;
}
