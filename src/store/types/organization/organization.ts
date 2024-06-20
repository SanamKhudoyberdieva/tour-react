import { ActionsType } from "..";

export interface OrganizationType extends  ActionsType {
  id: number,
  name: string,
  city: string,
  address: string,
  description: string,
  director: {
    id: number,
    full_name: string
  } | null,
  director_id: number,
  application_count: number,
  worker_count: number
}