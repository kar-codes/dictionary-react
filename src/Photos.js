import React from "react";

export default function Photos(props){
   if (props.photos) {
    return "hello from photos";
   } else {
    return null;
   }
   
}