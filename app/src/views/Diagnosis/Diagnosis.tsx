import "./Diagnosis.sass"
import Interface from "../../components/Interface/Interface";
import Navbar from "../../components/Navbar/Navbar";
import TopBar from "../../components/TopBar/TopBar";
import DiseaseCard from "../../components/DiseaseCard/DiseaseCard";

type Props = {}

export default function Diagnosis({}: Props) {
  return (
    <Interface>
        <TopBar back />
        <DiseaseCard />
        <Navbar theme="light" />
    </Interface>
  );
}