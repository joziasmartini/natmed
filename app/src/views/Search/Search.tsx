import "./Search.sass";
import Interface from "./../../components/Interface/Interface";
import Space from "../../components/Space/Space";
import Navbar from "../../components/Navbar/Navbar";

function Search() {

  return (
    <Interface>
      <input type="search" />
      <Space pixels={120} />
      <Navbar theme="light" />
    </Interface>
  );
}

export default Search;
