import { useState } from "react";
import { Dropdown, Menu, Space } from "antd"
import { Link, useNavigate } from "react-router-dom";
import items from "./MenuItem";
import "../../../assets/css/header.modules.css"
import DropdownEmployers from "./dropdownEmployers";

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
          <Space align="center" size={"middle"}>
            <Link className="loginBtn py-2 px-5 border rounded-lg border-sky-800 hover:bg-sky-800 hover:text-white" to={"/user/login"} type="button">Login</Link>
            <Link className="registorBtn py-2 px-5 border rounded-lg bg-orange-600 text-white hover:text-white hover:bg-orange-400" to={"/user/registor"} type="button">Register</Link>
          </Space>
          <Space>
            <div className="bg-slate-700 w-[1px] h-6"></div>
          </Space>
          <Space>
            <DropdownEmployers />
          </Space>
        </Space>
      </div>
    </div>
  )
}

export default NavbarD