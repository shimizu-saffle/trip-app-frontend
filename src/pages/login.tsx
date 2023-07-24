import type { NextPage } from 'next'
import Image from 'next/image'
import googleLogo from 'public/images/google_logo.png'
// FIXME(shimizu-saffle): jsonファイルを読み込めているのにエラーが出てしまう。画面の表示には問題ないので一旦無視してる。
import lottieJson from 'public/lottie/travel-loading.json'
import Lottie from 'react-lottie-player'
import { Flex, VStack, styled } from '../../styled-system/jsx'
import BrandButton from '../components/BrandButton'

const Login: NextPage = () => {
  return (
    <Flex align={'center'} justify={'center'} height={'100vh'}>
      <VStack gap={'5rem'} padding={'2rem'}>
        <styled.h1 textStyle={'lg'} color={'trip-green'}>
          Tabiyori
        </styled.h1>
        <Lottie animationData={lottieJson} play style={{ height: '45vh' }} />
        <BrandButton
          label={'Googleでログイン'}
          brandLogo={
            <Image src={googleLogo} alt="Google logo" width={50}></Image>
          }
          onClick={() => {
            // TODO(shimizu-saffle): Googleログイン処理
          }}
          backgroundColor={'white'}
          labelColor={'trip-gray'}
        />
      </VStack>
    </Flex>
  )
}

export default Login
