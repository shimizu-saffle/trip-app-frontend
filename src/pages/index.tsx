import { useQuery } from '@tanstack/react-query'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import googleLogo from 'public/images/google_logo.png'
import { useEffect } from 'react'
import { css } from '../../styled-system/css'
import BrandButton from '../components/BrandButton'
import { QUERY_KEYS } from '../constants/keys'
import { useLogoutProcess } from '../hooks/useLogoutProcess'
import { AppUser } from '../types/AppUser'

const Home: NextPage = () => {
  const router = useRouter()
  const { data: currentUser } = useQuery<AppUser | null>([QUERY_KEYS.AppUser])
  const { runLogout } = useLogoutProcess()

  useEffect(() => {
    if (!currentUser) {
      router.push(`/login`)
    }
  }, [currentUser, router])

  if (currentUser === null) {
    return null
  }
  return (
    <>
      <div
        className={css({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          fontSize: '9xl',
          fontWeight: 'bold',
        })}
      >
        Tabiyori 🌏
        <BrandButton
          label={'ログアウト'}
          brandLogo={
            <Image src={googleLogo} alt="Google logo" width={50}></Image>
          }
          onClick={runLogout}
          backgroundColor={'white'}
        />
      </div>
    </>
  )
}

export default Home
