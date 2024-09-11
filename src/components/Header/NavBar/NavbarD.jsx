import { useState } from "react";
import { Menu, Space } from "antd"
import { Link, useNavigate } from "react-router-dom";
import items from "./MenuItem";

const NavbarD = () => {
  const [current, setCurrent] = useState('mail');
  const navigate = useNavigate()

  const onClick = (e) => {
    navigate(e.key)
    setCurrent(e.key);
  };

  return (
    <div className="flex flex-grow justify-between items-center">
      <div className="mainMenu">
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
      </div>
      <div className="">
        <Space size={"large"}>
          <Link className="" to={"/user/login"}>Login</Link>
          <Link className="" to={"/user/registor"} type="button">Register</Link>
        </Space>
      </div>
    </div>
  )
}

export default NavbarD