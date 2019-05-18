import { BASE_URL } from 'Consts'

export default function getImageUrl(url: string): string {
  return `${BASE_URL}${url}`
}