import React from "react";

export default function Meaning({data: {example, definition, partOfSpeech }}){
    return (
        <div className="meaning">
            <h3>{partOfSpeech}</h3>
            <p>{definition}</p>
            <p>{example}</p>
        </div>
        
    );
        

       
    
   
}


