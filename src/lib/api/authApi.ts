import { ApiResponse } from '../../types/ApiResponse'
import { AppUser, appUserFromJson } from '../../types/AppUser'
import apiClient from './client'

/**
 * ユーザーデータが trip-app-backend に存在しない場合は新規登録が行われる。
 *
 * 登録済みのユーザーの場合は、既に存在するユーザーデータが返される。
 */
export const createUserWithFirebaseIdToken = async (
  name: string
): Promise<AppUser> => {
  const res = await apiClient.post<ApiResponse>(
    '/auth/login/firebase_id_token',
    { name }
  )
  return appUserFromJson(res.data.data)
}
