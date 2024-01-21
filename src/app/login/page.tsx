'use client'

import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Flex, VStack, styled } from '../../../styled-system/jsx'
import LoginButton from '../../components/LoginButton'
import { QUERY_KEYS } from '../../constants/keys'
import { AppUser } from '../../types/AppUser'

const LoginPage = () => {
  const router = useRouter()
  const { data: currentUser } = useQuery<AppUser | null>([QUERY_KEYS.AppUser])

  useEffect(() => {
    if (currentUser !== null) {
      router.push('/')
    }
  }, [currentUser, router])

  return (
    <Flex align={'center'} justify={'center'} height={'100vh'}>
      <VStack gap={'2rem'} padding={'2rem'} sm={{ gap: '5rem' }}>
        <styled.h1
          textStyle={'trip'}
          color={'trip-green'}
          fontWeight={'bold'}
          fontSize={'3rem'}
          sm={{ fontSize: '4rem' }}
          md={{ fontSize: '5rem' }}
        >
          Tabiyori 🚪
        </styled.h1>
        <LoginButton />
      </VStack>
    </Flex>
  )
}
export default LoginPage
