
export default interface Negotiation {
  id: number,
  user_id: number,
  name: string,
  description: string,
  type: number,
  service_cost: number,
  photo: string | null,
}