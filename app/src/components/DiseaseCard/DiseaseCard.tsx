import "./DiseaseCard.sass";

type Props = {}

export default function DiseaseCard({}: Props) {
  return (
    <div className="disease-card">
      <img className="disease-card-image" src="https://source.unsplash.com/60x60" alt="Unsplash Image" />
      <h2 className="disease-card-name">Disease name</h2>
      <p className="disease-card-description">Disease description comes here with more words and a...</p>
      <div className="tag-container">
        <span className="tag-item">Tag</span>
      </div>
    </div>
  )
}