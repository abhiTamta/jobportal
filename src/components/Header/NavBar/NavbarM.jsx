import { Button, Dropdown, Menu, Space } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const items = [
  {
    label: 'Navigation One',
    key: 'mail',
    icon: <MailOutlined />,
  },
  {
    label: 'Navigation Two',
    key: 'app',
    icon: <AppstoreOutlined />,
    disabled: true,
  },
  {
    label: 'Navigation Three - Submenu',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    key: 'alipay',
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
  },
];

const NavbarD = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <Space className='hidden flex-grow justify-between md:flex'>
      <Space>
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} theme="dark" />
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
          <Dropdown menu={{items}} placement="bottomRight">
            <Button>For employers</Button>
          </Dropdown>
        </Space>
      </Space>
    </Space>
  )
}

export default NavbarD