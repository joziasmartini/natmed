import { useState } from "react";
import "./Login.sass";
import Package from "../../../package.json";
import Interface from "./../../components/Interface/Interface";
import Logo from "./../../components/Logo/Logo";
import Version from "./../../components/Version/Version";
import Input from "./../../components/Input/Input";
import Button from "./../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import Space from "../../components/Space/Space";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountError, setAccountError] = useState(false);

  const clickHandle = (type: string, event?: any) => {
    if (type === "login") {
      if (email === "jozias.martini@gmail.com" && password === "12345") {
        console.log("User logged in.");
        navigate("/symptoms");
      } else {
        console.log("Account error.");
        setAccountError(true);
      }
    }
  };

  return (
    <Interface>
      <Space pixels={0} />
      <div>
        <Logo />
        <Version info={Package.version} />
        <Input type="text" placeholder="Email" action={setEmail} />
        <Input type="password" placeholder="Password" action={setPassword} />
        {accountError && <span className="login-error">Your email or password is incorrect.</span>}
        <Button type="primary" text="Login" action={clickHandle} />
      </div>
      <Space pixels={0} />
    </Interface>
  );
}

export default Login;
