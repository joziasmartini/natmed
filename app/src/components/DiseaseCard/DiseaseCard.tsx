import Button from "../Button/Button";
import "./DiseaseCard.sass";

type Props = {
  disease: string; // disease to display
}

export default function DiseaseCard({disease}: Props) {
  return (
    <div>
      <div className="disease-container">
        <div className="disease-card">
          <img className="disease-card-image" src="https://source.unsplash.com/60x60" alt="" />
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
      </div>
      <div className="disease-card-buttons">
        <a href="#" className="disease-card-description-button">Descrição</a>
        <a href="#" className="disease-card-treatment-button">Tratamentos</a>
      </div>
    </div>
  )
}