import { useMutation, useQueryClient } from '@tanstack/react-query'
import { User, onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { QUERY_KEYS } from '../constants/keys'
import { createUserWithFirebaseIdToken } from '../lib/api/authApi'
import { auth } from '../lib/firebase/clientApp'
import { AppUser } from '../types/AppUser'

export const useAuthStateSync = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation(
    async (token: string) => {
      console.log('call mutation')
      const appUser = await createUserWithFirebaseIdToken(token)
      return appUser
    },
    {
      onSuccess: (appUser: AppUser) => {
        queryClient.setQueriesData([QUERY_KEYS.AppUser], appUser)
      },
    }
  )

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user: User | null) => {
      console.log('call unsubscribe')
      if (user) {
        const token = await user.getIdToken()
        mutation.mutate(token)
      } else {
        queryClient.setQueriesData([QUERY_KEYS.AppUser], undefined)
      }
    })

    return unsubscribe
  }, [mutation, queryClient])
}
