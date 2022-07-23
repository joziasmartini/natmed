import "./Diagnosis.sass"
import { Link } from "react-router-dom";
import Interface from "../../components/Interface/Interface";
import NavBar from "../../components/NavBar/NavBar";
import TopBar from "../../components/TopBar/TopBar";
import DiseaseCard from "../../components/DiseaseCard/DiseaseCard";

export default function Diagnosis() {
  return (
    <Interface>
        <Link to="/symptoms">
          <TopBar back />
        </Link>
        <DiseaseCard disease={""}/>
        <NavBar theme="light" />
    </Interface>
  );
}