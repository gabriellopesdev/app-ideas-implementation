import React, { useState } from 'react'
import './style.css'

function BorderPreview() {
    const [horizontalTopLeft, setHorizontalTopLeft] = useState('10')    
    const [horizontalTopRight, setHorizontalTopRight] = useState('30')
    const [horizontalBottomRight, setHorizontalBottomRight] = useState('20')
    const [horizontalBottomLeft, setHorizontalBottomLeft] = useState('10')

    const [verticalTopLeft, setVerticalTopLeft] = useState('50')
    const [verticalTopRight, setVerticalTopRight] = useState('30')
    const [verticalBottomRight, setVerticalBottomRight] = useState('20')
    const [verticalBottomLeft, setVerticalBottomLeft] = useState('10')

    function handleValue(value: string, componentName: string) {
        if (Number(value) || !value)  {
            if (Number(value) > 100) {
                value = '100'
            }
            if (Number(value) < 0) {
                value = '0'
            }
            if (!value) {
                value = '0'
            }
            switch (componentName) {
                case 'horizontalTopLeft' :setHorizontalTopLeft(value) 
                break
                case 'horizontalTopRight' :setHorizontalTopRight(value)
                break
                case 'horizontalBottomRight' :setHorizontalBottomRight(value)
                break
                case 'horizontalBottomLeft' :setHorizontalBottomLeft(value)
                break
                case 'verticalTopLeft' :setVerticalTopLeft(value)
                break
                case 'verticalTopRight' :setVerticalTopRight(value)
                break
                case 'verticalBottomRight' :setVerticalBottomRight(value)
                break
                case 'verticalBottomLeft' :setVerticalBottomLeft(value)
                break  
            }
        } 
        else {                       
            return
        }       
    }
    const borderRadiusStyle = {
        borderRadius: 
            horizontalTopLeft + '%' +
            horizontalTopRight + '%' +   
            horizontalBottomRight + '%' +
            horizontalBottomLeft + '%' +
             ' / ' +
            verticalTopLeft + '%' +
            verticalTopRight + '%' +
            verticalBottomRight + '%' +
            verticalBottomLeft + '%' 
    }
    return (
        <div>
            <input                 
                type="text"                         
                value={horizontalTopLeft}        
                name="horizontalTopLeft"
                onChange={(e) => {
                    handleValue(e.target.value, e.target.name)             
                }}
            >
            </input>
            <input                 
                type="text"                         
                value={horizontalTopRight}        
                name="horizontalTopRight"
                onChange={(e) => {
                    handleValue(e.target.value, e.target.name)             
                }}
            >
            </input>
            <input                 
                type="text"                         
                value={horizontalBottomRight}        
                name="horizontalBottomRight"
                onChange={(e) => {
                    handleValue(e.target.value, e.target.name)             
                }}
            >
            </input>
            <input                 
                type="text"                         
                value={horizontalBottomLeft}        
                name="horizontalBottomLeft"
                onChange={(e) => {
                    handleValue(e.target.value, e.target.name)             
                }}
            >
            </input>
            <input                 
                type="text"                         
                value={verticalTopLeft}        
                name="verticalTopLeft"
                onChange={(e) => {
                    handleValue(e.target.value, e.target.name)             
                }}
            >
            </input>
            <input                 
                type="text"                         
                value={verticalTopRight}        
                name="verticalTopRight"
                onChange={(e) => {
                    handleValue(e.target.value, e.target.name)             
                }}
            >
            </input>
            <input                 
                type="text"                         
                value={verticalBottomRight}        
                name="verticalBottomRight"
                onChange={(e) => {
                    handleValue(e.target.value, e.target.name)             
                }}
            >
            </input>
            <input                 
                type="text"                         
                value={verticalBottomLeft}        
                name="verticalBottomLeft"
                onChange={(e) => {
                    handleValue(e.target.value, e.target.name)             
                }}
            >
            </input>

            <div 
                className="bordered-rec"
                style={borderRadiusStyle}
            >
            </div>
        </div>
    )
}

export default BorderPreview