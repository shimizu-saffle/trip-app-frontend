import { useMutation, useQueryClient } from '@tanstack/react-query'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import nookies from 'nookies'
import { QUERY_KEYS } from '../constants/keys'
import { createUserWithFirebaseIdToken } from '../lib/api/authApi'
import { auth } from '../lib/firebase/clientApp'
import { AppUser } from '../types/AppUser'

export const useSignInWithGoogle = () => {
  const queryClient = useQueryClient()
  const provider = new GoogleAuthProvider()
  const mutation = useMutation(
    async () => {
      const result = await signInWithPopup(auth, provider)
      const token = await result.user.getIdToken()
      nookies.set(undefined, 'token', token)

      if (result.user.displayName === null) {
        // TODO(shimizu-saffle): エラーをユーザーに知らせるためのトーストを出す
        return
      }

      const appUser = await createUserWithFirebaseIdToken(
        result.user.displayName
      )
      queryClient.setQueryData<AppUser>([QUERY_KEYS.AppUser], appUser)
    },
    {
      onError: (error) => {
        // TODO(shimizu-saffle): エラーをユーザーに知らせるためのトーストを出す
        console.error(error)
      },
    }
  )
  return { signInWithGoogle: mutation.mutate }
}
