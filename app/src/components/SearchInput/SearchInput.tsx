import { useState } from "react";
import "./SearchInput.sass"

type Props = {
  // saveSymptom: (symptom: string) => void;
  saveSymptoms: (symptoms: any) => void;
  savedSymptoms: string[];
}

export default function SearchInput({saveSymptoms, savedSymptoms}: Props) {
  const [inputValue, setInputValue] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  function keyPress(e: any){
    // If user press enter
    if(e.keyCode === 13){;
      if (inputValue.length > 0) {
        saveSymptoms([...savedSymptoms, inputValue]);
        setInputValue("");
      }
    }
  }

  return (
    <div className=".search-input">
      <input 
        className="search-input-input" 
        type="text" 
        placeholder="O que está sentindo?"
        value={inputValue}
        onChange={e => handleChange(e)}
        onKeyDown={e => keyPress(e)}
      />
    </div>
  )
}