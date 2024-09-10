import { Button, Dropdown, Space } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const items = [
  {
    key: "1",
    label: <Link to={"/"}>Employer Login</Link>,
  },
];

const NavbarD = () => {
  return (
    <Space className='hidden flex-grow justify-between md:flex'>
      <Space>
        <ul className='flex gap-5'>
          <li>
            <Link to={"/"}>Jobs</Link>
          </li>
          <li>
            <Link to={"/"}>Boost</Link>
          </li>
          <li>
            <Link to={"/"}>Prep</Link>
          </li>
          <li>
            <Link to={"/"}>Learn</Link>
          </li>
        </ul>
      </Space>
      <Space size="large">
        <Space>
          <Link
            className="py-2 px-5 rounded-lg text-black border border-blue-700 hover:text-white hover:bg-blue-700"
            to={"/user/login"}
          >
            Login
          </Link>
          <Link
            className="py-2 px-5 rounded-lg bg-orange-700 text-white hover:text-white hover:bg-orange-400"
            to={"/user/registor"}
            type="button"
          >
            Register
          </Link>
        </Space>
        <Space>
          <Dropdown
            menu={{
              items,
            }}
            placement="bottomRight"
          >
            <Button>For employers</Button>
          </Dropdown>
        </Space>
      </Space>
    </Space>
  )
}

export default NavbarD