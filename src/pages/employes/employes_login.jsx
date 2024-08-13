import { Link } from "react-router-dom";

const EmployesLogin = () => {
  return (
    <div className="py-10 px-5 relative">
      <div className="container mx-auto flex justify-center items-center flex-col md:flex-row">
        <div className="w-4/12 rounded-md overflow-auto bg-white shadow-md p-5">
          <div className="images">
            <img src="./../images/login_clipart.png" alt="" />
          </div>
          <div className="registerBtn mx-auto text-center">
            <button type="button" className="rounded-md border border-solid border-blue-700 text-blue-700 py-3 px-5 hover:bg-blue-500 hover:text-white">Register for Free</button>
          </div>
        </div>
        <div className="loginForm w-4/12 p-16 bg-white shadow-lg rounded-md">
          <h2 className="text-2xl font-bold mb-5">Login</h2>
          <form method="post">
            <div className="w-full flex flex-col mb-3">
              <label htmlFor="username">Email ID / Username</label>
              <input className="border w-full border-solid border-blue-700 py-2 px-5 rounded-md" type="text" name="username" id="username" />
            </div>
            <div className="w-full flex flex-col mb-3">
              <label htmlFor="password">Password</label>
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
            <div className="w-full text-center py-3">
              <hr />
            </div>
            <div className="w-full">Sign in with Google</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmployesLogin;
