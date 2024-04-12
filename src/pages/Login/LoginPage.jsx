import { useNavigate, useLocation } from "react-router-dom";
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
          password: "Dilysnguyen",
        },
      };
      callback(data);
    }, delay);
  };

  const handleLogin = (values, form) => {
    // event.preventDefault(); // This line is not necessary

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
        console.error("Invalid username.");
        setUsernameError("Invalid Username");
        setPasswordError(null);
        // form.resetFields();
        // console.log("I - Invalid username");
        // form.setFields([
        //   {
        //     name: "username",
        //     errors: ["Invalid username."]
        //   }
        // ]);
      } else if (
        values.username === data.user.username &&
        values.password !== data.user.password
      ) {
        console.error("Invalid Password.");
        setPasswordError("Invalid Password");
        setUsernameError(null);
        form.resetFields();
        // console.log("Invalid password");
        // form.setFields([
        //   {
        //     name: "password",
        //     errors: ["Invalid password."]
        //   }
        // ]);
      } else {
        setUsernameError("Invalid credentials.");
        setPasswordError("Invalid credentials.");
        // form.setFields([
        //   {
        //     name: "username",
        //     errors: ["Invalid credentials."]
        //   },
        //   {
        //     name: "password",
        //     errors: ["Invalid credentials."]
        //   }
        // ]);
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
            </Form.Item>
            <p>Password</p>

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
            </Form.Item>
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
