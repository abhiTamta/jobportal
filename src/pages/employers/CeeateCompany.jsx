import { Button, Checkbox, Divider, Form, Input } from "antd"
import { TbUserHexagon } from "react-icons/tb"
import { Link } from "react-router-dom"

const CeeateCompany = () => {
    return (
        <div className="container mx-auto px- py-16 md:px-0 lg:px-0">
            <div className="bg-white mx-auto w-full flex justify-between lg:w-10/12 xl:w-8/12 2xl:w-8/12">
                <div className="w-full hidden md:flex flex-col justify-end">
                    <div className="px-10 pt-5">
                        <h2 className="text-4xl font-bold mb-2 text-gray-600">Find & hire the right talent with us</h2>
                        <p className="text-gray-500">Trusted by 9 Cr+ candidates | 5 Lakh+ employers</p>
                    </div>
                    <div className="images mx-auto w-10/12">
                        <img src="./../images/login_clipart.png" alt="" />
                    </div>
                </div>

                <div className="bg-emerald-950 p-6 w-full">
                    <div className="flex text-white gap-2 items-center mb-4">
                        <TbUserHexagon size={40} />
                        <h2 className="text-2xl font-bold"> Company Registration</h2>
                    </div>
                    <div className="loginFrom">
                        <Form layout="vertical" name="userLogin">
                            <Form.Item
                                label="Company Name"
                                name="companyName"
                            >
                                <Input />
                            </Form.Item>
                        </Form>
                        <div className="w-full">
                            <Divider className="loginDivider">Or</Divider>
                            <p className="text-white text-sm mx-auto mb-2 text-center">You have a registered email ID?</p>
                            <Link to={"/recruit/login"} className="bg-white text-md font-semibold flex rounded-lg justify-center py-2 hover:bg-red-600 hover:text-white">Login In</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CeeateCompany