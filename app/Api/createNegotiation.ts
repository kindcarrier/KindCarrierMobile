import Negotiation from 'Types/negotiation'
import { BASE_URL } from 'Consts'
import castError from 'Utils/castError'

interface CreateNegotiationParams {
  token: string,
  userId: number,
  name: string,
  description: string,
  type: number,
  serviceCost: number,
}

export default function createNegotiation({ token, name, description, type, ...params }: CreateNegotiationParams): Promise<Negotiation> {
  return fetch(`${BASE_URL}/negotiations`, {
    headers: {
      authorization: token,
    },
    method: 'POST',
    body: JSON.stringify({
      name,
      description,
      type,
      user_id: params.userId,
      service_cost: params.serviceCost,
    }),
  })
  .then(castError)
}
