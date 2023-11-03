import React from "react"
import Card from "./Card"
import { useState } from 'react';


export default function App() {

  const [step,setStep] = useState(0); 
  
  function nextStep(){
    if (step < tutorialData.length - 1){
      setStep(step => step + 1);
    }
  }
  
  const tutorialData = [
    {
      title: "Dedica moltes hores",
      description: "Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.",
      bgColor: "#2a9d8f",
      image: "./src/assets/time_managment.svg",
    },
    {
      title: "Programa projectes propis",
      description: "Més val 10 hores treballant en projectes propis que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.",
      bgColor: "#adb5bd",
      image: "./src/assets/programming.svg",
    },
    {
      title: "Procura descansar",
      description: "Descansar bé i desconnectar són vitals. D'aquesta manera reduiràs l'estrès i l'ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge.",
      bgColor: "#ffc300",
      image: "./src/assets/meditation.svg",
    }
    ];

  return (
    <>
      <Card 
        bgColor = {tutorialData[step].bgColor}
        image = {tutorialData[step].image}
        title = {tutorialData[step].title} 
        description={tutorialData[step].description}
        clickNext={nextStep}
        />
      
    </>
  )
}
