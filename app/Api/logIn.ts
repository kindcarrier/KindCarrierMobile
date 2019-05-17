import { BASE_URL } from 'Consts'
import UserData from 'Types/user'
import castError from 'Utils/castError'

interface LogInParams {
  email: string,
  password: string,
}

export default (async function logIn(params: LogInParams): Promise<UserData> {
  return fetch(`${BASE_URL}/session`, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify({
      email: params.email,
      password: params.password,
    }),
  })
    .then(castError)
})