import { Link } from "react-router-dom";
import { Button, Checkbox, Form, Input } from "antd";

const LoginEmail = ({loginType}) => {
    
    function otpFormAccess() {
        loginType(false)
    }
    return (
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
            <div className="w-full border border-white flex rounded-lg items-center justify-center py-2">
                <Link onClick={otpFormAccess} className="text-white">Use OTP to Login</Link>
            </div>
        </Form>
    )
}

export default LoginEmail