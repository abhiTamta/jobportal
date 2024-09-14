import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import "../../assets/css/loginFrom.css"

const EmployesForgot = () => {
    return (
        <div className="container mx-auto px-5 py-16 md:px-0 lg:px-0">
            <div className="bg-white mx-auto w-full lg:w-4/12 flex justify-between">
                <div className="w-full bg-blue-600 p-10">
                    <div className="text-white mb-4">
                        <h2 className="text-2xl font-bold">Forgot your password</h2>
                        <p>Please enter the email address you'd like your password reset information sent to</p>
                    </div>

                    <div className="loginFrom">
                        <Form layout="vertical" name="userLogin">
                            <Form.Item
                                className="text-white"
                                name={"userName"}
                                label="Email ID"
                                style={{ color: "#ffffff" }}
                                rules={[
                                    {
                                        required: true,
                                        message: "please enter correct email!"
                                    }
                                ]}>
                                <Input className="h-9" type="email" placeholder="Enter user email here" />
                            </Form.Item>
                            <Form.Item>
                                <Button className="w-full h-9" htmlType="submit">Request reset link</Button>
                            </Form.Item>
                            <Link className="flex justify-center text-white" to="/user/login">Back to Login</Link>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployesForgot;
