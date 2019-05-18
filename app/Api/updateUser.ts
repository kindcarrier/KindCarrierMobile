import UserData from 'Types/user'
import castError from 'Utils/castError'
import { BASE_URL } from 'Consts'

interface UpdateUserParams {
  id: number,
  token: string,
  firstName?: string,
  lastName?: string,
}

function normalize(params: {firstName?: string, lastName?: string}): any {
  return {
    first_name: params.firstName,
    last_name: params.lastName
  }
}

export default (async function updateUser (params: UpdateUserParams): Promise<UserData> {
  const { id, token, ...other } = params
  const data = normalize(other)
  let formData = new FormData()

  for (var name in data) {
    formData.append(name, data[name])
  }

  const options = {
    headers: {
      'authorization': token,
    },
    method: 'PUT',
    body: formData,
  }
  return fetch(`${BASE_URL}/users/${id}`, options)
    .then(castError)
})
