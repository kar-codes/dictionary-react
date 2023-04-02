import React from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import { BsFillVolumeUpFill } from "react-icons/bs";


export default function Phonetic({data, speechText}){
    const { speak } = useSpeechSynthesis();

 if (!data) {
    return null
 }   
   return (
    <div className="phonetic">
        <button className='btn btn-primary btn-lg speech-btn' 
        onClick={() => speak({ text: speechText})}>
        <BsFillVolumeUpFill/>
        </button>
        <p><strong>Phonetic: </strong>{data}</p>
    </div>
   )
}