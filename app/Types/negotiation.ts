import Address from 'Types/address'

export default interface Negotiation {
  id: number,
  user_id: number,
  name: string,
  description: string,
  type: number,
  service_cost: number,
  photo: string | null,
  created_at: string,
  updated_at: string,
  address_from: Address,
  address_to: Address,
}