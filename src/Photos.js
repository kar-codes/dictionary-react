import React from "react";
import "./Photos.css";

export default function Photos({ photos }){
    return (
        <section className="photos">
            {photos.map(function({ src }, index) {
                return <img key={`photos-${index}`} src={src.landscape} />
            })}
        </section>
    );
}



/*

const Photos = ({ photos }) => (
    <section className="photos">
        {photos.map(({src}, index) => <img key={`photos-${index}`} src={src.landscape} width={150} />)}
    </section>
);

export default Photos;

*/