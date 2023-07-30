import { atom } from 'recoil'
import { AppUser } from '../types/AppUser'

export const appUserState = atom<AppUser | null>({
  key: 'appUserState',
  default: null,
})
