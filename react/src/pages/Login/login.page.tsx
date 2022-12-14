import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "../../components/atoms/Box/Box";
import { Button } from "../../components/atoms/Button/Button";
import { Textbox } from "../../components/atoms/Textbox/Textbox";
import LoginContext from "../../contexts/Login/login.context";
import { loginService } from "../../services/login.service";
import { LoginContainer } from "./styles";
import "./styles.ts";

export const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(LoginContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async () => {
    try {
      const user = await loginService(email, password);
      login(user);
      navigate("/home");
    } catch (error) {
      alert("Não autorizado");
    }
  };

  return (
    <LoginContainer>
      <Box>
        <form>
          <Textbox
            id="email"
            label="Email"
            handleChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Textbox
            id="password"
            label="Password"
            type="password"
            handleChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Button
            id="signin"
            width={"100"}
            data-testid="signin"
            value="Signin"
            onClick={handleClick}
          />
        </form>
      </Box>
    </LoginContainer>
  );
};
