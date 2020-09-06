import React, { useState } from 'react';
import Light from './components/light'
import './App.css'

function App() {
  const [bulbsList, setBulbsLit] = useState([1, 2, 3, 4])
  const [bulbsQuantity, setBulbsQuantity] = useState(4)
  const [blinkIntensity, setBlinkIntensity] = useState('1')
  const colors = ['red', 'green', 'blue', 'yellow']
  const [lightsOn, setLightsOn] = useState(true)
  const [color1, setColor1] = useState(colors[1])
  const [color2, setColor2] = useState(colors[0])
  function handleLightsOn() {
    setLightsOn(!lightsOn)
  }
  function handleNewBulbList(newBulbQuantity: number) {
    setBulbsQuantity(newBulbQuantity)
    let tempList = []
    for (let i = 1; i <= newBulbQuantity; i++) {
      tempList.push(i)
   }
   setBulbsLit(tempList)
  }

  function handleIntensity(newItensity: string) {      
    document.documentElement.style.setProperty('--animation-intensity', newItensity + 's');
    setBlinkIntensity(newItensity)
  }

  function createBulbs() {

    if (bulbsList.length > 7) {
      handleNewBulbList(7)
    }
    return bulbsList.map((item: number) => {
      const color = item % 2 ? color1 : color2
      const last = (bulbsList.length === item)
      return (   
        <div key={item} className="item">
          <Light 
            color= {color}
            turnOn={lightsOn} 
            last={last}
          />              
        </div>  
      )
    }) 
  }

  return (
    <div className="container">
      <div className="row">
        { 
          createBulbs()
        }   
      </div>
      <div className="row controllers">
       
        <button
          
          className="button button-interruptor"
          onClick={handleLightsOn}>
          {lightsOn ? 'Off' : 'On'}
        </button>
        <div className="component">
          <div>
            <label className="label" htmlFor="color1">Color 1</label>  
          </div>
          <div>
            <select 
              name="color1"
              className="select"
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
          </div>
          
        </div>

        <div className="component">
          <div>
            <label className="label" htmlFor="color2">Color 2</label> 
          </div>
          <div>
            <select 
            name="color2"
            className="select"
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
        </div>   
        <div className="component">
          <div>
            <label className="label" htmlFor="lightsQtd">Light Qtd</label> 
          </div>
          <div>
            <input
              name="lightsQtd"
              className="input" 
              type="text" 
              value={bulbsQuantity} 
              onChange={(e) => {
              handleNewBulbList(Number(e.currentTarget.value))
            }}/>  
          </div>

        </div>       
        <div className="component">
          <div>
            <label 
              className="label" 
              htmlFor="intensity">Intensity
            </label> 
          </div>
          <div>
            <input 
              name="intensity"
              className="input" 
              type="text" 
              value={blinkIntensity} 
              onChange={(e) => {
              handleIntensity(e.currentTarget.value)
            }}/>  
          </div>
        </div>
         
      </div>       
    </div>
  );
}

export default App;
