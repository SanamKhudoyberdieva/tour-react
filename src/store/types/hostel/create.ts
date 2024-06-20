import { NameDescType } from "..";

export interface HostelCreateType extends NameDescType {
  position: number,
  stars: number,
  city_id: number
}