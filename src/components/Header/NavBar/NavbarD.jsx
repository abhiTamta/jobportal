import { useState } from "react";
import { Dropdown, Menu, Space } from "antd"
import { Link, useNavigate } from "react-router-dom";
import items from "./MenuItem";
import "../../../assets/css/header.modules.css"


const NavbarD = () => {
  const [current, setCurrent] = useState('mail');
  const navigate = useNavigate()

  const onClick = (e) => {
    navigate(e.key)
    setCurrent(e.key);
  };

  return (
    <div className="hidden flex-grow justify-between items-center lg:flex">
      <div className="mainMenu">
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
      </div>
      <div className="headerButtonGroup">
        <Space size={"large"}>
          <Space size={"middle"}>
            <Link className="loginBtn" to={"/user/login"}>Login</Link>
            <Link className="registorBtn" to={"/user/registor"} type="button">Register</Link>
          </Space>
          <Space>
            <div className="bg-slate-700 w-[1px] h-6"></div>
          </Space>
          <Space>
            <Dropdown menu={{ items }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  For employers
                </Space>
              </a>
            </Dropdown>
          </Space>
        </Space>
      </div>
    </div>
  )
}

export default NavbarD