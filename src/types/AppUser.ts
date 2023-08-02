import { Json } from './ApiResponse'

export interface AppUser {
  id: number
  name: string
  email: string
}

export function appUserFromJson(json: Json): AppUser {
  if (
    typeof json.id !== 'number' ||
    typeof json.name !== 'string' ||
    typeof json.email !== 'string'
  ) {
    throw new Error('Invalid JSON format for AppUser')
  }
  return {
    id: json.id as number,
    name: json.name as string,
    email: json.email as string,
  }
}
