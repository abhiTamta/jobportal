import registorStyle from "../../assets/css/Registor.module.css"

const EmployesRegistors = () => {
  return (
    <div className={registorStyle.userRegistorSection}>
      <div className={`${registorStyle.wapper} lg:w-8/12`}>
        <div className="title">
          <h1>Create your Naukri profile</h1>
          <h5>Search & apply to jobs from India's No.1 Job Site</h5>
        </div>
        <form method="post">
          <div className="">
            <label htmlFor="fullname">Fullname</label>
            <input type="text" name="fullname" id="fullname" />
          </div>

          <div className="">
            <label htmlFor="fullname">Email ID</label>
            <input type="text" name="fullname" id="fullname" />
          </div>

          <div className="">
            <label htmlFor="fullname">Password</label>
            <input type="text" name="fullname" id="fullname" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployesRegistors;
