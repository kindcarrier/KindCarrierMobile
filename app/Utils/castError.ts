class ApiError extends Error {
  errors: any
  response: any
  constructor (message: string, errors: any, response: any) {
    super(message)
    this.name = 'ApiError'
    this.message = message
    this.errors = errors
    this.response = response
  }
}


export default (async function castError (res: any) {
  let json = await res.json().catch((e: any) => null)
  if (res.ok && json && !json.error) return json
  if (json && json.error) {
    const message = json.error.errors ? json.error.errors[0] : (json.error.message || json.error)
    const errors = json.errors || json.fieldErrors
    throw new ApiError(message, errors, json)
  }
  if (json && json.message) {
    throw new ApiError(json.message, null, json)
  }

})
