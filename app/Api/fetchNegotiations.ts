import Negotiation from 'Types/negotiation'
import { BASE_URL } from 'Consts'
import castError from 'Utils/castError'
import Address from 'Types/address'

export default function fetchNegotiation(): Promise<Array<Negotiation>> {
  return fetch(`${BASE_URL}/negotiations`, {
    headers: { 'Content-Type': 'application/json' },
  })
  .then(castError)
}
