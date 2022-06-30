import Package from "../package.json";
import Interface from "./components/Interface/Interface";
import Logo from "./components/Logo/Logo";
import Version from "./components/Version/Version";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Interface>
      <Logo />
      <Version info={Package.version} />
      <Input type="text" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Button type="primary" text="Login" action="login" />
      <Navbar theme="light" />
    </Interface>
  );
}

export default App;
