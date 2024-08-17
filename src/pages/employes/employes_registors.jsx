import { Flex, Radio } from 'antd';
import experiencedIcon from "/images/employee_job_seeker.svg"
import fresherIcon from "/images/employee_graduate_icon.svg"
import registorStyle from "../../assets/css/Registor.module.css"



const EmployesRegistors = () => {
  return (
    <div className={registorStyle.userRegistorSection}>
      <div className={`${registorStyle.wapper} lg:w-8/12`}>
        <div className={registorStyle.title}>
          <h1>Create your Naukri profile</h1>
          <h5>Search & apply to jobs from India's No.1 Job Site</h5>
        </div>
        <form method="post">
          <div className={registorStyle.formControls}>
            <label htmlFor="fullname">Full Name<sup className="text-red-500">*</sup></label>
            <input type="text" name="fullname" id="fullname" placeholder="What is your name?" />
          </div>

          <div className={registorStyle.formControls}>
            <label htmlFor="email">Email ID<sup className="text-red-500">*</sup></label>
            <input type="email" name="email" id="email" placeholder="Tell us your Email ID" />
            <p className="text-sm mt-1 text-gray-400">We'll send relevant jobs and updates to this email</p>
          </div>

          <div className={registorStyle.formControls}>
            <label htmlFor="password">Password<sup className="text-red-500">*</sup></label>
            <input type="password" name="password" id="password" placeholder="(Minimum 8 characters)" />
            <p className="text-sm mt-1 text-gray-400">This helps your account stay protected</p>
          </div>

          <div className={registorStyle.formControls}>
            <label htmlFor="mobile">Mobile Number<sup className="text-red-500">*</sup></label>
            <input type="tel" name="mobile" id="mobile" placeholder="Enter your mobile number" />
            <p className="text-sm mt-1 text-gray-400">Recruiters will contact you on this number</p>
          </div>

          <div className={registorStyle.formControls}>
            <label htmlFor="WorkStatus">Work status<sup className="text-red-500">*</sup></label>

            <Flex vertical gap="middle">
              <Radio.Group defaultValue="" className='flex gap-5'>
                <Radio.Button value="a" className='h-auto rounded-none leading-none font-normal p-0 m-0 border-none bg-gray-300 border-gray-300'>
                  <div className="flex items-center justify-between">
                    <div className="">
                      <h5>I'm experienced</h5>
                      <p>I have work experience (excluding internships)</p>
                    </div>
                    <div className="w-14 p-2">
                      <img src={experiencedIcon} alt="" />
                    </div>
                  </div>
                </Radio.Button>
                <Radio.Button value="b" className='h-auto rounded-none leading-none font-normal p-0 m-0 border-none bg-gray-300 border-gray-300'>
                  <div className="flex items-center justify-between">
                    <div className="">
                      <h5>I'm a fresher</h5>
                      <p>I am a student/ Haven't worked after graduation</p>
                    </div>
                    <div className="w-14 p-2">
                      <img src={fresherIcon} alt="" />
                    </div>
                  </div>
                </Radio.Button>
              </Radio.Group>
            </Flex>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployesRegistors;
