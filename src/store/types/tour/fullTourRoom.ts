import { PaginationType } from "../general/pagination";
import { ComissionsType } from "./comission";
import { ToursByRoomType } from "./toursByRoomType";

export interface FullTourRoomType extends PaginationType {
  commission: ComissionsType;
  tours: ToursByRoomType[];
}
