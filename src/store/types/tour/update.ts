import { AdminShortType } from "../admin/admin";
import { TourAirwayFullType } from "../airway/tourAirwayFull";
import { TourExtraPackageFull } from "../extraPackage/tourExtraPackageFull";
import { TourHotelFullType } from "../hostel/tourHotelFull";
import { TourRoomFullType } from "../room/tourRoomFull";
import { TourCreateNavigateType } from "./create-two/navigate";

export interface TourUpdateType {
  id: number;
  name_uz: string;
  name_ru: string;
  description_uz: string;
  description_ru: string;
  tarif_type: string;
  place_by_request: boolean;
  nutrition_type: string;
  from: string;
  to: string;
  night_count: number;
  baby_price: number;
  child_price: number;
  visa_price: number;
  position: number;
  is_closed: boolean;
  is_deleted: boolean;
  created: { id: number; full_name: string };
  created_at: string;
  updated: AdminShortType | null;
  updated_at: null | string;
  hotels: TourHotelFullType[];
  airways: TourAirwayFullType[];
  room_prices: TourRoomFullType[];
  rooms: null;
  extra_packages: TourExtraPackageFull[];
  application: null;
  navigate: TourCreateNavigateType[];
}
