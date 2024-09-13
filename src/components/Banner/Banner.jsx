import { Button, Flex, Form, Input, Select } from 'antd'
import "./search-section.css"
import { CiSearch } from 'react-icons/ci'
const Banner = () => {
  return (
    <section className='w-full mx-auto px-5 py-16 lg:w-3/4'>
      <div className="flex justify-center flex-col">
        <div className="headingTitle text-center py-12 px-4 pb-16">
          <h1 className='text-5xl font-bold mb-3'>Find your dream job now</h1>
          <h4 className='text-xl'>5 lakh+ jobs for you to explore</h4>
        </div>

        <div className="jobSearchSection shadow-sm">
          <Form method='post'>
            <Flex justify='space-between' align='center' wrap="wrap" gap={20}>
              <Form.Item name={"searchSkill"} className='m-0 flex-grow'>
                <Input type="text" className='p-3' placeholder='Enter skills / designations / companies' />
              </Form.Item>

              <Form.Item name={"searchexperience"} className='m-0 flex-grow'>
                <Select placeholder="Select experience" className='h-12'>
                  <Select.Option>asfas</Select.Option>
                  <Select.Option>asfas</Select.Option>
                  <Select.Option>asfas</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item name={"searchLocation"} className='m-0 flex-grow'>
                <Input type='text' className='p-3' placeholder='Enter Location' />
              </Form.Item>

              <Form.Item className='mb-0'>
                <Button icon={<CiSearch />} className='searchButton'>Search</Button>
              </Form.Item>
            </Flex>
          </Form>
        </div>
      </div>
    </section>
  )
}

export default Banner