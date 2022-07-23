import "./DiseaseCard.sass";

type Props = {
  disease: string; // disease to display
}

export default function DiseaseCard({disease}: Props) {
  return (
    <div className="disease-card">
      <img className="disease-card-image" src="https://source.unsplash.com/60x60" alt="" />
      <h2 className="disease-card-name">Disease name</h2>
      <p className="disease-card-description">Disease description comes here with more words and a...</p>
      <div className="disease-card-tag-container">
        <span className="disease-card-tag-item">Tag</span>
      </div>
    </div>
  )
}