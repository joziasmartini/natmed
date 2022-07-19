import "./Diagnosis.sass"
import Interface from "../../components/Interface/Interface";
import Navbar from "../../components/Navbar/Navbar";
import TopBar from "../../components/TopBar/TopBar";
import DiseaseCard from "../../components/DiseaseCard/DiseaseCard";
import { Link } from "react-router-dom";

type Props = {}

export default function Diagnosis({}: Props) {
  return (
    <Interface>
        <Link to="/symptoms">
          <TopBar back />
        </Link>
        <DiseaseCard />
        <Navbar theme="light" />
    </Interface>
  );
}