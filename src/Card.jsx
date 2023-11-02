import React from "react";

export default function Card(props){
    
    return (
     <>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <button onClick={props.clickNext}> NEXT </button>
     </>
    );
}