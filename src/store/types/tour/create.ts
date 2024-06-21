import { NameDescType } from "..";

export interface TourCreateType extends NameDescType {
    airways: [
        {
          airway_id: number,
          city_from_id: number,
          city_to_id: number,
          from: string,
          position: number,
          to: string
        }
    ],
    baby_price: number,
    city_from_id: number,
    extra_packages: [
        {
          extra_package_id: number,
          price: number
        }
    ],
    from: string,
    hotels: [
        {
          from: string,
          hotel_id: number,
          nutrition_type: string,
          position: number,
          price: number,
          to: string
        }
    ],
    navigate: [
        {
          description_ru: string,
          description_uz: string,
          from: string,
          name_ru: string,
          name_uz: string,
          position: number,
          to: string
        }
      ],
    night_count: number,
    nutrition_type: string,
    place_by_request: boolean,
    position: number,
    rooms: [
        {
          count: number,
          gender: number,
          price: number,
          room_id: number
        }
      ],
    tarif_type: string,
    to: string
}