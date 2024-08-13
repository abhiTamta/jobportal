import { Link } from "react-router-dom";

const EmployesLogin = () => {
  return (
    <div className="py-10 px-5 relative">
      <div className="container mx-auto flex justify-center items-center flex-col md:flex-row">
        <div className="">
          <h1>New to Naukri?</h1>
          <ul>
            <li>One click apply using naukri profile.</li>
            <li>Get relevant job recommendations.</li>
            <li>Showcase profile to top companies and consultants.</li>
            <li>Know application status on applied jobs.</li>
          </ul>
          <div className="">
            <button type="button">Register for Free</button>
          </div>
        </div>
        <div className="loginForm p-10 bg-white shadow-lg rounded-md">
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
            <div className="w-full text-center">
              <button className="py-2 bg-blue-700 w-full rounded-lg font-bold text-white hover:bg-blue-500" type="submit">Login</button>
            </div>
            <div className="loginOtpBtn">
              <button type="button">Use OTP to Login</button>
            </div>
            <div className="">Or</div>
            <div className="">Sign in with Google</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmployesLogin;
