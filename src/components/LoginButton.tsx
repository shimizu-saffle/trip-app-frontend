'use client'

import Image from 'next/image'
import { useSignInWithGoogle } from '../hooks/useSignInWithGoogle'
import BrandButton from './BrandButton'

const LoginButton: React.FC = () => {
  const { signInWithGoogle } = useSignInWithGoogle()

  return (
    <BrandButton
      label={'Googleでログイン'}
      brandLogo={
        <Image
          src="/images/google_logo.png"
          alt="Google logo"
          height={50}
          width={50}
        />
      }
      backgroundColor={'white'}
      onClick={signInWithGoogle}
    />
  )
}

export default LoginButton
