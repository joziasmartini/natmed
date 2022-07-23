import "./Symptoms.sass";
import { useState } from "react";
import { Link } from "react-router-dom";
import Interface from "../../components/Interface/Interface";
import Navbar from "../../components/Navbar/Navbar";
import SearchInput from "../../components/SearchInput/SearchInput";
import TopBar from "../../components/TopBar/TopBar";
import Button from "../../components/Button/Button";
import Tags from "../../components/Tags/Tags";

function Symptoms() {
  const [symptoms, setSymptoms] = useState([]);

  return (
    <Interface>
        <Link to="/login">
          <TopBar back />
        </Link>
        <SearchInput saveSymptoms={setSymptoms} savedSymptoms={symptoms}/>
        <Tags tags={symptoms}/>
        <Link to="/diagnosis">
          <Button type="primary" text="Diagnosis" action={() => {}} />
        </Link>
        <Navbar theme="light" />
    </Interface>
  );
}

export default Symptoms;
