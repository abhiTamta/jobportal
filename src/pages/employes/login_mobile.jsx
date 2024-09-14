import { Link } from "react-router-dom";
import { Button, Checkbox, Form, Input, Space } from "antd";

const LoginMobile = ({ loginType }) => {
    function emailFormAccess() {
        loginType(true)
    }
    return (
        <Form layout="vertical" name="userLogin">
            <Form.Item
                className="text-white"
                name={"userName"}
                label="Mobile Number"
                style={{ color: "#ffffff" }}
                rules={[
                    {
                        required: true,
                        message: "please enter correct number!"
                    }
                ]}>
                <Space.Compact className="w-full">
                    <Input className="h-9 w-3/12 text-center font-bold" type="phone" readOnly placeholder="code" defaultValue={"+91"} />
                    <Input className="h-9 w-9/12" type="phone" placeholder="Enter user number here" />
                </Space.Compact>
            </Form.Item>
            <Form.Item
                name={"otp"}
                label="OTP"
                rules={[
                    {
                        required: true,
                        message: "please enter correct password!"
                    }
                ]}>
                <Input.OTP className="w-full" mask="🔒" />
            </Form.Item>
            <div className="flex justify-between items-center mb-3">
                <Form.Item
                    className="m-0"
                    name="remember"
                    valuePropName="checked"
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Link to={"/user/forgot"} className="text-white hover:text-yellow-500">Forgot Password</Link>
            </div>
            <Form.Item>
                <Button className="w-full h-9 text-lg" htmlType="submit">Submit</Button>
            </Form.Item>
            <div className="w-full border border-white flex rounded-lg items-center justify-center py-2">
                <Link onClick={emailFormAccess} className="text-white">Use Email to Login</Link>
            </div>
        </Form>
    )
}

export default LoginMobile