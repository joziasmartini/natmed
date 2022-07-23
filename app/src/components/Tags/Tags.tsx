import './Tags.sass'

type Props = {
  tags: string[]; // tags to display
}

export default function Tags({tags}: Props) {
  return (
    <div>
      <p className="tags-title">Sintomas</p>
      <div className="tag-container">
        {
          tags.map(tag => {
            return <span className="tag-item">{tag}</span>;
          })
        }
      </div>
    </div>
  )
}