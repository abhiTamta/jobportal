import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const EmployesLogin = () => {
  return (
    <div className="py-10 px-5 relative">
      <div className="container mx-auto flex justify-center items-center flex-col gap-10 md:flex-row md:gap-0">
        <div className="w-full order-2 rounded-md overflow-auto bg-white shadow-md p-5 md:order-1 lg:w-4/12">
          <div className="images">
            <img src="./../images/login_clipart.png" alt="" />
          </div>
          <div className="registerBtn mx-auto text-center">
            <button type="button" className="rounded-md border border-solid border-blue-700 text-blue-700 py-3 px-5 hover:bg-blue-500 hover:text-white">Register for Free</button>
          </div>
        </div>
        <div className="loginForm w-full order-1 p-5 bg-white shadow-lg rounded-md md:order-2 lg:w-4/12 lg:p-16 ">
          <h2 className="text-2xl font-bold mb-5">Login</h2>
          <form method="post">
            <div className="w-full flex flex-col mb-3">
              <label className="text-sm" htmlFor="username">Email ID / Username</label>
              <input className="border w-full border-solid border-blue-700 py-2 px-5 rounded-md" type="text" name="username" id="username" />
            </div>
            <div className="w-full flex flex-col mb-3">
              <label className="text-sm" htmlFor="password">Password</label>
              <input className="border w-full border-solid border-blue-700 py-2 px-5 rounded-md" type="password" name="password" id="password" />
            </div>
            <div className="w-full text-right text-xs text-blue-600 mb-3">
              <Link href="#">Forgot Password?</Link>
            </div>
            <div className="w-full text-center mb-4">
              <button className="py-2 bg-blue-700 w-full rounded-lg font-bold text-white hover:bg-blue-500" type="submit">Login</button>
            </div>
            <div className="loginOtpBtn text-center">
              <button className="text-sm text-blue-600" type="button">Use OTP to Login</button>
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
