import type { GetServerSidePropsContext, NextPage } from 'next'
import Image from 'next/image'
import { css } from '../../styled-system/css'
import BrandButton from '../components/BrandButton'
import { useLogoutProcess } from '../hooks/useLogoutProcess'

import { getServerAuthSession } from '../server/auth'

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerAuthSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }
  return { props: {} }
}

const Home: NextPage = () => {
  const { runLogout } = useLogoutProcess()

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
        <BrandButton
          label={'ログアウト'}
          brandLogo={
            <Image
              src={'/images/google_logo.png'}
              alt="Google logo"
              height={50}
              width={50}
            ></Image>
          }
          onClick={runLogout}
          backgroundColor={'white'}
        />
      </div>
    </>
  )
}

export default Home
