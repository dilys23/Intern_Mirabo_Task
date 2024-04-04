// LoginPage.jsx
import { useState } from "react";
import "./login.css";
import "../../pages/Home/style.css";
import { Input, Button, Form } from "antd";
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";


// import 'antd/dist/antd.css';

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const history = useHistory();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const verifyAccount = (e) => {
    e.preventDefault();
    if (username === "Dilys" && password === "Dilys231203") {
      alert("You are logged in as Admin");
      window.location.href = "/homepage";
    } else {
      alert("You are not logged");
    }
  };

  return (
    <>
    <div className="container">
      <Form onFinish={verifyAccount} className="login active" id="formLogin">
        <h2 className="title">Login with your account</h2>
        <div id="input-group">
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              placeholder="Username"
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
              onClick={verifyAccount}
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
