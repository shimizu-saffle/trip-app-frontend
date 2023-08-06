import { useQueryClient } from '@tanstack/react-query'
import { User, onAuthStateChanged } from 'firebase/auth'
import nookies from 'nookies'
import { useEffect } from 'react'
import { QUERY_KEYS } from '../constants/keys'
import { createUserWithFirebaseIdToken } from '../lib/api/authApi'
import { auth } from '../lib/firebase/clientApp'
import { AppUser } from '../types/AppUser'

export const useAuthStateSync = () => {
  const queryClient = useQueryClient()
  const currentUser = auth.currentUser

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user: User | null) => {
      console.log('call unsubscribe')
      if (user) {
        const token = await user.getIdToken()
        nookies.set(undefined, 'token', token)

        const appUser = await createUserWithFirebaseIdToken(token)
        queryClient.setQueriesData<AppUser | null>(
          [QUERY_KEYS.AppUser],
          appUser
        )
      } else {
        queryClient.setQueriesData<AppUser | null>([QUERY_KEYS.AppUser], null)
        nookies.set(undefined, 'token', '')
      }
    })

    return unsubscribe
  }, [currentUser, queryClient])
}
