import { BiHome } from 'react-icons/bi'
import { FaSearch } from 'react-icons/fa'
import Banner from '../components/Banner/Banner'
import { Button } from 'antd'

const Home = () => {
  return (
    <>
      <Banner />

      <section className='py-12'>
        <div className="container mx-auto">
          <div className="w-full text-center">
            <h2 className='text-3xl mb-2'>Jobs you may be interested in</h2>
            <p className='text-lg'>
              Explore roles in tech, design, marketing, or finance—find your perfect fit!
            </p>
          </div>

          <div className=""></div>
        </div>
      </section>


      <section className='container mx-auto py-16'>
        <div className="flex flex-wrap gap-5 justify-center">
          <Button icon={<BiHome />} size='large'>Remote</Button>
          <Button icon={<BiHome />} size='large'>Remote</Button>
          <Button icon={<BiHome />} size='large'>Remote</Button>
          <Button icon={<BiHome />} size='large'>Remote</Button>
          <Button icon={<BiHome />} size='large'>Remote</Button>
          <Button icon={<BiHome />} size='large'>Remote</Button>
          <Button icon={<BiHome />} size='large'>Remote</Button>
          <Button icon={<BiHome />} size='large'>Remote</Button>
          <Button icon={<BiHome />} size='large'>Remote</Button>
          <Button icon={<BiHome />} size='large'>Remote</Button>
          <Button icon={<BiHome />} size='large'>Remote</Button>
          <Button icon={<BiHome />} size='large'>Remote</Button>
          <Button icon={<BiHome />} size='large'>Remote</Button>
          <Button icon={<BiHome />} size='large'>Remote</Button>
          <Button icon={<BiHome />} size='large'>Remote</Button>
          <Button icon={<BiHome />} size='large'>Remote</Button>
          <Button icon={<BiHome />} size='large'>Remote</Button>
          <Button icon={<BiHome />} size='large'>Remote</Button>
        </div>
      </section>

      <section className='container mx-auto py-16'>
        <h2>Top companies hiring now</h2>
      </section>
      <section className='container mx-auto py-16'>
        <h2>Featured companies actively hiring</h2>
      </section>
      <section className='container mx-auto py-16'>
        <h2>Sponsored companies</h2>
      </section>
    </>
  )
}

export default Home