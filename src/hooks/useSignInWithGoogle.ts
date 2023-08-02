import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import nookies from 'nookies'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { appUserState } from '../atoms/appUserAtom'
import { createUserWithFirebaseIdToken } from '../lib/api/authApi'
import { auth } from '../lib/firebase/clientApp'

export const useSignInWithGoogle = () => {
  const provider = new GoogleAuthProvider()
  const [currentUser, setCurrentUser] = useRecoilState(appUserState)

  // TODO(shimizu-saffle): ログイン機能を実装次第削除する
  useEffect(() => {
    console.log('currentUser changed:', currentUser?.name)
  }, [currentUser])

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
