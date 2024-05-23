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

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const loginData = {
      username: username,
      password: password,
    };

    try {
      const response = await fetch("你的登录API地址", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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
                <br />
                <br />
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
                <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: "text-small",
                    }}
                  >
                    Remember me
                  </Checkbox>
                  <Link color="primary" href="#" size="sm">
                    Forgot password?
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={handleLogin}>
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

export default Login;
