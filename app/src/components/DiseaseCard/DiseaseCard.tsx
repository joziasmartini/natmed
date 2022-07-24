import "./DiseaseCard.sass";
import { CaretRight, ClipboardText } from "phosphor-react";

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
          <div className="disease-card-text">
              {/* <span className="disase-card-icon">
                <ClipboardText size={36} color="#5EB493"/>
              </span> */}
            <h2 className="disease-card-name">
              <span>Asma</span>
            </h2>
            <p className="disease-card-description">Uma inflamação das vias aéreas que persiste durante muito tempo e, às vezes, por toda a vida.</p>
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
            className="disease-card-button-link" 
            onClick={unfinishedFunctionality}>
              <span>Conhecer</span> 
              <span className="disease-card-button-link-icon">
                <CaretRight size={18} />
              </span>
          </a>
          <a 
            href="#" 
            className="disease-card-button-link" 
            onClick={unfinishedFunctionality}>
            <span>Tratamento</span> 
            <span className="disease-card-button-link-icon">
              <CaretRight size={18} />
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}