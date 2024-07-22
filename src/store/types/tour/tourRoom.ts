import { PaginationType } from "../general/pagination";
import { ComissionsType } from "./comission";
import { TourType } from "./tour";

export interface TourRoomType extends PaginationType {
  tours: [
    {
      id: 2;
      tour: TourType;
      tour_id: 1;
      room: null;
      room_id: 1;
      gender: 1;
      place_count: 2;
      price: 1;
      ordered_place: 0;
    }
  ];
  commission: ComissionsType;
}
