import { Button, Checkbox, Form, Upload, Input, Radio, Select } from "antd"
import registrationStyle from '../../assets/css/Registor.module.css'
const EmployesRegistors = () => {
  const [form] = Form.useForm();

  const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    const uploadedFile = values.upload ? values.upload[0] : null;
    console.log(uploadedFile)
    // if (uploadedFile) {
    //   console.log('File to be uploaded:', uploadedFile);

    //   // Here you can handle the file upload, for example:
    //   const formData = new FormData();
    //   formData.append('file', uploadedFile.originFileObj);

    //   // Send the file to your server
    //   fetch('/your-upload-endpoint', {
    //     method: 'POST',
    //     body: formData,
    //   })
    //     .then(response => response.json())
    //     .then(data => {
    //       console.log('File upload success:', data);
    //     })
    //     .catch(error => {
    //       console.error('File upload error:', error);
    //     });
    // } else {
    //   console.error('No file uploaded');
    // }
  };
  return (
    <div className='container mx-auto py-10'>
      <div className="w-full rounded-none shadow-lg bg-white p-5 mx-auto lg:rounded-xl lg:p-10 lg:w-8/12">
        <div className="mb-5">
          <h1 className="font-bold text-[24px]">Create your job profile</h1>
          <h5 className="text-[14px]">Search & apply to jobs from India's No.1 Job Site</h5>
        </div>

        <div className={registrationStyle.registrationForm}>
          <Form onFinish={onFinish} form={form} layout="vertical" name="register">
            <Form.Item
              name="fullname"
              label="Full Name"
              rules={[
                {
                  required: true,
                  message: 'Please input your full name!',
                  whitespace: true,
                },
              ]}
            >
              <Input className="h-10" placeholder="" />
            </Form.Item>
            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ]}

            >
              <Input className="h-10" placeholder="" />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}

            >
              <Input.Password className="h-10" placeholder="" />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={['password']}

              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('The new password that you entered do not match!'));
                  },
                }),
              ]}
            >
              <Input.Password className="h-10" placeholder="" />
            </Form.Item>
            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[
                {
                  required: true,
                  message: 'Please input your phone number!',
                },
              ]}
            >
              <Input className="h-10" placeholder="" />
            </Form.Item>

            <Form.Item name="gender" label="Gender" rules={[
              {
                required: true,
                message: "Gender is required"
              }
            ]}>
              <Select placeholder="Select the your gender.">
                <Select.Option value="male">Male</Select.Option>
                <Select.Option value="female">FeMale</Select.Option>
                <Select.Option value="other">Other</Select.Option>
              </Select>
            </Form.Item>


            <Form.Item name="radio-group" label="Radio.Group">
              <Radio.Group>
                <Radio.Button value="a">item 1</Radio.Button>
                <Radio.Button value="b">item 2</Radio.Button>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              name="upload"
              label="Upload"
              valuePropName="fileList"
              getValueFromEvent={normFile}
            >
              <Upload name="logo" maxCount={1} beforeUpload={() => false}>
                <Button>Click to upload</Button>
              </Upload>
            </Form.Item>
            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                },
              ]}
            >
              <Checkbox>
                I have read the <a href="">agreement</a>
              </Checkbox>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default EmployesRegistors