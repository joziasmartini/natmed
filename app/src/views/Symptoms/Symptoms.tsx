import "./Symptoms.sass";
import Interface from "../../components/Interface/Interface";
import Navbar from "../../components/Navbar/Navbar";
import SearchInput from "../../components/SearchInput/SearchInput";
import TopBar from "../../components/TopBar/TopBar";
import { Link } from "react-router-dom";

function Search() {
  return (
    <Interface>
        <Link to="/login">
          <TopBar back />
        </Link>
        <SearchInput />
        <Navbar theme="light" />
    </Interface>
  );
}

export default Search;
