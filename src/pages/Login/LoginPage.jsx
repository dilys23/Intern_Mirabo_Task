

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import "../../pages/Home/style.css";
import { Input, Button, Form } from "antd";
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";


function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const mockAPI = (callback, delay = 1000) => {
    setTimeout(() => {
      const data = {
        success: true,
        message: "User logged in successfully",
        user: {
          id: 1,
          username: "Dilysnguyen",
          email: "dilysnguyen@gmail.com",
          password: "Dilysnguyen"
        }
      };
      callback(data);
    }, delay);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    mockAPI((data) => {
      if (data.success) {
        localStorage.setItem("user", JSON.stringify(data.user));
        // window.location.href = "/homepage";
        navigate("/homepage");
        console.log("Login successful");
      } else {
        console.error(data.message);
        console.log("Login failed");
      }
    });
  };

  return (
    <>
      <div className="container">
        <Form  className="login active" id="formLogin">
          <h2 className="title">Login with your account</h2>
          <div id="input-group">
            <Form.Item
              name="username"
              rules={[{ required: true, message: "Please input your username!" }]}
            >
              <Input
                placeholder="Username"
                name="username"
                value={username}
                onChange={handleUsernameChange}
                prefix={<AiOutlineUser />}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: "Please input your password!" }]}
            >
              <Input.Password
                placeholder="Password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                prefix={<RiLockPasswordLine />}
              />
            </Form.Item>
            <span className="help-text">
              <p>At least 8 characters</p>
            </span>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="btn-submit"
                id="login-btn"
                onClick={handleLogin}
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
