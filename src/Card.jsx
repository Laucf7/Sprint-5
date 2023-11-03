import React from "react";


export default function Card(props) {
    const bgColorImage = {
        backgroundColor: props.bgColor,
        height: "65%",
        overflow: "hidden",
        borderTopLeftRadius: "1rem",
        borderTopRightRadius: "1rem",
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
    };

    const cardStyle = {
        width: "22rem",
        height: "40rem",
        border: "none",
        borderRadius: "1rem",
        boxShadow: "0 5px 7px",
        paddingBottom: "2rem"
    }

    const buttonPrevStyle = {
        width: "3rem",
        height: "3rem",
        float: "left",
        borderRadius: "50%",
        backgroundColor: "black",
        color: "white",
    }

    const buttonNextStyle = {
        width: "3rem",
        height: "3rem",
        float: "right",
        borderRadius: "50%",
        backgroundColor: "black",
        color: "white",
    }
    


    return (
        <div className="card-full" style={cardStyle} >
            <div className="image-container" style={bgColorImage} >
                <img src={props.image} style={{ width: "100%"}}/>
            </div>
            <div className="text-card" style={{ padding: "1rem"}}>
                <h2>{props.title}</h2>
                <p>{props.description}</p>  
                {props.step > 0 &&(<button onClick={props.clickPrev} style={buttonPrevStyle}> {"←"} </button>)}
                {props.step < props.tutorialData - 1 &&(<button onClick={props.clickNext} style={buttonNextStyle}> {"→"} </button>)}
            </div>
        </div>

    );
}