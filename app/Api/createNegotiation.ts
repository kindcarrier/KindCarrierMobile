import Negotiation from 'Types/negotiation'
import { BASE_URL } from 'Consts'
import castError from 'Utils/castError'
import Address from 'Types/address'

interface CreateNegotiationParams {
  token: string,
  userId: number,
  name: string,
  description: string,
  type: string,
  serviceCost: number,
  addressFrom: Address,
  addressTo: Address,
}

export default function createNegotiation({ token, ...params }: CreateNegotiationParams): Promise<Negotiation> {
  const body = JSON.stringify({
    name: params.name,
    description: params.description,
    type: params.type,
    owner_id: params.userId,
    service_cost: params.serviceCost,
    address_from: JSON.stringify(params.addressFrom),
    address_to: JSON.stringify(params.addressTo),
  })
  console.log(body, token)
  return fetch(`${BASE_URL}/negotiations`, {
    headers: {
      authorization: token,
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body, 
  })
  .then(castError)
}
