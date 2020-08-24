import React, { useState, useEffect } from 'react'
import ConvertBin2Dec from '../../services/ConvertBin2Dec'

import './index.css'

function Conversor() {

    const [binaryValue, setBinaryValue] = useState('')     
    const [decimalValue, setDecimalValue] = useState('')

    useEffect(() => {
        if (binaryValue) {
            const convertedValue = ConvertBin2Dec(binaryValue)
            setDecimalValue(String(convertedValue))      
        }
        else {
            setDecimalValue('No value to convert!') 
        }
        
    }, [binaryValue])
    return (
        <div className="container">
           <h2>Enter binary value for conversion</h2> 
           <input 
            type="text" 
            name="binaryInput" 
            value={binaryValue}
            pattern="[0-1]*"
            onChange={(e) => {
                if (e.target.validity.valid) {
                    setBinaryValue(e.target.value) 
                }  
                else {
                    return
                }
                
            }}></input> <br/>
           <span>{ decimalValue }</span>
           
        </div>
    )
}

export default Conversor