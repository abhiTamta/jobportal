import { FcGoogle } from "react-icons/fc";
import { TbUserHexagon } from "react-icons/tb";
import { Button, Checkbox, Divider, Form, Input } from "antd";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

import "../../assets/css/loginFrom.css"
import { Link } from "react-router-dom";

const CompanyLogin = () => {
    return (
        <div className="container mx-auto px- py-16 md:px-0 lg:px-0">
            <div className="bg-white mx-auto w-full flex justify-between lg:w-10/12 xl:w-8/12 2xl:w-6/12">

                <div className="w-full hidden md:flex flex-col justify-end">
                    <div className="px-10 pt-5">
                        <h2 className="text-xl font-bold mb-2">New to pixels Jobs?</h2>
                        <ul>
                            <li className="flex items-center gap-3 mb-2"><IoCheckmarkDoneOutline /> One click apply using naukri profile.</li>
                            <li className="flex items-center gap-3 mb-2"><IoCheckmarkDoneOutline /> Get relevant job recommendations.</li>
                            <li className="flex items-center gap-3 mb-2"><IoCheckmarkDoneOutline /> Showcase profile to top companies and consultants.</li>
                            <li className="flex items-center gap-3 mb-2"><IoCheckmarkDoneOutline /> Know application status on applied jobs.</li>
                        </ul>
                    </div>
                    <div className="images mx-auto w-10/12">
                        <img src="./../images/login_clipart.png" alt="" />
                    </div>
                </div>

                <div className="w-full bg-emerald-950 p-6 md:w-8/12 2xl:w-8/12">
                    <div className="flex text-white gap-2 items-center mb-4">
                        <TbUserHexagon size={40} />
                        <h2 className="text-2xl font-bold"> Login</h2>
                    </div>
                    <div className="loginFrom">
                        <Form layout="vertical" name="userLogin">
                            <Form.Item
                                className="text-white"
                                name={"userName"}
                                label="Email ID / Username"
                                style={{ color: "#ffffff" }}
                                rules={[
                                    {
                                        required: true,
                                        message: "please enter correct user name!"
                                    }
                                ]}>
                                <Input className="h-9" type="email" placeholder="Enter user email here" />
                            </Form.Item>
                            <Form.Item
                                name={"userPassword"}
                                label="Password"
                                rules={[
                                    {
                                        required: true,
                                        message: "please enter correct password!"
                                    }
                                ]}>
                                <Input.Password className="h-9" type="password" placeholder="Enter your passwored here" />
                            </Form.Item>
                            <div className="flex justify-between items-center mb-3">
                                <Form.Item
                                    className="m-0"
                                    name="remember"
                                    valuePropName="checked"
                                >
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                                <Link to="/user/forgot" className="text-white hover:text-yellow-500">Forgot Password</Link>
                            </div>
                            <Form.Item>
                                <Button className="w-full h-9 text-lg" htmlType="submit">Submit</Button>
                            </Form.Item>
                           
                        </Form>
                        <Divider className="loginDivider">Or</Divider>
                        <p>Don’t have a registered email ID?</p>
                        <Button className="googleSingBtn">Create account</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyLogin;
