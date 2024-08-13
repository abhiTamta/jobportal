const EmployesRegistors = () => {
  return (
    <div className="py-10 px-5 relative">
      <div className="bg-white p-10 rounded-lg lg:w-8/12">
        <div className="title">
          <div className="font-blod text-2xl">Create your Naukri profile</div>
          <div className="text-sm">Search & apply to jobs from India's No.1 Job Site</div>
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
