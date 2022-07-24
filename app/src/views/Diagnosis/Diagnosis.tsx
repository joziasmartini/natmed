import "./Diagnosis.sass"
import { Link } from "react-router-dom";
import Interface from "../../components/Interface/Interface";
import NavBar from "../../components/NavBar/NavBar";
import TopBar from "../../components/TopBar/TopBar";
import DiseaseCard from "../../components/DiseaseCard/DiseaseCard";
import Title from "../../components/Title/Title";
import Space from "../../components/Space/Space";

export default function Diagnosis() {
  return (
    <Interface>
        <Link to="/symptoms">
          <TopBar back />
        </Link>
        <Title text="Diagnóstico" size="medium" />
        <DiseaseCard disease={""}/>
        <Space pixels={100} />
        <NavBar theme="light" />
    </Interface>
  );
}