import type { NextPage } from 'next'
import Image from 'next/image'
import { css } from '../../styled-system/css'
import BrandButton from '../components/BrandButton'
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
        <BrandButton
          label={'Googleでログイン'}
          brandLogo={
            <Image src={googleLogo} alt="Google logo" width={50}></Image>
          }
          onClick={() => {}}
          backgroundColor={'white'}
          labelColor={'gray'}
        />
      </div>
    </>
  )
}

export default Login
