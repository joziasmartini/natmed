import Button from "./components/Button/Button";
import Interface from "./components/Interface/Interface";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Interface>
      <Button type="primary" text="Button" />
      <Button type="secondary" text="Button" />
      <Button type="danger" text="Button" />
      <Navbar theme="light" />
    </Interface>
  );
}

export default App;
