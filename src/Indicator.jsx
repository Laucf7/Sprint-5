import React from "react";
import styled from "styled-components";



export default function Indicator(props) {

    const IndicatorContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 8px;
    `;

    const IndicatorDots = styled.div`
    width: ${(props)=>(props.isActive ? "15px" : "10px")};
    height: ${(props)=>(props.isActive ? "10px" : "10px")};
    border-radius: ${(props)=>(props.isActive ? "40%" : "50%")};
    background-color: ${(props)=>(props.isActive ? "#222" : "#ddd")};
    cursor:pointer;
    margin: 2px;
    `;

    return (
        <>
            <IndicatorContainer>
                {Array.from({ length: props.totalSteps }).map((_, index) => (
                    <IndicatorDots key={index} isActive={index === props.currentStep} onClick={() => props.clickDots(index)} />
                ))}
            </IndicatorContainer>
        </>
    );


}