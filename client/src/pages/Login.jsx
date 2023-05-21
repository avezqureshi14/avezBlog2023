import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input, Button, Card } from "antd";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:8800/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const { token } = await response.json();
        
        // Store the JWT token in local storage
        localStorage.setItem("token", token);
        navigate('/');
        console.log("Login successful");
        window.location.reload();
      } else {
        console.log("Login failed");
      }
    } catch (error) {
      console.log("An error occurred during login");
    }
  };

  return (
    <main>
      <div className="blog_form_container">
      <Card>
        <div className="form_container">
          <div className="login_heading">Login</div>
          <form method="POST" action="">
            <div className="input-group mb-3">
              <div className="input-group-append">
                <span className="input-group-text"></span>
              </div>
              <Input
                type="text"
                placeholder="Username"
                className="user form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-append">
                <span className="input-group-text"></span>
              </div>
              <Input.Password
                type="password"
                placeholder="Password"
                value={password}
                className="user form-control"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Button
              type="primary"
              onClick={handleLogin}
              className="art_btn form_btn"
              style={{ marginTop: "1rem", marginBottom: "5px" }}
            >
              Login
            </Button>

            <h5 id="messages">
              <Link to='/register'>
                Don't have an account, <a href="">Register</a>
              </Link>
            </h5>
          </form>
          </div>
          </Card>
          </div>
    </main>
  );
};

export default Login;
