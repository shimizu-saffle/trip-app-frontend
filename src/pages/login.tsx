import { useQuery } from '@tanstack/react-query'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Flex, VStack, styled } from '../../styled-system/jsx'
import BrandButton from '../components/BrandButton'
import { QUERY_KEYS } from '../constants/keys'
import { useSignInWithGoogle } from '../hooks/useSignInWithGoogle'
import { AppUser } from '../types/AppUser'

const Login: NextPage = () => {
  const { data: currentUser } = useQuery<AppUser | null>([QUERY_KEYS.AppUser])
  const { signInWithGoogle } = useSignInWithGoogle()
  const router = useRouter()

  useEffect(() => {
    if (currentUser) {
      router.push(`/`)
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
          Tabiyori
        </styled.h1>
        <BrandButton
          label={'Googleでログイン'}
          brandLogo={
            <Image
              src={'/images/google_logo.png'}
              alt="Google logo"
              width={50}
              height={50}
            ></Image>
          }
          onClick={signInWithGoogle}
          backgroundColor={'white'}
        />
      </VStack>
    </Flex>
  )
}
export default Login
