import React from "react";

export default function Meaning({data: {example, definition, partOfSpeech }}){
    return (
        <div className="meaning">
            <p><strong>Part of speech: </strong>{partOfSpeech}</p>
            <p><strong>Definition: </strong>{definition}.</p>
            {example && (
                <p><strong>Example: </strong>{example}.</p>
            )}
        </div>
    ); 
}


