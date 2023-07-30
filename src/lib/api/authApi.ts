import { AppUser } from '../../types/AppUser'
import apiClient from './client'

export const createUserWithFirebaseIdToken = async (
  name: string
): Promise<AppUser> => {
  const res = await apiClient.post('/auth/login/firebase_id_token', {
    name,
  })
  return res.data
}
