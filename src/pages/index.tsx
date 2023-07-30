import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { css } from '../../styled-system/css'
import { appUserState } from '../atoms/appUserAtom'

const Home: NextPage = () => {
  const router = useRouter()
  const [appUser] = useRecoilState(appUserState)

  useEffect(() => {
    if (appUser === null) {
      router.push(`/login`)
    }
  }, [appUser, router])

  if (appUser === null) {
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
      </div>
    </>
  )
}

export default Home
