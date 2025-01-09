import { BiHome } from 'react-icons/bi'
import { Button } from 'antd'

const JobCategry = () => {
  return (
    <section className='container mx-auto py-16'>
        <div className="w-full lg:w-9/12 mx-auto flex flex-wrap gap-5 justify-center">
          <Button className='h-auto text-[18px] text-slate-500 py-3 px-5 hover:shadow-xl' icon={<BiHome twoToneColor="red" />}>Remote</Button>
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
  )
}

export default JobCategry
