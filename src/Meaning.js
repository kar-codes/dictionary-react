import React from "react";

export default function Meaning({data: {example, definition, partOfSpeech, synonyms }}){
    return (
        <div className="meaning">
            <p><strong>Part of speech: </strong>{partOfSpeech}</p>
            <p><strong>Definition: </strong>{definition}.</p>
            {synonyms && (
                <p><strong>Synonym: </strong>{synonyms}</p>
                )}
            {example && (
                <p><strong>Example: </strong>{example}.</p>
            )}
        </div>
    ); 
}


