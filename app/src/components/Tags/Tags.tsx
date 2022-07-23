import './Tags.sass'

type Props = {
  tags: string[]; // tags to display
}

export default function Tags({tags}: Props) {
  return (
    <div className="tags">
      <div className="tag-container">
        {
          tags.map(tag => {
            return <span className="tag-item" data-aos="zoom-in-down">{tag}</span>;
          })
        }
      </div>
    </div>
  )
}