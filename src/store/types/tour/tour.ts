import { AirwayType, CityType, HostelType, NameDescType, RoomType } from "..";
import { ActionsType } from "../general/actions";
import { NavigationType } from "./navigation";

export interface TourType extends NameDescType, ActionsType {
  id: number;
  tarif_type: string;
  place_by_request: boolean;
  nutrition_type: string;
  from: string;
  to: string;
  night_count: number;
  baby_price: number;
  child_price: number;
  position: number;
  is_closed: boolean;
  is_deleted: boolean;
  hotels: [
    {
      id: number;
      position: number;
      price: number;
      from: string;
      to: string;
      hotel: null | HostelType;
    }
  ];
  airways: [
    {
      id: number;
      city_from: CityType;
      city_to: CityType;
      position: number;
      from: string;
      to: string;
      airway: AirwayType;
    }
  ];
  room_prices: [
    {
      id: number;
      tour: null;
      gender: number;
      room: RoomType;
      price: number;
      count: number;
    }
  ];
  rooms: null;
  extra_packages: {
    id: number,
    tour_id: number,
    extra_package: {
      id: number,
      name_uz: string
      name_ru: string
      description_uz: string
      description_ru: string
      position: number,
      created: null,
      created_at: string
      updated: null,
      updated_at: string|string
    },
    extra_package_id: number,
    price: number
  }[];
  application: null;
  navigate: NavigationType[];
  visa_price: number;
}
