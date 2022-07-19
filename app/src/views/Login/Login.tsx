import { useState } from "react";
import "./Login.sass";
import Package from "../../../package.json";
import Interface from "./../../components/Interface/Interface";
import Logo from "./../../components/Logo/Logo";
import Version from "./../../components/Version/Version";
import Input from "./../../components/Input/Input";
import Button from "./../../components/Button/Button";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const clickHandle = (type: string, event?: any) => {
    if (type === "login") {
      if (email === "jozias.martini@gmail.com" && password === "12345") {
        console.log("User logged in.");
      } else {
        event?.stopPropagation();
      }
    }
  };

  return (
    <Interface>
      <Logo />
      <Version info={Package.version} />
      <Input type="text" placeholder="Email" action={setEmail} />
      <Input type="password" placeholder="Password" action={setPassword} />
      <Button type="primary" text="Login" action={clickHandle} linkTo="/symptoms" />
    </Interface>
  );
}

export default Login;
