import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
    const meanings = props.results?.meanings?.[0];

    if(!props.results) {
        return null;
    }

    if (!meanings) {
        return <div className="Results">Word not found</div>;
    }

    return (
        <div className="Results">
            <h2>{props.results.word}</h2>
            {props.results.meanings.map(function(meaning, index)
            {

                return <div key={index}>
                    <Meaning meaning={meaning}/>
                </div>
            })};
            
        </div>
    );
}