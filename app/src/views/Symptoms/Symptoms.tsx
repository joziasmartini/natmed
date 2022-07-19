import "./Symptoms.sass";
import Interface from "../../components/Interface/Interface";
import Navbar from "../../components/Navbar/Navbar";
import SearchInput from "../../components/SearchInput/SearchInput";
import TopBar from "../../components/TopBar/TopBar";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

function Search() {
  return (
    <Interface>
        <Link to="/login">
          <TopBar back />
        </Link>
        <SearchInput />
        <Link to="/diagnosis">
          <Button type="primary" text="Diagnosis" action={() => {}} />
        </Link>
        <Navbar theme="light" />
    </Interface>
  );
}

export default Search;
