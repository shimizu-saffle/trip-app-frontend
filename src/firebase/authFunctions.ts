import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

import { auth } from './clientApp'

export const signInWithGoogle: unknown = async () =>
  signInWithPopup(auth, new GoogleAuthProvider())
