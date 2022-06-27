import Button from "./components/Button/Button";
import Interface from "./components/Interface/Interface";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Interface>
      <Button text="Button" />
      <Button text="Button" />
      <Navbar options={["1", "2", "3", "4"]} />
    </Interface>
  );
}

export default App;
