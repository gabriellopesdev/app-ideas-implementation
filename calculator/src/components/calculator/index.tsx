import React, { useState } from 'react'
import {addValue, subValue, divValue, multiplyValue} from '../../services/calculator'

import './style.css'

function Calculator() {
    let result = 0

    const [currentValue, setCurrentValue] = useState('')
    const [operation, setOperation] = useState('')
    const [editingValue, setEditingValue] = useState('')

    const numbers = [ "7", "8", "9",  "4", "5", "6",  "1", "2", "3", "0", "."]

    function calculate() {
        switch (operation) {
            case '+': 
                result = addValue(currentValue, editingValue)               
                break
            case '-': 
                result = subValue(currentValue, editingValue ) 
                break
            case '/': 
                result = divValue(currentValue, editingValue ) 
                break
            case '*': 
                result = multiplyValue(currentValue, editingValue)            
                break
        }
        setCurrentValue(String(result)); 
        setEditingValue('')
    }

    function clear() {
        setEditingValue('')
    }

    function clearAll() {
        setEditingValue('')
        setCurrentValue('')
    }

    function handleOperation(value: string) {
        setOperation(value)
        if (!currentValue) {
            setCurrentValue(editingValue)   
        }        
        setEditingValue('')
    }

    function handleEditingValue(value: string) {
        if (editingValue.length === 8) {
            return
        }
        setEditingValue(editingValue + value)
    }
    return (
        <div className="container">

            <div className="display">
                    <input value={editingValue} readOnly type="text"/>    
            </div>

            <div className="headButtons">               
                   
                <button onClick={clear}>C</button>     
                
                <button onClick={clearAll}>CA</button>      
            
                <button>+/-</button>    
            
                <button 
                    onClick={(e) => {
                        handleOperation("/")
                    }}>/
                </button>    
                     
                    
            </div> 
            <div className="leftContent">
                
                <div className="numbersContainer">
                {   
                        numbers.map( (numberValue: string) => {
                        return (
                                <div>
                                    <button 
                                    value={numberValue} 
                                    onClick={(e) => {
                                                handleEditingValue(e.currentTarget.value)
                                            }} >
                                    {numberValue}            
                                    </button>    
                                </div>
                                
                            )
                        })
                    }
                </div>     
            
                <div className="rigthContent">
                    <button 
                        onClick={(e) => {
                            handleOperation("+")
                        }}>+</button>
                    <button 
                        onClick={(e) => {
                            handleOperation("-")
                        }}>-</button>
                    
                    <button
                        onClick={(e) => {
                            handleOperation("*")
                        }}>x</button>

                    <button onClick={calculate}>=</button>
                </div> 
            </div>
            <span>{ currentValue }</span>
        </div>
    )
}

export default Calculator