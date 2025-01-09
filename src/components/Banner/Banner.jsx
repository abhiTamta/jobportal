import { Button, Flex, Form, Input, Select } from 'antd'
import "./search-section.css"

const searchFormHandler = (values) => {
  console.log(values)
}

const Banner = () => {
  return (
    <section className='w-full mx-auto px-5 py-16 lg:w-3/4'>
      <div className="flex justify-center flex-col">
        <div className="headingTitle text-center py-12 px-4 pb-16">
          <h1 className='text-5xl font-bold mb-3'>Find your dream job now</h1>
          <h4 className='text-xl'>5 lakh+ jobs for you to explore</h4>
        </div>

        <div className="jobSearchSection shadow-sm">
          <Form name="jobsearchForm" onFinish={searchFormHandler} autoComplete="off" size='large'>
            <Flex gap={10} align='center' justify='center'>
              <Form.Item className='m-0 w-6/12 focus:outline-none' label={null} name="skillsCompanies">
                <Input className='skillItem' placeholder='Enter skills / designations / companies' />
              </Form.Item>

              <Form.Item className='m-0 w-3/12' label={null} name="jobExperience">
                <Select placeholder="Select experience" className='experienceItem'>
                  <Select.Option value="fresher">Fresher (less than 1 year)</Select.Option>
                  <Select.Option value="1 year">1 year</Select.Option>
                  <Select.Option value="2 year">2 year</Select.Option>
                  <Select.Option value="3 year">3 year</Select.Option>
                  <Select.Option value="4 year">4 year</Select.Option>
                  <Select.Option value="5 year">5 year</Select.Option>
                  <Select.Option value="6 year">6 year</Select.Option>
                  <Select.Option value="7 year">7 year</Select.Option>
                  <Select.Option value="8 year">8 year</Select.Option>
                  <Select.Option value="9 year">9 year</Select.Option>
                  <Select.Option value="10 year">10 year</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item className='m-0 w-3/12' label={null} name="jobLocation">
                <Input className='locationItem' placeholder='Enter location' />
              </Form.Item>

              <Form.Item className='m-0' label={null}>
                <Button type="primary" htmlType="submit" className='searchBtn'>Search</Button>
              </Form.Item>
            </Flex>
          </Form>
        </div>
      </div>
    </section>
  )
}

export default Banner