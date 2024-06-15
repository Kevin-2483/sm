import { useState } from "react";
import {
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Checkbox,
  Button,
  Link,
} from "@nextui-org/react";
import { MailOutlined } from "@ant-design/icons";
import { LockOutlined } from "@ant-design/icons";
import { message } from "antd";
import PropTypes from "prop-types";

const Login = ({ setLoged }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const loginData = {
      username: username,
      password: password,
    };
    console.log("loginData:", loginData);
    try {
      const response = await fetch("http://127.0.0.1:34255/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // 设置 credentials 为 'include' 来包含跨域请求中的 cookie
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("登录成功:", data);
      } else {
        console.error("登录失败:", response.statusText);
      }
    } catch (error) {
      console.error("请求失败:", error);
    }
  };
  const info = () => {
    message.info("sign in successfully!");
  };
  return (
    <ModalContent>
      {(onClose) => (
        <>
          <div className="flex justify-between">
            <div className="hidden lg:flex lg:w-2/5">
              <img
                src="../../public/img22.jpg"
                alt="random"
                width="100%"
                height="auto"
                className="inset-0"
              />
            </div>
            <div className="w-full lg:w-3/5">
              <ModalHeader className="flex flex-col gap-1">
                <div style={{ height: "64px" }}></div>
                Log in
              </ModalHeader>
              <ModalBody>
                <Input
                  isClearable
                  autoFocus
                  startContent={
                    <MailOutlined className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Email"
                  labelPlacement="outside"
                  placeholder="Enter your email"
                  variant="bordered"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onClear={() => setUsername("")}
                />
                <Input
                  isClearable
                  startContent={
                    <LockOutlined className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Password"
                  labelPlacement="outside"
                  placeholder="Enter your password"
                  type="password"
                  variant="bordered"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onClear={() => setPassword("")}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="primary"
                  onPress={() => {
                    handleLogin();
                    onClose();
                  }}
                >
                  Sign in
                </Button>
              </ModalFooter>
            </div>
          </div>
        </>
      )}
    </ModalContent>
  );
}

Login.propTypes = {
  setLoged: PropTypes.func,
};

export default Login;
