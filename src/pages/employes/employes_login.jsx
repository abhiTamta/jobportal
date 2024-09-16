import { FcGoogle } from "react-icons/fc";
import { TbUserHexagon } from "react-icons/tb";
import { Button, Divider } from "antd";
import { useState } from "react";
import LoginEmail from "./login_email"
import LoginMobile from "./login_mobile"
import { IoCheckmarkDoneOutline } from "react-icons/io5";

import "../../assets/css/loginFrom.css"

const EmployesLogin = () => {
  const [loginType, setLoginType] = useState(true);

  function loginformHandler(data) {
    setLoginType(data)
  }

  return (
    <div className="container mx-auto px- py-16 md:px-0 lg:px-0">
      <div className="bg-white mx-auto w-full flex justify-between lg:w-10/12 xl:w-8/12 2xl:w-6/12">        
        
        <div className="w-full hidden md:flex flex-col justify-end">
          <div className="px-10 py-5 absolute top-0 z-10">
            <h2 className="text-xl font-bold mb-2">New to pixels Jobs?</h2>
            <ul>
              <li className="flex items-center gap-3 mb-2"><IoCheckmarkDoneOutline color="blue" size={20} /> One click apply using naukri profile.</li>
              <li className="flex items-center gap-3 mb-2"><IoCheckmarkDoneOutline color="blue" size={20} /> Get relevant job recommendations.</li>
              <li className="flex items-center gap-3 mb-2"><IoCheckmarkDoneOutline color="blue" size={20} /> Showcase profile to top companies and consultants.</li>
              <li className="flex items-center gap-3 mb-2"><IoCheckmarkDoneOutline color="blue" size={20} /> Know application status on applied jobs.</li>
            </ul>
          </div>
          <div className="images">
            <img src="./../images/login_clipart.png" alt="" />
          </div>
        </div>

        <div className="w-full bg-blue-600 p-6 md:w-8/12 2xl:w-8/12">
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
