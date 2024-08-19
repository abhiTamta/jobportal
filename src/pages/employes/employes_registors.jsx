import registorStyle from "../../assets/css/Registor.module.css"

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
            <label htmlFor="fullname">Full Name</label>
            <input type="text" name="fullname" id="fullname" placeholder="What is your name?" />
          </div>

          <div className={registorStyle.formControls}>
            <label htmlFor="fullname">Email ID</label>
            <input type="email" name="fullname" id="fullname" placeholder="Tell us your Email ID" />
            <p>We'll send relevant jobs and updates to this email</p>
          </div>

          <div className={registorStyle.formControls}>
            <label htmlFor="fullname">Password</label>
            <input type="password" name="fullname" id="fullname" placeholder="(Minimum 8 characters)" />
            <p>This helps your account stay protected</p>
          </div>

          <div className={registorStyle.formControls}>
            <label htmlFor="fullname">Mobile Number</label>
            <input type="tel" name="fullname" id="fullname" placeholder="Enter your mobile number" />
            <p>Recruiters will contact you on this number</p>
          </div>
          <button className="bg-orange-800 text-white py-3 px-5 rounded-md w-48" type="submit">Registration</button>
        </form>
      </div>
    </div>
  );
};

export default EmployesRegistors;
