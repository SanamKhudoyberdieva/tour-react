import { ModuleType } from "../module/module";

export interface ModuleItemType {
    id: number,
    module: ModuleType,
    name_ru: string,
    name_uz: string,
    name_en: string,
    end_point: string,
    method: string,
    key: string,
    description: string
}