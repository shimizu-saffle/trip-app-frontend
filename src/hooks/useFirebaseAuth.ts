import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { app } from '../firebase/clientApp'

export const useFirebaseAuth = () => {
  const auth = getAuth(app)
  const provider = new GoogleAuthProvider()

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider)
      const token = await result.user.getIdToken()
      // TODO(shimizu-saffle): trip-app-api でユーザー作成
      console.log(token)
    } catch (error) {
      // TODO(shimizu-saffle): トーストを出す
      console.error(error)
    }
  }
  return { signInWithGoogle }
}
