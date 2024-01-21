import { useMutation, useQueryClient } from '@tanstack/react-query'
import { signOut } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import { QUERY_KEYS } from '../constants/keys'
import { auth } from '../lib/firebase/clientApp'
import { AppUser } from '../types/AppUser'

export const useLogoutProcess = () => {
  const queryClient = useQueryClient()
  const router = useRouter()

  const mutation = useMutation(
    async () => {
      await signOut(auth)
    },
    {
      onSuccess: () => {
        queryClient.setQueryData<AppUser | null>([QUERY_KEYS.AppUser], null)
        router.push('/')
      },
      onError: (error) => {
        // TODO(shimizu-saffle): トーストを出す
        console.error(error)
      },
    }
  )

  return { runLogout: mutation.mutate }
}
