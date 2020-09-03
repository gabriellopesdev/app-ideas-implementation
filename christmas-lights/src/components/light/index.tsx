import React from 'react'
import './style.css'

interface LightProps{
    turnOn: boolean,
    color: string,
    last?: boolean
}

const Light: React.FC<LightProps> = (props) => {
    return (
        <div className={ 'bulb ' + 
                        (props.last ? ' noRope ' : '') +
                        (props.turnOn ?  
                        props.color +' ' +props.color +'-on' : 
                        props.color) }>
            
        </div>
    )
}

export default Light