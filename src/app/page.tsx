import { redirect } from 'next/navigation'
import { NextRequest } from 'next/server'
import { Flex, VStack, styled } from '../../styled-system/jsx'
import LogoutButton from '../components/LogoutButton'
import { serverAuthCheck } from '../server/auth'

const Home = async (request: NextRequest) => {
  const user = await serverAuthCheck(request)

  if (!user) {
    return redirect('/login')
  }

  return (
    <Flex align={'center'} justify={'center'} height={'100vh'}>
      <VStack gap={8}>
        <styled.h1
          textStyle={'trip'}
          color={'trip-green'}
          fontWeight={'bold'}
          fontSize={'8xl'}
        >
          Tabiyori 🌏
        </styled.h1>
        <LogoutButton />
      </VStack>
    </Flex>
  )
}

export default Home
