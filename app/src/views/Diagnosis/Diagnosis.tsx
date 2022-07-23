import "./Diagnosis.sass"
import Interface from "../../components/Interface/Interface";
import Navbar from "../../components/Navbar/Navbar";
import TopBar from "../../components/TopBar/TopBar";
import DiseaseCard from "../../components/DiseaseCard/DiseaseCard";
import { Link } from "react-router-dom";

export default function Diagnosis() {
  return (
    <Interface>
        <Link to="/symptoms">
          <TopBar back />
        </Link>
        <DiseaseCard disease={""}/>
        <Navbar theme="light" />
    </Interface>
  );
}