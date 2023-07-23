import type { NextPage } from 'next'
import Image from 'next/image'
import { Flex, VStack, styled } from '../../styled-system/jsx'
import BrandButton from '../components/BrandButton'
import googleLogo from '/public/google_logo.png'

const Login: NextPage = () => {
  return (
    <>
      <Flex align={'center'} justify={'center'} height={'100vh'}>
        <VStack gap={'2rem'}>
          <styled.h1 fontSize={'7xl'}>Tabiyori</styled.h1>
          <div>{/* React Lottie でアニメーションを配置 */}</div>
          <BrandButton
            label={'Googleでログイン'}
            brandLogo={
              <Image src={googleLogo} alt="Google logo" width={50}></Image>
            }
            onClick={() => {
              // TODO(shimizu-saffle): Googleログイン処理
            }}
            backgroundColor={'white'}
            labelColor={'gray'}
          />
        </VStack>
      </Flex>
    </>
  )
}

export default Login
