import { FcGoogle } from "react-icons/fc";
import { TbUserHexagon } from "react-icons/tb";
import { Button, Divider } from "antd";
import "../../assets/css/loginFrom.css"
import { useState } from "react";
import LoginEmail from "./login_email"
import LoginMobile from "./login_mobile"

const EmployesLogin = () => {
  const [loginType, setLoginType] = useState(true);

  function loginformHandler(data) {
    setLoginType(data)
  }

  return (
    <div className="container mx-auto px- py-16 md:px-0 lg:px-0">
      <div className="bg-white mx-auto w-full lg:w-8/12 flex justify-between">
        
        <div className="w-full hidden md:flex">
          <div className="images">
            <img src="./../images/login_clipart.png" alt="" />
          </div>
        </div>

        <div className="w-full md:w-8/12 lg:w-10/12 xl:w-7/12 bg-blue-600 p-6">
          <div className="flex text-white gap-2 items-center mb-4">
            <TbUserHexagon size={40} />
            <h2 className="text-2xl font-bold"> Login</h2>
          </div>
          <div className="loginFrom">
            {loginType ? <LoginEmail loginType={loginformHandler} /> : <LoginMobile loginType={loginformHandler} />}
            <Divider className="loginDivider">Or</Divider>
            <Button className="googleSingBtn"><FcGoogle size={30} /> Sign in with Google</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployesLogin;
