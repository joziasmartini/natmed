import "./DiseaseCard.sass";
import { ClipboardText } from "phosphor-react";

type Props = {
  disease: string; // disease to display
}

function unfinishedFunctionality() {
  alert("Essa funcionalidade ainda não está disponível.");
}

export default function DiseaseCard({disease}: Props) {
  return (
    <div>
      <div className="disease-container">
        <div className="disease-card">
          <span className="disase-card-icon">
            <ClipboardText size={36} color="#5EB493"/>
          </span>
          <div className="disease-card-text">
            <h2 className="disease-card-name">Asma</h2>
            <p className="disease-card-description">Uma inflamação das vias aéreas que persiste durante muito tempo</p>
          </div>
        </div>
        <div className="disease-card-tag-container">
          <span className="disease-card-tag-item">Falta de ar</span>
          <span className="disease-card-tag-item">Dor no peito</span>
          <span className="disease-card-tag-item">Sudorese</span>
          <span className="disease-card-tag-item">Lábios azulados</span>
        </div>
        <div className="disease-card-buttons">
          <a 
            href="#" 
            className="disease-card-description-button" 
            onClick={unfinishedFunctionality}>
              Descrição
          </a>
          <a 
            href="#" 
            className="disease-card-treatment-button" 
            onClick={unfinishedFunctionality}>
              Tratamentos
          </a>
        </div>
      </div>
    </div>
  )
}