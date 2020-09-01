import React, { useState } from 'react'
import {addValue, subValue, divValue, multiplyValue} from '../../services/calculator'

import './style.css'

function Calculator() {
    let result = 0

    const [currentValue, setCurrentValue] = useState('')
    const [operation, setOperation] = useState('')
    const [editingValue, setEditingValue] = useState('')
    const [history, setHistory] = useState('0')

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
        setHistory(currentValue + ' ' + operation + ' ' + editingValue + ' = ' + result)
    }

    function clear() {
        setEditingValue('')
    }

    function clearAll() {
        setEditingValue('')
        setCurrentValue('')
        setHistory('0')
    }

    function handleOperation(value: string) {
        setOperation(value)
        if (!currentValue) {
            setCurrentValue(editingValue)   
        }        

        setEditingValue('')

        if (!currentValue) {
            setHistory(editingValue + ' ' + value)
        }
        else {
            setHistory(currentValue + ' ' + value + ' ' + editingValue)
        }
    }

    function handleEditingValue(value: string) {
        if (editingValue.length === 8) {
            return
        }
        setEditingValue(editingValue + value)
    }

    function changeSignal() {
        const newValue = Number(editingValue) * -1
        setEditingValue(String(newValue))
    }

    return (
        <div className="container">

            <div className="display">
                <span className="history">{ history }</span> 
                <input value={editingValue} readOnly type="text"/>    
            </div>

            <div className="headButtons">               
                   
                <button onClick={clear}>C</button>     
                
                <button onClick={clearAll}>CA</button>      
            
                <button onClick={changeSignal}>+/-</button>    
            
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
           
        </div>
    )
}

export default Calculator