import "./App.css";
import { Form, Button, Checkbox, DatePicker, Input, Select, Space } from "antd";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form
          autoComplete="off"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
          onFinish={(values) => {
            console.log({ values });
          }}
          onFinishFailed={(error) => {
            console.log({ error });
          }}
        >
          <Form.Item
            name="fullName"
            label="Full Name"
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
                message: "Please enter your email",
              },
              { type: "email", message: "Please enter a valid email" },
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
            <Input.Password placeholder="Type your password" />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
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
                    "The two passwords that you entered does not match."
                  );
                },
              }),
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Confirm your password" />
          </Form.Item>

          <Form.Item name="gender" label="Gender" requiredMark="optional">
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
            hasFeedback
          >
            <DatePicker
              style={{ width: "100%" }}
              picker="date"
              placeholder="Chose date of birth"
            />
          </Form.Item>

          <Form.Item
            name="website"
            label="Website"
            rules={[{ type: "url", message: "Please enter a valid url" }]}
            hasFeedback
          >
            <Input placeholder="Add your website url" />
          </Form.Item>

          <Form.Item
            name="agreement"
            wrapperCol={{ span: 24 }}
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
              {" "}
              Agree to our <a href="#">Terms and Conditions</a>
            </Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ span: 24 }}>
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

/**
 * import { useNavigate, useLocation } from "react-router-dom";
import "./login.css";
import "../../pages/Home/style.css";
import { Button, Checkbox, Form, Input } from "antd";
import { useEffect, useState } from "react";
import { CPATH } from "../../constants/path";
import { useAuthenticated } from "../../customHook/useAuthenticated";

function LoginPage() {
  const navigate = useNavigate();
  const [usenameError, setUsernameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const mockAPI = (callback, delay = 1000) => {
    setTimeout(() => {
      const data = {
        success: true,
        message: "User logged in successfully",
        user: {
          id: 1,
          username: "Dilysnguyen",
          email: "dilysnguyen@gmail.com",
          password: "Dilysnguyen2312*0#",
        },
      };
      callback(data);
    }, delay);
  };

  const handleLogin = (form, values) => {
    mockAPI((data) => {
      if (
        values.username === data.user.username &&
        values.password === data.user.password
      ) {
        localStorage.setItem("user", JSON.stringify(data.user));
        alert("Login successful");
        navigate("/homepage");
      } else if (
        values.username !== data.user.username &&
        values.password === data.user.password
      ) {
        form.setFields([
          {
            name: "username",
            errors: ["Invalid username."],
          },
        ]);
      } else if (
        values.username === data.user.username &&
        values.password !== data.user.password
      ) {
        form.setFields([
          {
            name: "password",
            errors: ["Invalid password."],
          },
        ]);
      } else {
        form.setFields([
          {
            name: ["username", "password"],
            errors: ["Invalid credentials."],
          },
        ]);
      }
    });
  };
  const onFinish = (values, form) => {
    setUsernameError(null);
    setPasswordError(null);
    handleLogin(values, form);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const location = useLocation();

  useEffect(() => {
    if (useAuthenticated) {
      navigate(CPATH.HOME);
    }
  }, [location, navigate]);

  return (
    <>
      <div className="container">
        <Form
          className="login active"
          id="formLogin"
          name="login"
          style={{
            maxWidth: 600,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <h2 className="title" style={{ textAlign: "center" }}>
            Login with your account
          </h2>
          <div id="input-group">
            <p>Username</p>
        
            <Form.Item
            name="username"
            // label="Full Name"
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
            {/* <Form.Item
              label=""
              name="username"
              validateStatus={usenameError ? "error" : ""}
              help={usenameError}
              labelCol={{ flex: "0 0 100px" }}
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>}
            <p>Password</p>
            <Form.Item
            name="password"
            // label="Password"
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
            <Input.Password placeholder="Type your password" />
          </Form.Item>
{/* 
            <Form.Item
              label=""
              name="password"
              validateStatus={passwordError ? "error" : ""}
              help={passwordError}
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item> }
            <span className="help-text">
              <p>At least 8 characters</p>
            </span>
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="btn-submit"
                id="login-btn"
              >
                Login
              </Button>
            </Form.Item>
          </div>
          <a href="#">Forgot password?</a>
        </Form>
      </div>
    </>
  );
}

export default LoginPage;

  */