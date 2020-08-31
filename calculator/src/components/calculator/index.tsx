import React, { useState } from 'react'
import {addValue, subValue, divValue, multiplyValue} from '../../services/calculator'

function Calculator() {
    let result = 0

    const [currentValue, setCurrentValue] = useState('')
    const [operation, setOperation] = useState('')
    const [editingValue, setEditingValue] = useState('')

    const numbers = ["9", "8", "7", "6", "5", "4", "3",  "2", "1", "0", "."]

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
        <div>
            <input value={editingValue} readOnly type="text"/>  
            <button onClick={clear}>C</button>    
            <button onClick={clearAll}>CA</button>                         
            {   
                numbers.map( (numberValue: string) => {
                return (
                        <button 
                        value={numberValue} 
                        onClick={(e) => {
                                    handleEditingValue(e.currentTarget.value)
                                }} >
                        {numberValue}            
                        </button>
                    )
                })
            }

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
                    handleOperation("/")
                }}>/</button>
            <button
                onClick={(e) => {
                    handleOperation("*")
                }}>x</button>

            <button onClick={calculate}>=</button>
            <span>{ currentValue }</span>
        </div>
    )
}

export default Calculator