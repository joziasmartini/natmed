import Package from "../package.json";
import Interface from "./components/Interface/Interface";
import Logo from "./components/Logo/Logo";
import Version from "./components/Version/Version";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import Navbar from "./components/Navbar/Navbar";
import Space from "./components/Space/Space";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const clickHandle = (type: string) => {
    if (type === "login") {
      if (email === "jozias.martini@gmail.com" && password === "12345") {
        console.log("User logged in.");
      }
    }
  };

  return (
    <Interface>
      <Space pixels={120} />
      <Logo />
      <Version info={Package.version} />
      <Input type="text" placeholder="Email" action={setEmail} />
      <Input type="password" placeholder="Password" action={setPassword} />
      <Button type="primary" text="Login" action={clickHandle} />
      <Space pixels={120} />
      <Navbar theme="light" />
    </Interface>
  );
}

export default App;
