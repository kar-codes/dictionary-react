import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results(props) {
    const meaning = props.results?.meanings?.[1];
    const phonetic = props.results?.phonetic;
    

    if(!props.results) {
        return null;
    }

    if (!meaning) {
        return <div className="Results">Word not found</div>;
    }
    console.log(props.results.phonetic);
    return (
        <div className="Results">
            <h2 className="typewriter">{props.results.word}</h2>
            <Phonetic data={phonetic} speechText={props.results.word}/>
            <Meaning data={meaning}/>
            
        </div>
    );
}