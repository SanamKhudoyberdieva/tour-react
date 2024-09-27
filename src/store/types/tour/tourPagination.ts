import { PaginationType } from "../general/pagination";
import { TourType } from "./tour";

export interface TouePaginationType extends PaginationType {
  tours: TourType[];
}
