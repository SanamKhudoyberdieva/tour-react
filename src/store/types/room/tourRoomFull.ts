import { RoomType } from "./room";

export interface TourRoomFullType {
  id: number;
  tour: null;
  gender: number;
  room: RoomType;
  price: number;
  count: number;
}