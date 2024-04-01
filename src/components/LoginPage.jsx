// LoginPage.jsx
import  { useState } from 'react';
import './login.css';
import './style.css'
function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const history = useHistory();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const verifyAccount = (e) => {
    e.preventDefault();
    if (username === "Dilys" && password === "231203") {
      alert("You are logged in as Admin");
      // Đoạn code để chuyển đến trang HomePage ở đây
      // history.push("/homepage");
      window.location.href = "/homepage";
     
    } else {
      alert("You are not logged")
    }
  };

  return (
    <div className="container">
		<form action="#" className="login active" id="formLogin">
			<h2 className="title">Login with your account</h2>
			<div className="form-group">
				<label htmlFor="username">Username</label>
				<div className="input-group">
					<input type="text" id="username" placeholder="Username" value={username} onChange={handleUsernameChange}></input>
					<i className='bx bx-envelope'></i>
				</div>
			</div>
			<div className="form-group">
				<label htmlFor="password">Password</label>
				<div className="input-group">
					<input type="password" pattern=".{8,}" id="password" placeholder="Your password" value={password} onChange={handlePasswordChange}></input>
					<i className='bx bx-lock-alt' ></i>
				</div>
				<span className="help-text">At least 8 characters</span>
			</div>
			<button type="submit" className="btn-submit" id="login-btn" onClick={verifyAccount}>Login</button>
			<a href="#">Forgot password?</a>
		</form>
    </div>
  );
}

export default LoginPage;