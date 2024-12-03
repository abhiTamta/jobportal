import { BiHome } from 'react-icons/bi'
import Banner from '../components/Banner/Banner'
import { Button, Typography } from 'antd'
import JobListingCard from '../components/Card/JobListingCard'
import TopCompanyCard from '../components/Card/TopCompanyCard'

const Home = () => {
  return (
    <>
      <Banner />

      <section className='container mx-auto py-16'>
        <div className="w-full lg:w-9/12 mx-auto flex flex-wrap gap-5 justify-center">
          <Button className='h-auto text-[18px] text-slate-500 py-3 px-5 hover:shadow-xl' icon={<BiHome />}>Remote</Button>
          <Button className='h-auto text-[18px] text-slate-500 py-3 px-5 hover:shadow-xl' icon={<BiHome />}>MNC</Button>
          <Button className='h-auto text-[18px] text-slate-500 py-3 px-5 hover:shadow-xl' icon={<BiHome />}>Data Science</Button>
          <Button className='h-auto text-[18px] text-slate-500 py-3 px-5 hover:shadow-xl' icon={<BiHome />}>Supply Chain</Button>
          <Button className='h-auto text-[18px] text-slate-500 py-3 px-5 hover:shadow-xl' icon={<BiHome />}>Executive</Button>
          <Button className='h-auto text-[18px] text-slate-500 py-3 px-5 hover:shadow-xl' icon={<BiHome />}>Sales</Button>
          <Button className='h-auto text-[18px] text-slate-500 py-3 px-5 hover:shadow-xl' icon={<BiHome />}>Analytics</Button>
          <Button className='h-auto text-[18px] text-slate-500 py-3 px-5 hover:shadow-xl' icon={<BiHome />}>fortune 500</Button>
          <Button className='h-auto text-[18px] text-slate-500 py-3 px-5 hover:shadow-xl' icon={<BiHome />}>Marketing</Button>
          <Button className='h-auto text-[18px] text-slate-500 py-3 px-5 hover:shadow-xl' icon={<BiHome />}>HR</Button>
          <Button className='h-auto text-[18px] text-slate-500 py-3 px-5 hover:shadow-xl' icon={<BiHome />}>Fresher</Button>
          <Button className='h-auto text-[18px] text-slate-500 py-3 px-5 hover:shadow-xl' icon={<BiHome />}>Project Manager</Button>
        </div>
      </section>


      <section className='container mx-auto py-16'>
        <Typography.Title className='text-center font-bold'>Top companies hiring now</Typography.Title>
      </section>

      {/* <section className='py-12'>
        <div className="container mx-auto">
          <div className="w-full text-center">
            <h2 className='text-3xl mb-2'>Jobs you may be interested in</h2>
            <p className='text-lg'>
              Explore roles in tech, design, marketing, or finance—find your perfect fit!
            </p>
          </div>

          <div className="jobListing mt-10">
            <JobListingCard />
          </div>
        </div>
      </section> */}

      {/* <section className='py-12'>
        <div className="container mx-auto">
          <div className="w-full text-center">
            <h2 className='text-3xl mb-2'>Top companies hiring now</h2>
            <p className='text-lg'>
              Explore roles in tech, design, marketing, or finance—find your perfect fit!
            </p>
          </div>

          <div className="jobListing mt-10">
            <TopCompanyCard />
          </div>
        </div>
      </section>
      
      

      <section className='container mx-auto py-16'>
        <h2>Sponsored companies</h2>
      </section> */}
    </>
  )
}

export default Home