import React, { useState } from 'react';
import Light from './components/light'
import './App.css'

function App() {
  const bulbsList = [1-4]
  const colors = ['red', 'green', 'blue', 'yellow']
  const [lightsOn, setLightsOn] = useState(true)
  const [color1, setColor1] = useState(colors[1])
  const [color2, setColor2] = useState(colors[0])
  function handleLightsOn() {
    setLightsOn(!lightsOn)
  }
  return (
    <div className="container">
      { 
        bulbsList.map((item: number) => {
          const color = item % 2 ? color1 : color2
          const last = (bulbsList.length === item)
          return (   
            <div className="item">
              <Light 
                color= {color}
                turnOn={lightsOn} 
                last={last}
              />              
            </div>       
           
          )
        }) 
      }   
      <button onClick={handleLightsOn}>Interruptor</button>
      <select 
        value={color1} 
        onChange={(e) => {
          setColor1(e.target.value)
        }}   
      >
        <option value="" disabled hidden>Selecione uma opção</option>
        { 
          colors.map((item: string) => {
            return <option key={item} value={item}>{item}</option>
          }) 
        }         
      </select>

      <select 
        value={color2} 
        onChange={(e) => {
          setColor2(e.target.value)
        }}   
      >
        <option value="" disabled hidden>Selecione uma opção</option>
        { 
          colors.map((item: string) => {
            return <option key={item} value={item}>{item}</option>
          }) 
        }               
      </select>
                        
    </div>
  );
}

export default App;
