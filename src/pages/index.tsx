import type { NextPage } from 'next'
import { css } from '../../styled-system/css'

const Home: NextPage = () => {
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
