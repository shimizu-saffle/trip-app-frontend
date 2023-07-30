import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import nookies from 'nookies'
import { useRecoilState } from 'recoil'
import { appUserState } from '../atoms/appUserAtom'
import { createUserWithFirebaseIdToken } from '../lib/api/authApi'
import { auth } from '../lib/firebase/clientApp'

export const useSignInWithGoogle = () => {
  const provider = new GoogleAuthProvider()
  const [, setCurrentUser] = useRecoilState(appUserState)

  const signInWithGoogle = async () => {
    try {
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
      setCurrentUser(appUser)
    } catch (error) {
      // TODO(shimizu-saffle): エラーをユーザーに知らせるためのトーストを出す
      console.error(error)
    }
  }
  return { signInWithGoogle }
}
