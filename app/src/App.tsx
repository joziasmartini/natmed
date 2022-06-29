import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import Interface from "./components/Interface/Interface";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Interface>
      <Input type="text" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Button type="primary" text="Login" />
      <Navbar theme="light" />
    </Interface>
  );
}

export default App;
