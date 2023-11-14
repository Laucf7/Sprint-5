import React from "react";
import Indicator from "./Indicator"




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
        margin: "auto",
        border: "none",
        borderRadius: "1rem",
        boxShadow: "0 5px 7px",
        paddingBottom: "2rem"
    }

    const ordenButton = {
        display: "flex",
        justifyContent: "flex-end",
    }

        const buttonNextStyle = {
        width: "3rem",
        height: "3rem",
        borderRadius: "50%",
        backgroundColor: "black",
        color: "white",
    }

    const buttonPrevStyle = {
        width: "3rem",
        height: "3rem",
        borderRadius: "50%",
        backgroundColor: "white",
        color: "black",
        marginRight: "5px",
    }

    const dotsStyle = {
        display: "flex",
        justifyContent: "flex-start",
        width: "5%",

    };


    return (
        <div className="card-full" style={cardStyle} >
            <div className="image-container" style={bgColorImage} >
                <img src={props.image} style={{ width: "100%"}}/>
            </div>
            <div className="text-card" style={{ padding: "1rem"}}>
                <h2>{props.title}</h2>
                <p>{props.description}</p>  
                <div style={dotsStyle}>
                <Indicator 
                    totalSteps={props.tutorialData} 
                    currentStep={props.step} 
                    clickDots={props.clickDots}
                />
                </div>
                <div style={ordenButton}>
                {props.step > 0 &&(<button onClick={props.clickPrev} style={buttonPrevStyle}> {"←"} </button>)}
                {props.step < props.tutorialData - 1 &&(<button onClick={props.clickNext} style={buttonNextStyle}> {"→"} </button>)}
                </div>
         
            </div>
        </div>

    );
}