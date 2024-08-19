import { Flex, Form, Select } from 'antd'
import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Home = () => {
  return (
    <section>
      <div className="container mx-auto flex justify-center flex-col">
        <div className="headingTitle text-center pt-24 pb-16">
          <h1 className='text-5xl font-bold mb-3'>Find your dream job now</h1>
          <h4 className='text-xl'>5 lakh+ jobs for you to explore</h4>
        </div>
        <div className="jobSearchSection w-8/12 mx-auto p-6 rounded-full bg-white shadow-lg">
          <form action="" method='post'>
            <Flex align='center' justify='space-between'>
              <Form>
                
              </Form>
            </Flex>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Home