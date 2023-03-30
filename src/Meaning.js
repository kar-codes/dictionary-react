import React from "react";

export default function Meaning(props){
    console.log(props.meaning)
    return (
        <div className="meaning">
            <h3>{props.meaning.meanings.partOfSpeech}</h3>
            <p>{props.meaning[0].meanings.definition}</p>
            <p>{props.meaning[0].meanings.example}</p>
        </div>
        
    );
        

       
    
   
}