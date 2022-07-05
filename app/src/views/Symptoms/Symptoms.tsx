import "./Symptoms.sass";
import Interface from "../../components/Interface/Interface";
import Navbar from "../../components/Navbar/Navbar";
import SearchInput from "../../components/SearchInput/SearchInput";
import TopBar from "../../components/TopBar/TopBar";

function Search() {
  return (
    <Interface>
        <TopBar back />
        <SearchInput />
        <Navbar theme="light" />
    </Interface>
  );
}

export default Search;
