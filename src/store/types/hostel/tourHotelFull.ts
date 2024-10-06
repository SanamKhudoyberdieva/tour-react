import { HotelTourUpdateType } from "./hotelTourUpdate";

export interface TourHotelFullType {
  id: number;
  position: number;
  price: number;
  from: string;
  to: string;
  hotel: HotelTourUpdateType | null;
}
