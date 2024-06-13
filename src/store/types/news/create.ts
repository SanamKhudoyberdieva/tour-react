import { NameDescType } from "..";

export interface NewsCreateType extends NameDescType {
  position: number,
  image_file: string | null,
}