import type { NextPage } from 'next'
import { css } from '../../styled-system/css'

const Home: NextPage = () => {
  return (
    <>
      <div
        className={css({
          fontSize: '2xl',
          fontWeight: 'bold',
        })}
      >
        Trip App 🛩
      </div>
    </>
  )
}

export default Home
