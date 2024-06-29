import { NameDescType } from "../..";
import { TourCreateAirwaysType } from "./airways";
import { TourCreateHotelsType } from "./hotel";
import { TourCreateRoomsType } from "./room";

export interface TourCreateType extends NameDescType {
  airways: TourCreateAirwaysType[];
  baby_price: number;
  child_price: number;
  city_from_id: number;
  from: string;
  hotels: TourCreateHotelsType[];
  place_by_request: boolean;
  position: number;
  rooms: TourCreateRoomsType[];
  tarif_type: string;
  nutrition_type: string;
  to: string;
  visa_price: number;
  night_count: number
}
