import { ApiResponse } from '../../types/ApiResponse'
import { AppUser, appUserFromJson } from '../../types/AppUser'
import apiClient from './client'

export const createUserWithFirebaseIdToken = async (
  name: string
): Promise<AppUser> => {
  const res = await apiClient.post<ApiResponse>(
    '/auth/login/firebase_id_token',
    { name }
  )
  return appUserFromJson(res.data.data)
}
