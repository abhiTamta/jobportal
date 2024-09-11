import { Button, Flex, Form, Input, Select } from 'antd'
import React from 'react'
import { BiHome } from 'react-icons/bi'
import { FaSearch } from 'react-icons/fa'

const Home = () => {
  return (
    <>
      <section>
        <div className="container mx-auto flex justify-center flex-col">
          <div className="headingTitle text-center py-24 px-4 pb-16">
            <h1 className='text-5xl font-bold mb-3'>Find your dream job now</h1>
            <h4 className='text-xl'>5 lakh+ jobs for you to explore</h4>
          </div>
          <div className="jobSearchSection p-5 bg-white mb-10">
            <Form method='post'>
              <Flex className='flex-col md:flex-row' align='center' justify='space-between'>
                <Form.Item name={"searchSkill"} className='mb-0'>
                  <Input className='w-full' type="text" placeholder='Enter skills / designations / companies' />
                </Form.Item>
                
                <Form.Item name={"searchexperience"} className='mb-0 '>
                  <Select placeholder="Select experience" className='border-none'>
                    <Select.Option>asfas</Select.Option>
                    <Select.Option>asfas</Select.Option>
                    <Select.Option>asfas</Select.Option>
                  </Select>
                </Form.Item>

                <Form.Item name={"searchLocation"} className='mb-0'>
                  <Input type='text' placeholder='Enter Location' />
                </Form.Item>

                <Form.Item className='mb-0'>
                  <Button>Search</Button>
                </Form.Item>
              </Flex>
            </Form>
          </div>
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