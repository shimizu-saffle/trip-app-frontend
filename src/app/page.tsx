import { Flex, VStack, styled } from '../../styled-system/jsx'
import LogoutButton from '../components/LogoutButton'

const HomePage = async () => {
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

export default HomePage
