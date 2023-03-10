import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`searching for ${keyword}`);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);

  }

  return <div className="Dictionary">
    <form onSubmit={search}>
      <input type="search" autoFocus={true} onChange={handleKeywordChange} />
    </form>
  </div>
}
// what i did here was create an event listener that when the submit button is clicked it calls the function search, then i defined the function search (which receive an event i.e search(event)) inside of the dictionary function before the return
//Secondly, to get the value that i'm inputting, we need to use a state.
// So now we create a new state using "let" before the function search(event).
// Now we have a state called keyword and we want to change the value everytime, someone types, so now we add an event listener onChange in the input and assign it a function in this case the functions is handleKeywordChange()