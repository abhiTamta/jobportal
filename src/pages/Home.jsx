import { Typography } from 'antd'
import Banner from '../components/Banner/Banner'

const Home = () => {
  return (
    <>
      <Banner />

      <section className='container mx-auto py-16'>
        <Typography.Title className='text-center font-bold'>Top companies hiring now</Typography.Title>
      </section>
    </>
  )
}

export default Home