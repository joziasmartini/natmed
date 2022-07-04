import "./SearchInput.sass"

type Props = {}

export default function SearchInput({}: Props) {
  return (
    <div className=".search-input">
      <input className="search-input-input" type="text" placeholder="How you are feeling?"/>
    </div>
  )
}