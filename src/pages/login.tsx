import type { NextPage } from 'next'
import Image from 'next/image'
import { css } from '../../styled-system/css'
import { styled } from '../../styled-system/jsx'
import googleLogo from '/public/google_logo.png'

const Login: NextPage = () => {
  return (
    <>
      <div
        className={css({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          gap: '1rem',
        })}
      >
        <h1 className={css({ fontSize: '7xl' })}>Tabiyori</h1>
        <div>{/* React Lottie でアニメーションを配置 */}</div>
        <styled.button
          bg={'white'}
          color={'black'}
          padding={'1rem'}
          borderRadius={24}
          border={'black 1px solid'}
          cursor={'pointer'}
        >
          <Image src={googleLogo} alt="Google logo"></Image>
          Google ログイン
        </styled.button>
      </div>
    </>
  )
}

export default Login
