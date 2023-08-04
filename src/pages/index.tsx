import { useQuery } from '@tanstack/react-query'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { css } from '../../styled-system/css'
import { QUERY_KEYS } from '../constants/keys'
import { AppUser } from '../types/AppUser'

const Home: NextPage = () => {
  const router = useRouter()
  const { data: currentUser } = useQuery<AppUser>([QUERY_KEYS.AppUser])

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
      </div>
    </>
  )
}

export default Home
