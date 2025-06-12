import { Button, Flex, Input, Typography } from "antd";
import { useNavigate } from "react-router";
import { useState } from "react";
const { Title } = Typography;

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const isButtonEnabled =
    user && password && repeatPassword && password == repeatPassword;

  const handleRegisterButtonClick = () => {
    fetch("http://localhost:8080/register/", {
      headers: {
        "Content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ username: user, password: password }),
    })
      .then((res) => {
        if (res.ok) {
          console.log("Usuario registrado");
          navigate("/login");
        } else {
          console.error("error found", res.body);
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <Flex gap={"8px"} vertical style={{ width: "400px" }}>
      <Title>Register</Title>
      <Input
        value={user}
        onChange={(event) => setUser(event.target.value)}
        placeholder="Usuario"
      />
      <Input
        placeholder="Contraseña"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Input
        placeholder="Repetir contraseña"
        type="password"
        value={repeatPassword}
        onChange={(event) => setRepeatPassword(event.target.value)}
      />
      <Button
        disabled={!isButtonEnabled}
        type="primary"
        onClick={handleRegisterButtonClick}
      >
        Register
      </Button>
    </Flex>
  );
};

export { Register };
