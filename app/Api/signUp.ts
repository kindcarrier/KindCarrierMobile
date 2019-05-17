import { BASE_URL } from 'Consts'
import UserData from 'Types/user'
import castError from 'Utils/castError'

interface SignUpParams {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
}

export default (async function signUp(params: SignUpParams): Promise<UserData> {
  return fetch(`${BASE_URL}/users`, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify({
      first_name: params.firstName,
      last_name: params.lastName,
      email: params.email,
      password: params.password,
    }),
  })
    .then(castError)
})