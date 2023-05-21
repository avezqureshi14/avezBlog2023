import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  HomeOutlined,
  MenuOutlined,
  UserOutlined,
  QuestionCircleOutlined,
  ContactsOutlined,
  EditOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const Navbar = () => {
  const [login, setLogin] = useState(false);

  const [current, setCurrent] = useState("home");

  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token || token === "") {
      setLogin(false);
    } else {
      // Verify the token or perform any necessary checks here
      // For example, you can decode the token and check its validity
      try {
        const decodedToken = JSON.parse(atob(token.split(".")[1]));
        // Assuming the token has an 'expiry' property, you can compare it with the current time
        if (decodedToken.expiry < Date.now() / 1000) {
          setLogin(false);
        } else {
          setLogin(true);
        }
      } catch (error) {
        // Error occurred while decoding or validating the token
        setLogin(false);
      }
    }
  }, []);
  return (
    <div className="nav-container sha" style={{ background: "#fff" }}>
      <div className="nav-logo">
        <Link to="/">
          {" "}
          <span>Avez Blog ❤️</span>
        </Link>
      </div>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="home" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        {login ? (
          <>
            <Menu.Item key="home" icon={<EditOutlined />}>
              <Link to="/write">Write Blog</Link>
            </Menu.Item>
            <Menu.Item key="home" onClick={handleLogout} icon={<UserOutlined />}>
              Log Out
            </Menu.Item>
          </>
        ) : (
          <>
            <Menu.Item key="home" icon={<UserOutlined />}>
              <Link to="/login">Login</Link>
            </Menu.Item>
          </>
        )}
      </Menu>
    </div>
  );
};

export default Navbar;
