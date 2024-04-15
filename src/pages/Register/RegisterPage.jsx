import { Form, Button, Checkbox, DatePicker, Input, Select } from "antd";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form
          autoComplete="off"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 15 }}
          onFinish={(values) => {
            console.log(values);
          }}
          onFinishFailed={(error) => {
            console.log(error);
          }}
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
                message: "Please enter your name",
              },

              { whitespace: true },
              { min: 3 },
            ]}
            hasFeedback
          >
            <Input placeholder="Type your name" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: "Please enter your valid email",
              },

              { type: "email" },
            ]}
            hasFeedback
          >
            <Input placeholder="Type your email" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
              },
              { min: 6 },
              {
                validator: (_, value) =>
                  value && value.includes("A")
                    ? Promise.resolve()
                    : Promise.reject("Password does not match criteria."),
              },
            ]}
            hasFeedback
          >
            <Input placeholder="Type your Password" type="password" />
          </Form.Item>

          <Form.Item
            name="confirmPassword "
            label="Confirm Password"
            dependencies={["password"]}
            rules={[
              {
                required: true,
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
            hasFeedback
          >
            <Input placeholder="Type your confirm" type="password" />
          </Form.Item>

          <Form.Item name="gender " label="Gender" requiredMark="optional">
            <Select placeholder="Select your gender">
              <Select.Option value="male">Male</Select.Option>
              <Select.Option value="female">Female</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="dob"
            label="Date of Birth"
            rules={[
              {
                required: true,
                message: "Please provide your date of birth",
              },
            ]}
          >
            <DatePicker
              style={{ width: "100%" }}
              picker="date"
              placeholder="Chose d"
            ></DatePicker>
          </Form.Item>

          <Form.Item
            name="website"
            label="Website"
            rules={[
              {
                required: true,
                message: "Please add your valid url",
              },
            ]}
            hasFeedback
          >
            <Input placeholder="Add your website url" type="url"></Input>
          </Form.Item>

          <Form.Item
            name="agrrement"
            // wrapperCol={{ span: 24 }}
            labelCol={{ span: 0 }}
            wrapperCol={{ span: 15 }}
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                        "To proceed, you need to agree with our terms and conditions"
                      ),
              },
            ]}
          >
            <Checkbox>

              {""}Agree to our <a href="#">Terms and Condition</a>{" "}
            </Checkbox>
          </Form.Item>

          <Form.Item
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 15 }}>
            <Button block type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </header>
    </div>
  );
}

export default App;
