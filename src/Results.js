import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
    const meaning = props.results?.meanings?.[1];

    if(!props.results) {
        return null;
    }

    if (!meaning) {
        return <div className="Results">Word not found</div>;
    }

    return (
        <div className="Results">
            <h2 className="typewriter">{props.results.word}</h2>

            <Meaning data={meaning}/>
            
        </div>
    );
}