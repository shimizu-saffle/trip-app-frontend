'use client'

import Image from 'next/image'
import { useLogoutProcess } from '../hooks/useLogoutProcess'
import BrandButton from './BrandButton'

const LogoutButton: React.FC = () => {
  const { runLogout } = useLogoutProcess()

  return (
    <BrandButton
      label="ログアウト"
      brandLogo={
        <Image
          src="/images/google_logo.png"
          alt="Google logo"
          height={50}
          width={50}
        />
      }
      backgroundColor="white"
      onClick={runLogout}
    />
  )
}

export default LogoutButton
