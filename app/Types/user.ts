export default interface UserData {
  id: number,
  first_name: string,
  last_name: string,
  email: string,
  token: string,
  avatar: {
    url: string | null,
  }
}