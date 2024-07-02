import { NameDescType } from "../..";

export interface TourCreateNavigateType extends NameDescType {
  from: string,
  id: number,
  position: number,
  to: string,
}
