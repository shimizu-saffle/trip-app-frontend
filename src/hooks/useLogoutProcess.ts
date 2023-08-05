import { useMutation, useQueryClient } from '@tanstack/react-query'
import { signOut } from 'firebase/auth'
import { QUERY_KEYS } from '../constants/keys'
import { auth } from '../lib/firebase/clientApp'
import { AppUser } from '../types/AppUser'

export const useLogoutProcess = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation(
    async () => {
      await signOut(auth)
    },
    {
      onSuccess: () => {
        queryClient.setQueryData<AppUser | null>([QUERY_KEYS.AppUser], null)
      },
      onError: (error) => {
        // TODO(shimizu-saffle): トーストを出す
        console.error(error)
      },
    }
  )

  return { runLogout: mutation.mutate }
}
