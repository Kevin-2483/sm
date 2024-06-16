import { useState } from "react";
import {
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Checkbox,
  Button,
} from "@nextui-org/react";
import { MailOutlined } from "@ant-design/icons";
import { LockOutlined } from "@ant-design/icons";
import { message } from "antd";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSuperuser, setIsSuperuser] = useState(false);
  const info = () => {
    message.info("sign up successfully!");
  };
  const handleRegister = async () => {
    if (password !== confirmPassword) {
      console.error("密码和确认密码不匹配");
      message.error("密码和确认密码不匹配");
      return;
    }

    const registerData = {
      username: username,
      password: password,
      superuser: isSuperuser,
    };
    console.log("registerData:", registerData);

    try {
      const response = await fetch("/proxy/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(registerData),
      });
      const data = await response.json();
      if (response.ok) {
        if (data.status === "Ok") {
          console.info("Registration success:", data.message);
          message.info(data.message);
        } else {
          console.error("Registration failed:", data.message);
          message.error(data.message);
        }
      } else {
        console.error(
          "ERROR: Registration failed with status",
          response.status
        );
        message.error("Registration failed.");
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
                <div style={{ height: "32px" }}></div>
                Register
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
                <Input
                  isClearable
                  startContent={
                    <LockOutlined className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Confirm Password"
                  labelPlacement="outside"
                  placeholder="Confirm your password"
                  type="password"
                  variant="bordered"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onClear={() => setPassword("")}
                />
                <Checkbox
                  isSelected={isSuperuser}
                  onValueChange={(value) => setIsSuperuser(value)}
                  classNames={{ label: "text-small" }}
                >
                  Is Superuser?
                </Checkbox>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="primary"
                  onPress={() => {
                    handleRegister();
                    onClose();
                  }}
                >
                  Register
                </Button>
              </ModalFooter>
            </div>
          </div>
        </>
      )}
    </ModalContent>
  );
};

export default Register;
