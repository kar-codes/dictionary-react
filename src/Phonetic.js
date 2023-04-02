import React from "react";

export default function Phonetic({data: {phonetic}}){
   return (
    <div className="phonetic">
        {phonetic &&(
            <p><strong>Phonetic: </strong>{phonetic}</p>
        )}
        
    </div>
   )
}