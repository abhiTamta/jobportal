import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const EmployesLogin = () => {
  const navigate = useNavigate();
  function registorHandler() {
    navigate("/user/registor")
  }
  return (
    <div className="py-16">
      <div className="flex w-8/12 mx-auto bg-blue-950">
        <div className="w-6/12 bg-white p-10">
          <div className="images">
            <img src="./../images/login_clipart.png" alt="" />
          </div>
          <div className="registerBtn mx-auto text-center">
            <button onClick={registorHandler} type="button" className="rounded-md border border-solid border-blue-700 text-blue-700 py-3 px-5 hover:bg-blue-500 hover:text-white">Register for Free</button>
          </div>
        </div>
        <div className="w-6/12 p-14 text-white">
          <h2 className="text-2xl font-bold mb-5">Login</h2>
          <form method="post">
            <div className="w-full flex flex-col mb-5">
              <label className="text-sm mb-2" htmlFor="username">Email ID / Username</label>
              <input className="p-3 outline-none text-black rounded-md" type="text" name="username" id="username" />
            </div>
            <div className="w-full flex flex-col mb-5">
              <label className="text-sm mb-2" htmlFor="password">Password</label>
              <input className="p-3 outline-none text-black rounded-md" type="password" name="password" id="password" />
            </div>
            <div className="w-full text-right text-sm mb-3 text-blue-500 hover:text-white">
              <Link href="#">Forgot Password?</Link>
            </div>
            <div className="w-full text-center mb-4">
              <button className="py-2 w-full rounded-lg font-bold bg-orange-800 hover:bg-orange-500" type="submit">Login</button>
            </div>
            <div className="loginOtpBtn text-center">
              <button className="text-sm" type="button">Use OTP to Login</button>
            </div>
            <div className="w-full text-center py-8">
              <hr />
            </div>
            <div className="w-full flex items-center justify-center gap-2"><FcGoogle size={30} />Sign in with Google</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmployesLogin;
