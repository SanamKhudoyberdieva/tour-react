import { PaginationType } from "../general/pagination";
import { TourType } from "./tour";

export interface TourPaginationType extends PaginationType {
  tours: TourType[];
}
