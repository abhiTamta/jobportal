import { Flex, Radio } from "antd";
import registorStyle from "../../assets/css/Registor.module.css"
import { Button, message, Upload } from 'antd';
import { Link } from "react-router-dom";
import { useState } from "react";



const EmployesRegistors = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    mobilenumber: '',
    workStatus: '',
    resume: null,
    currentCity: ''
  });

  function registorFromHandler(event) {
    event.preventDefault();
    console.log(formData);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  }

  function handleResumeUpload(file) {
    setFormData(prevData => ({ ...prevData, resume: file }));
  }
  return (
    <div className={registorStyle.userRegistorSection}>
      <div className={`${registorStyle.wapper} lg:w-8/12`}>
        <div className={registorStyle.title}>
          <h1>Create your job profile</h1>
          <h5>Search & apply to jobs from India's No.1 Job Site</h5>
        </div>
        <form method="post" onSubmit={registorFromHandler}>
          <div className={registorStyle.formControls}>
            <label htmlFor="fullname">Full Name<sup className="text-red-700">*</sup></label>
            <input type="text" name="fullname" id="fullname" placeholder="What is your name?" />
          </div>

          <div className={registorStyle.formControls}>
            <label htmlFor="email">Email ID<sup className="text-red-700">*</sup></label>
            <input type="email" name="email" id="email" placeholder="Tell us your Email ID" />
            <p className="text-sm mt-2 text-gray-400">We'll send relevant jobs and updates to this email</p>
          </div>

          <div className={registorStyle.formControls}>
            <label htmlFor="password">Password<sup className="text-red-700">*</sup></label>
            <input type="password" name="password" id="password" placeholder="(Minimum 8 characters)" />
            <p className="text-sm mt-2 text-gray-400">This helps your account stay protected</p>
          </div>

          <div className={registorStyle.formControls}>
            <label htmlFor="mobilenumber">Mobile Number<sup className="text-red-700">*</sup></label>
            <input type="tel" name="mobilenumber" id="mobilenumber" placeholder="Enter your mobile number" />
            <p className="text-sm mt-2 text-gray-400">Recruiters will contact you on this number</p>
          </div>

          <div className={registorStyle.formControls}>
            <label htmlFor="mobilenumber">Work status<sup className="text-red-700">*</sup></label>
            <Flex className="mb-5 w-full">
              <Radio.Group className="flex w-full">
                <Radio.Button className="py-3 px-5 h-auto rounded-none" value={"experienced"}>
                  <div className="flex gap-5 items-center justify-between">
                    <div className="">
                      <h3 className="font-bold text-[16px] mb-0 leading-none">I'm experienced</h3>
                      <p className="font-normal">I have work experience (excluding internships)</p>
                    </div>
                    <div className="w-14">
                      <img src="/images/briefcase.png" alt="" />
                    </div>
                  </div>
                </Radio.Button>
                <Radio.Button className="py-3 px-5 h-auto rounded-none" value={"fresher"}>
                  <div className="flex gap-5 items-center justify-between">
                    <div className="">
                      <h3 className="font-bold text-[16px] mb-0 leading-none">I'm a fresher</h3>
                      <p className="font-normal">I am a student/ Haven't worked after graduation </p>
                    </div>
                    <div className="w-14">
                      <img src="/images/person.png" alt="" />
                    </div>
                  </div>
                </Radio.Button>
              </Radio.Group>
            </Flex>
          </div>

          <div className={registorStyle.formControls}>
            <label htmlFor="mobilenumber">Resume</label>
            <Upload maxCount={1} name="resume">
              <Button className="mr-2 py-3 px-5 h-auto bg-orange-700 text-white">Upload Resume</Button>
              <span>DOC, DOCx, PDF, RTF | Max: 2 MB</span>
            </Upload>
          </div>

          <div className={registorStyle.formControls}>
            <label htmlFor="currentCity">Current city<sup className="text-red-700">*</sup></label>
            <input type="text" name="currentCity" id="currentCity" placeholder="Mention the city you live in" />
            <p className="text-sm mt-2 text-gray-400">This helps recruiters know your location preferences</p>
          </div>
          <div className="mb-3 text-[14px]">
            By clicking Register, you agree to the <Link className="text-blue-500">Terms and Conditions</Link> & <Link className="text-blue-500">Privacy Policy</Link> of pixelsjobs.com
          </div>
          <button className="bg-orange-800 text-white py-3 px-5 rounded-md w-48" type="submit">Registration</button>
        </form>
      </div>
    </div>
  );
};

export default EmployesRegistors;
