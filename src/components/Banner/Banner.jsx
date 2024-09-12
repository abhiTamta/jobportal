import { Button, Flex, Form, Input, Select } from 'antd'

const Banner = () => {
  return (
    <section className='w-full mx-auto px-5 lg:w-2/3'>
        <div className="flex justify-center flex-col">
          <div className="headingTitle text-center py-24 px-4 pb-16">
            <h1 className='text-5xl font-bold mb-3'>Find your dream job now</h1>
            <h4 className='text-xl'>5 lakh+ jobs for you to explore</h4>
          </div>

          <div className="jobSearchSection p-5 bg-white mb-10">
            <Form method='post'>
              <Flex className='flex-col md:flex-row' align='center' justify='space-between'>
                <Form.Item name={"searchSkill"} className='mb-0 w-full'>
                  <Input className='w-full' size='large' type="text" placeholder='Enter skills / designations / companies' />
                </Form.Item>
                
                <Form.Item name={"searchexperience"} className='mb-0 w-full'>
                  <Select placeholder="Select experience" className='border-none'>
                    <Select.Option>asfas</Select.Option>
                    <Select.Option>asfas</Select.Option>
                    <Select.Option>asfas</Select.Option>
                  </Select>
                </Form.Item>

                <Form.Item name={"searchLocation"} className='mb-0 w-full'>
                  <Input type='text' placeholder='Enter Location' />
                </Form.Item>

                <Form.Item className='mb-0 w-full'>
                  <Button>Search</Button>
                </Form.Item>
              </Flex>
            </Form>
          </div>
        </div>
      </section>
  )
}

export default Banner